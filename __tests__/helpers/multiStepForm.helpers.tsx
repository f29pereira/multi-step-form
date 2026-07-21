import { ReactElement, ReactNode } from "react";
import {
  FormProvider,
  useForm,
  DefaultValues,
  FieldValues,
} from "react-hook-form";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  FIXTURE_FORM_STEPS,
  FIXTURE_MULTISTEPFORM,
  FIXTURE_PLANS_LIST,
  FIXTURE_SUBSCRIPTIONTOGGLE,
  FIXTURE_THANKYOU,
  FIXTURE_STEP,
  FIXTURE_ADD_ONS_LIST,
} from "../../fixtures/multiStepForm.fixtures";
import { getFormattedPrice } from "@/app/lib/utils";
import { getSubscriptionTotal } from "@/app/components/MultiStepForm/Forms/LastStep/FinishSubscription/FinishSubscription.utils";
import { getPlanById } from "@/app/components/MultiStepForm/Forms/SelectPlan/SelectPlan.utils";
import {
  AddOnProps,
  Dictionary,
  LocaleCode,
  PlanProps,
} from "@/app/components/types";
import { getSelectedAddOns } from "@/app/components/MultiStepForm/Forms/PickAddOns/PickAddOns.utils";

/**
 * Expects the visibility of the following elements, in the PersonalInfo component:
 * - Main header
 * - Form description
 * - Form with the inputs: Name, Email Address and Phone Number
 */
export const expectPersonalInfoVisible = () => {
  const personalInfo = FIXTURE_FORM_STEPS.personalInfo;

  const title = screen.getByRole("heading", {
    level: 1,
    name: personalInfo.title,
  });

  const description = screen.getByText(personalInfo.description);

  const nameInput = screen.getByLabelText(personalInfo.nameInputLabel);
  const emailInput = screen.getByLabelText(personalInfo.emailInputLabel);
  const phoneInput = screen.getByLabelText(personalInfo.phoneInputLabel);

  expect(title).toBeVisible();
  expect(description).toBeVisible();
  expect(nameInput).toBeVisible();
  expect(emailInput).toBeVisible();
  expect(phoneInput).toBeVisible();
};

/**
 * Fills the PersonalInfo component inputs: Name, Email Address and Phone Number
 */
export const fillPersonalInfo = async () => {
  const personalInfo = FIXTURE_FORM_STEPS.personalInfo;

  const nameInput = screen.getByLabelText(personalInfo.nameInputLabel);
  const emailInput = screen.getByLabelText(personalInfo.emailInputLabel);
  const phoneInput = screen.getByLabelText(personalInfo.phoneInputLabel);

  await userEvent.type(nameInput, "John Doe");
  await userEvent.type(emailInput, "johndoe@email.com");
  await userEvent.type(phoneInput, "123456789");
};

/**
 * Expects the visibility of the following elements, in the SelectPlan component:
 * - Main header
 * - Toggle button
 * - Form description
 * - Form with a list of plans
 * @param plansListLength - number of plans being rendered
 */
export const expectSelectPlanVisible = (plansListLength: number) => {
  const selectPlan = FIXTURE_FORM_STEPS.selectPlan;

  const title = screen.getByRole("heading", {
    level: 1,
    name: selectPlan.title,
  });

  const description = screen.getByText(selectPlan.description);

  const plansList = screen.getByTestId("plans-list");

  expect(title).toBeVisible();
  expect(description).toBeVisible();
  expect(plansList.children).toHaveLength(plansListLength);
};

/**
 * Expects the visibility of the following elements, in the SubscriptionToggle component:
 * - Monthly text
 * - Toggle button
 * - Yearly text
 * @param isYearly - if true returns the yearly plans, if false returns the montly plans
 */
export const expectSubscriptionToggleVisible = (isYearly: boolean) => {
  const subscriptionToggle = FIXTURE_SUBSCRIPTIONTOGGLE;

  const monthly = screen.getByText(subscriptionToggle.monthly);
  const yearly = screen.getByText(subscriptionToggle.yearly);

  const btnDescription = `${subscriptionToggle.btnDescription} ${isYearly ? "Yearly" : "Monthly"}`;
  const btn = screen.getByRole("button", {
    name: btnDescription,
  });

  expect(monthly).toBeVisible();
  expect(yearly).toBeVisible();
  expect(btn).toBeVisible();
};

/**
 * Expects the radio input to be in the document for the Plan component
 */
export const expectPlanRadioInputInDocument = () => {
  const radioInput = screen.getByTestId("plan-radio-input");

  expect(radioInput).toBeInTheDocument();
};

/**
 * Expects the visibility of the following elements, in the Plan component:
 * - Plan type
 * - Price (monthly or yearly value)
 * - Discount if applicable
 *
 * @param isYearly    if true returns the yearly pricing, if false returns the montly pricing
 * @param type        plan type
 * @param price       plan price
 * @param localeCode  current locale code
 * @param dictionary  localization dictionary
 * @param discount    plan discount
 */
export const expectPlanVisible = (
  isYearly: boolean,
  type: string,
  price: number,
  localeCode: LocaleCode,
  dictionary: Dictionary,
  discount: string | undefined,
) => {
  const planType = screen.getByText(type);

  const formattedPrice = getFormattedPrice(
    isYearly,
    price,
    localeCode,
    dictionary,
  );
  const planPrice = screen.getByText(formattedPrice);

  expect(planType).toBeVisible();
  expect(planPrice).toBeVisible();

  const planDiscount = screen.getByTestId("plan-discount");
  expect(planDiscount).toBeVisible();

  if (discount) {
    expect(planDiscount).toHaveTextContent(discount);
  } else {
    expect(planDiscount).toHaveTextContent("");
  }
};

/**
 * Expects the visibility of the following elements, in the SelectPlan component:
 * - Main header
 * - Form description
 * - Form with a list of add-ons
 * @param addOnsListLength - number of addOns being rendered
 */
export const expectPickAddOnsVisible = (addOnsListLength: number) => {
  const pickAddOns = FIXTURE_FORM_STEPS.pickAddOns;

  const title = screen.getByRole("heading", {
    level: 1,
    name: pickAddOns.title,
  });

  const description = screen.getByText(pickAddOns.description);

  const plansList = screen.getByTestId("add-ons-list");

  expect(title).toBeVisible();
  expect(description).toBeVisible();
  expect(plansList.children).toHaveLength(addOnsListLength);
};

/**
 * Expects the visibility of the following elements, in the AddOn component:
 * - Checkbox input
 * - Add-on type
 * - Add-on description
 * - Price (monthly or yearly value)
 *
 * @param isYearly    if true returns the yearly pricing, if false returns the montly pricing
 * @param type        add-on type
 * @param discription add-on description
 * @param price       add-on price
 * @param localeCode  current locale code
 * @param dictionary  localization dictionary
 */
export const expectAddOnVisible = (
  isYearly: boolean,
  type: string,
  discription: string,
  price: number,
  localeCode: LocaleCode,
  dictionary: Dictionary,
) => {
  const checkBoxInput = screen.getByTestId("add-on-input");

  const addOnType = screen.getByText(type);

  const addOnDescription = screen.getByText(discription);

  const formattedPrice = `+${getFormattedPrice(
    isYearly,
    price,
    localeCode,
    dictionary,
  )}`;
  const addOnPrice = screen.getByText(formattedPrice);

  expect(checkBoxInput).toBeVisible();
  expect(addOnType).toBeVisible();
  expect(addOnDescription).toBeVisible();
  expect(addOnPrice).toBeVisible();
};

/**
 * Expects the visibility of the following elements, in the FinishSubscription component:
 * - Main header
 * - Description
 * - Plan type and price
 * - Change plan button
 * - Form data: selected plan and add-ons list
 * - Subscription total
 * @param isYearly       if true returns the yearly plans, if false returns the montly plans
 * @param selectedPlanId selected plan id
 * @param selectedAddOns list of selected add-ons id
 * @param localeCode  current locale code
 * @param dictionary  localization dictionary
 */
export const expectFinishSubscriptionVisible = (
  isYearly: boolean,
  selectedPlanId: string,
  selectedAddOns: string[],
  localeCode: LocaleCode,
  dictionary: Dictionary,
) => {
  const finishSubscription = FIXTURE_FORM_STEPS.finishSubscription;

  const selectedPlan = getPlanById(
    FIXTURE_PLANS_LIST,
    selectedPlanId,
    isYearly,
  ) as PlanProps;

  const selectedAddOnsList = getSelectedAddOns(
    FIXTURE_ADD_ONS_LIST,
    selectedAddOns,
    isYearly,
  ) as AddOnProps[];

  const title = screen.getByRole("heading", {
    level: 1,
    name: finishSubscription.title,
  });

  const description = screen.getByText(finishSubscription.description);

  const planTypeTitle = screen.getByRole("heading", {
    level: 2,
    name: `${finishSubscription.FIXTURE_PLAN.type} (${isYearly ? "Yearly" : "Monthly"})`,
  });

  const changeBtn = screen.getByRole("button", {
    name: finishSubscription.changeBtn,
  });

  const planPriceCont = screen.getByTestId("plan-price");
  const planPriceValue = `${getFormattedPrice(
    isYearly,
    selectedPlan.price.value,
    localeCode,
    dictionary,
  )}`;

  const addOnTypeContainerList = screen.getAllByTestId("add-on-type");
  const addOnPriceContainerList = screen.getAllByTestId("add-on-price");

  const totalText = screen.getByText(
    `Total ${`(per ${isYearly ? "year" : "month"})`}`,
  );

  const totalValuePrice = getSubscriptionTotal(
    selectedPlan,
    selectedAddOnsList,
  );
  const totalValue = screen.getByText(
    `${getFormattedPrice(isYearly, totalValuePrice, localeCode, dictionary)}`,
  );

  expect(title).toBeVisible();
  expect(description).toBeVisible();
  expect(planTypeTitle).toBeVisible();
  expect(changeBtn).toBeVisible();
  expect(planPriceCont).toBeVisible();
  expect(planPriceCont).toHaveTextContent(planPriceValue);

  selectedAddOnsList.forEach((addOn, index) => {
    // Add-on type
    expect(addOnTypeContainerList[index]).toBeVisible();
    expect(addOnTypeContainerList[index]).toHaveTextContent(addOn.type);

    // Add-on price
    const addOnPriceValue = `+${getFormattedPrice(isYearly, addOn.price, localeCode, dictionary)}`;
    expect(addOnPriceContainerList[index]).toBeVisible();
    expect(addOnPriceContainerList[index]).toHaveTextContent(addOnPriceValue);
  });

  expect(totalText).toBeVisible();
  expect(totalValue).toBeVisible();
};

/**
 * Expects the visibility of the following elements, in the ThankYou component:
 * - Main header
 * - Description
 */
export const expectThankYouVisible = () => {
  const thankYou = FIXTURE_THANKYOU;

  const title = screen.getByRole("heading", {
    level: 1,
    name: thankYou.title,
  });

  const description = screen.getByText(thankYou.description);

  expect(title).toBeVisible();
  expect(description).toBeVisible();
};

/**
 * Expects the visibility of the following elements, in the StepsList component:
 * - List of steps
 * @param stepsListLength - number of steps being rendered
 */
export const expectStepsListVisible = (stepsListLength: number) => {
  const stepsList = screen.getByTestId("steps-list");

  expect(stepsList.children).toHaveLength(stepsListLength);
};

/**
 * Expects the visibility of the following elements, in the Step component:
 * - Step index and name
 */
export const expectStepVisible = () => {
  const step = FIXTURE_STEP;

  const stepIndex = screen.getByText(`STEP ${step.stepIndex}`);
  const stepName = screen.getByText(step.stepName);

  expect(stepIndex).toBeVisible();
  expect(stepName).toBeVisible();
};

/**
 * Expects the visibility of an error message
 * @messageText - message text
 */
export const expectErrorMessageVisible = (messageText: string) => {
  const errorMessage = screen.getByText(messageText);

  expect(errorMessage).toBeVisible();
};

/**
 * Submits the "Confirm" button from the MultiStepForm component
 */
export const submitForm = async () => {
  const multiStepForm = FIXTURE_MULTISTEPFORM;

  const btn = screen.getByRole("button", {
    name: multiStepForm.nextBtn,
  });

  await userEvent.click(btn);
};

/**
 * Returns a React Form Hook provider with react element
 * @param ui           - React element to be rendered inside the React Form Hook provider
 * @param defaultValue - React Form Hook useForm defaultValues
 */
export const renderWithReactFormHookProvider = <T extends FieldValues>(
  ui: ReactElement,
  defaultValue?: DefaultValues<T>,
) => {
  // Wrapper component
  const Wrapper = ({ children }: { children: ReactNode }) => {
    const methods = useForm({
      defaultValues: defaultValue,
    });

    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  return render(<Wrapper>{ui}</Wrapper>);
};
