import { test } from "@playwright/test";

import {
  submitPersonalInfo,
  expectCurrentStepVisible,
  goBack,
  expectPersonalInfoInputValues,
} from "../helpers/shared.helpers";
import { FIXTURE_FORM_STEPS } from "../../fixtures/multiStepForm.fixtures";

const personalInfo = FIXTURE_FORM_STEPS.personalInfo;
const selectPlan = FIXTURE_FORM_STEPS.selectPlan;
const name = "John Doe";
const email = "johndoe@email.com";
const phone = "123456789";

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

  test.fixme("shows the `Finishing up` screen with a summary of the entered form data when the user goes through all steps successfully", async ({
    page,
  }) => {
    // TO DO: submit form
    // TO DO: Check `Finishing up` main title
    // TO DO: check submitted data
  });

  test.fixme("redirects the user to the `Select Plan` form when clicking the `Change` link in the `Finishing up` screen", async ({
    page,
  }) => {
    // TO DO: submit form
    // TO DO: Click "Change" link
    // TO DO: Check `Select Plan` main title
  });

  test.fixme("redirects the user to the `Thank you` screen when clicking the `Confirm` button in the `Finishing up` screen", async ({
    page,
  }) => {
    // TO DO: submit form
    // TO DO: Click "Confirm" button
    // TO DO: Check `Thank you` main title
  });
});
