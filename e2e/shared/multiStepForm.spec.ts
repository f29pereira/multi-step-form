import { test } from "@playwright/test";

import {
  expectCurrentStepVisible,
  fillPersonalInfo,
  submitForm,
} from "../helpers/shared.helpers";
import { FIXTURE_FORM_STEPS } from "../../fixtures/multiStepForm.fixtures";

const personalInfo = FIXTURE_FORM_STEPS.personalInfo;

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
    // Fills the first form step (Personal Info) with invalid data
    await expectCurrentStepVisible(page, personalInfo.title);
    await fillPersonalInfo(page, "", "", "");
    await submitForm(page);

    // Stays on the Personal Info form
    await expectCurrentStepVisible(page, personalInfo.title);
  });

  test.fixme("keeps the submitted form data even if the user goes back to a previous form step", async ({
    page,
  }) => {});

  test.fixme("shows the `Finishing up` screen with a summary of the entered form data when the user goes through all steps successfully", async ({
    page,
  }) => {});

  test.fixme("redirects the user to the `Select Plan` form when clicking the `Change` link in the `Finishing up` screen", async ({
    page,
  }) => {});

  test.fixme("redirects the user to the `Thank you` screen when clicking the `Confirm` button in the `Finishing up` screen", async ({
    page,
  }) => {});
});
