import { test } from "@playwright/test";

import {
  submitPersonalInfo,
  expectCurrentStepVisible,
  goBack,
  expectPersonalInfoInputValues,
  submitMultiStepForm,
  expectFinishSubscriptionVisible,
} from "../helpers/shared.helpers";
import {
  multiStepFormContext,
  FIXTURE_FORM_STEPS,
  FIXTURE_THANKYOU,
} from "../../fixtures/multiStepForm.fixtures";

// Multi-step form Data
const submittedData = multiStepFormContext();
const name = submittedData.personalInfo.name;
const email = submittedData.personalInfo.email;
const phone = submittedData.personalInfo.phone;
const isYearly = submittedData.isYearly;
const selectedPlanId = submittedData.selectedPlanId;
const selectedAddOnsIds = submittedData.selectedAddOns;

// Form step elements
const personalInfo = FIXTURE_FORM_STEPS.personalInfo;
const selectPlan = FIXTURE_FORM_STEPS.selectPlan;
const finishSubscription = FIXTURE_FORM_STEPS.finishSubscription;
const thankYou = FIXTURE_THANKYOU;

/**
 * End to End testing: list of form steps
 */
test.describe("Multi step form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/"); // baseURL
  });

  test("doesn't allow the user to go to the next step if the current step has an invalid field", async ({
    page,
  }) => {
    // Submits the first form step (Personal Info) with invalid data
    await submitPersonalInfo(page, "", "", "");

    // Stays on the first form step
    await expectCurrentStepVisible(page, personalInfo.title);
  });

  test("keeps the submitted form data even if the user goes back to a previous form step", async ({
    page,
  }) => {
    // Goes to the first form step (Personal Info)
    await expectCurrentStepVisible(page, personalInfo.title);

    // Submits the first form step (Personal Info)
    await submitPersonalInfo(page, name, email, phone);

    // Goes to the second form step (Select Plan)
    await expectCurrentStepVisible(page, selectPlan.title);

    // Goes back to the first form step (Personal Info)
    await goBack(page);

    // First form step (Personal Info) has the submitted form data
    await expectPersonalInfoInputValues(page, name, email, phone);
  });

  test.describe("After completing the Multi-step form", () => {
    test.beforeEach(async ({ page }) => {
      await submitMultiStepForm(
        page,
        name,
        email,
        phone,
        selectedPlanId,
        selectedAddOnsIds,
      );
    });

    test("shows the `Finishing up` screen with a summary of the entered form data when the user goes through all steps successfully", async ({
      page,
    }) => {
      await expectCurrentStepVisible(page, finishSubscription.title);

      await expectFinishSubscriptionVisible(
        page,
        isYearly,
        selectedPlanId,
        selectedAddOnsIds,
      );
    });

    test.fixme("redirects the user to the `Select Plan` form when clicking the `Change` link in the `Finishing up` screen", async ({
      page,
    }) => {
      // TO DO: Click "Change" link
      // TO DO: Check `Select Plan` main title
    });

    test.fixme("redirects the user to the `Thank you` screen when clicking the `Confirm` button in the `Finishing up` screen", async ({
      page,
    }) => {
      // TO DO: Click "Confirm" button
      // TO DO: Check `Thank you` main title
    });
  });
});
