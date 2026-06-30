// Reusable helper functions for mobile and desktop E2E tests

import { Page, expect } from "@playwright/test";
import {
  FIXTURE_MULTISTEPFORM,
  FIXTURE_FORM_STEPS,
  FIXTURE_PLANS_LIST,
  FIXTURE_ADD_ONS_LIST,
} from "../../fixtures/multiStepForm.fixtures";
import { PlanProps, AddOnProps } from "@/app/components/types";
import { getPlanById } from "@/app/components/MultiStepForm/Forms/SelectPlan/SelectPlan.utils";
import { formatYearlyOrMonthlyPrice } from "@/app/lib/utils";
import { getSubscriptionTotal } from "@/app/components/MultiStepForm/Forms/LastStep/FinishSubscription/FinishSubscription.utils";
import { getSelectedAddOns } from "@/app/components/MultiStepForm/Forms/PickAddOns/PickAddOns.utils";

const multiStepForm = FIXTURE_MULTISTEPFORM;
const personalInfo = FIXTURE_FORM_STEPS.personalInfo;
const selectPlan = FIXTURE_FORM_STEPS.selectPlan;
const pickAddOns = FIXTURE_FORM_STEPS.pickAddOns;
const finishSubscription = FIXTURE_FORM_STEPS.finishSubscription;
const plansList = FIXTURE_PLANS_LIST;
const addOnsList = FIXTURE_ADD_ONS_LIST;

/**
 * Asserts that the correct number of form steps is being displayed
 * @param page            - Playwright page
 * @param stepsListLength - number of steps being rendered
 */
export const expectNumberOfSteps = async (
  page: Page,
  stepsListLength: number,
) => {
  const steps = page.getByTestId("step");
  await expect(steps).toHaveCount(stepsListLength);

  for (const step of await steps.all()) {
    await expect(step).toBeVisible();
  }
};

/**
 * Asserts that only the current step has the selected style
 * @param page              - Playwright page
 * @param stepsListLength   - number of steps being rendered
 * @param selectedStepIndex - current selected step index
 */
export const expectSelectedStepStyle = async (
  page: Page,
  stepsListLength: number,
  currentStepIndex: number,
) => {
  const stepCircles = page.getByTestId("step-circle");

  for (let index = 0; index < stepsListLength; index++) {
    const stepCircle = stepCircles.nth(index);

    if (index === currentStepIndex) {
      // Step with selected class
      await expect(stepCircle).toHaveClass(/selected/);
    } else {
      // Step with no selected class
      await expect(stepCircle).not.toHaveClass(/selected/);
    }
  }
};

/**
 * Submits all form steps
 * @param page           - Playwright page
 * @param name           - Name input value
 * @param emailAddress   - Email Address input value
 * @param phoneNumber    - Phone Number input value
 * @param selectedPlan   - selected plan id
 * @param selectedAddOns - list of selected ids
 */
export const submitMultiStepForm = async (
  page: Page,
  name: string,
  emailAddress: string,
  phoneNumber: string,
  selectedPlan: string,
  selectedAddOns: string[],
) => {
  // Goes to the first form step (Personal Info)
  await expectCurrentStepVisible(page, personalInfo.title);

  // Submits the first form step (Personal Info)
  await submitPersonalInfo(page, name, emailAddress, phoneNumber);

  // Goes to the second form step (Select Plan)
  await expectCurrentStepVisible(page, selectPlan.title);

  // Submits the second form step (Select Plan)
  await submitSelectPlan(page, selectedPlan);

  // Goes to the third form step (Pick Add-ons)
  await expectCurrentStepVisible(page, pickAddOns.title);

  // Submits the third form step (Pick Add-ons)
  await submitPickAddOns(page, selectedAddOns);
};

/**
 * Asserts that, the current form step is visible
 * @param page      - Playwright page
 * @param formTitle - Current form step main title
 */
export const expectCurrentStepVisible = async (
  page: Page,
  stepTitle: string,
) => {
  await expect(
    page.getByRole("heading", { level: 1, name: stepTitle }),
  ).toBeVisible();
};

/**
 * Asserts that, the Multi-step form submitted data is visible:
 * - Description
 * - Plan type and price
 * - Change plan button
 * - Form data: selected plan and add-ons list
 * - Subscription total
 * @param page           - Playwright page
 * @param isYearly       - if true returns the yearly plans, if false returns the montly plans
 * @param selectedPlanId - selected plan id
 * @param selectedAddOns - list of selected add-ons id
 */
export const expectFinishSubscriptionVisible = async (
  page: Page,
  isYearly: boolean,
  selectedPlanId: string,
  selectedAddOns: string[],
) => {
  await expect(page.getByText(finishSubscription.description)).toBeVisible();

  const selectedPlan = getPlanById(
    plansList,
    selectedPlanId,
    isYearly,
  ) as PlanProps;

  const selectedAddOnsList = getSelectedAddOns(
    selectedAddOns,
    isYearly,
  ) as AddOnProps[];

  const planTypeTitle = page.getByRole("heading", {
    level: 2,
    name: `${selectedPlan.type} (${isYearly ? "Yearly" : "Monthly"})`,
  });

  const changeBtn = page.getByRole("button", {
    name: finishSubscription.changeBtn,
  });

  const planPriceCont = page.getByTestId("plan-price");
  const planPriceValue = `${formatYearlyOrMonthlyPrice(isYearly, selectedPlan.price.value)}`;

  const addOnTypeContainerList = page.getByTestId("add-on-type");
  const addOnPriceContainerList = page.getByTestId("add-on-price");

  const totalText = page.getByText(
    `Total ${`(per ${isYearly ? "year" : "month"})`}`,
  );
  const totalValue = page.getByText(
    `${formatYearlyOrMonthlyPrice(isYearly, getSubscriptionTotal(selectedPlan, selectedAddOnsList))}`,
  );

  await expect(planTypeTitle).toBeVisible();
  await expect(changeBtn).toBeVisible();
  await expect(planPriceCont).toBeVisible();
  await expect(planPriceCont).toHaveText(planPriceValue);

  for (let index = 0; index < selectedAddOnsList.length; index++) {
    const addOn = selectedAddOnsList[index];

    // Add-on type
    const addOnType = addOnTypeContainerList.nth(index);
    await expect(addOnType).toBeVisible();
    await expect(addOnType).toHaveText(addOn.type);

    // Add-on price
    const addOnPrice = addOnPriceContainerList.nth(index);
    const addOnPriceValue = `+${formatYearlyOrMonthlyPrice(isYearly, addOn.price)}`;
    await expect(addOnPrice).toBeVisible();
    await expect(addOnPrice).toHaveText(addOnPriceValue);
  }

  await expect(totalText).toBeVisible();
  await expect(totalValue).toBeVisible();
};

/**
 * Fills the Personal info form inputs: Name, Email Address and Phone Number and submits the form
 * @param page         - Playwright page
 * @param name         - Name input value
 * @param emailAddress - Email Address input value
 * @param phoneNumber  - Phone Number input value
 */
export const submitPersonalInfo = async (
  page: Page,
  name: string,
  emailAddress: string,
  phoneNumber: string,
) => {
  const formContainer = page.getByTestId("personal-info-form");
  await expect(formContainer).toBeVisible();

  const nameInput = formContainer.getByLabel(personalInfo.nameInputLabel);
  const emailInput = formContainer.getByLabel(personalInfo.emailInputLabel);
  const phoneInput = formContainer.getByLabel(personalInfo.phoneInputLabel);

  await expect(nameInput).toBeVisible();
  await expect(emailInput).toBeVisible();
  await expect(phoneInput).toBeVisible();

  await nameInput.fill(name);
  await emailInput.fill(emailAddress);
  await phoneInput.fill(phoneNumber);

  await expectPersonalInfoInputValues(page, name, emailAddress, phoneNumber);

  await submitForm(page);
};

/**
 * Asserts that, the Personal Info inputs have the saved form data
 * @param page         - Playwright page
 * @param name         - Name input value
 * @param emailAddress - Email Address input value
 * @param phoneNumber  - Phone Number input value
 */
export const expectPersonalInfoInputValues = async (
  page: Page,
  name: string,
  emailAddress: string,
  phoneNumber: string,
) => {
  await expect(page.getByLabel(personalInfo.nameInputLabel)).toHaveValue(name);
  await expect(page.getByLabel(personalInfo.emailInputLabel)).toHaveValue(
    emailAddress,
  );
  await expect(page.getByLabel(personalInfo.phoneInputLabel)).toHaveValue(
    phoneNumber,
  );
};

/**
 * Selects a plan radio button from the Select Plan form and submits the form
 * @param page         - Playwright page
 * @param selectedPlan - selected plan id
 */
export const submitSelectPlan = async (page: Page, selectedPlan: string) => {
  const selectedPlanIndex = Number(selectedPlan) - 1;

  if (selectedPlanIndex < 0 || selectedPlanIndex >= plansList.length) {
    throw Error("Invalid selected plan index");
  } else {
    const plansLabels = page.getByTestId("plan-label");
    const plansRadioBtns = page.getByTestId("plan-radio-input");

    const selectedLabel = plansLabels.nth(selectedPlanIndex);
    const selectedRadioBtn = plansRadioBtns.nth(selectedPlanIndex);

    // Click the plan label, because the radio input is screen reader only
    await selectedLabel.click();

    // Assert that the radio input is checked
    await expect(selectedRadioBtn).toBeChecked();

    await submitForm(page);
  }
};

/**
 * Checks the add-ons checkboxes from the Select Plan form and submits the form
 * @param page           - Playwright page
 * @param selectedAddOns - list of selected add-ons ids
 */
export const submitPickAddOns = async (
  page: Page,
  selectedAddOns: string[],
) => {
  const addOnsIds = addOnsList.map((plan) => plan.id);

  const addOnsIdsSet = new Set(addOnsIds);
  const selectedAddOnsIdsSet = new Set(selectedAddOns);

  if (!selectedAddOnsIdsSet.isSubsetOf(addOnsIdsSet)) {
    throw Error("Invalid selected add-ons");
  } else {
    const addOnsCheckboxes = page.getByTestId("add-on-input");

    for (let index = 0; index < selectedAddOns.length; index++) {
      const selectedAddOnIndex = Number(selectedAddOns[index]) - 1;

      const addOnInput = addOnsCheckboxes.nth(selectedAddOnIndex);

      // Check add-on checkbox
      await addOnInput.check();

      // Assert that the checkbox is checked
      await expect(addOnInput).toBeChecked();
    }

    await submitForm(page);
  }
};

/**
 * Submits the current form
 * @param page - Playwright page
 */
export const submitForm = async (page: Page) => {
  const submitBtn = page.getByRole("button", {
    name: multiStepForm.nextBtn,
  });

  // Prevents a potential error in the Safari browser, as the button is inside a fixed parent container
  await expect(submitBtn).toBeInViewport();

  await submitBtn.click();
};

/**
 * Goes to the previous form
 * @param page - Playwright page
 */
export const goBack = async (page: Page) => {
  const goBackBtn = page.getByRole("button", {
    name: multiStepForm.prevBtn,
  });

  // Prevents a potential error in the Safari browser, as the button is inside a fixed parent container
  await expect(goBackBtn).toBeInViewport();

  await goBackBtn.click();
};
