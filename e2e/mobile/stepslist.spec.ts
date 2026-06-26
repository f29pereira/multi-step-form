import { test } from "@playwright/test";
import { FIXTURE_STEPSLIST } from "../../fixtures/multiStepForm.fixtures";
import { expectMobileStepsListVisible } from "../helpers/mobile.helpers";

const stepsList = FIXTURE_STEPSLIST.stepsList;

/**
 * End to End testing: mobile list of form steps
 */
test.describe("Mobile steps list", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/"); // baseURL
  });

  test("show steps list with index for each step", async ({ page }) => {
    await expectMobileStepsListVisible(page, stepsList);
  });
});
