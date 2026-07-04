import { test } from "@playwright/test";
import { FIXTURE_STEPSLIST } from "../../fixtures/multiStepForm.fixtures";
import {
  expectNumberOfSteps,
  expectSelectedStepStyle,
} from "../helpers/shared.helpers";

const stepsList = FIXTURE_STEPSLIST.stepsList;

/**
 * End to End testing: list of form steps
 */
test.describe("Steps list", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/"); // baseURL
  });

  test("displays the correct number os steps", async ({ page }) => {
    await expectNumberOfSteps(page, stepsList.length);
  });

  test("displays the selected style only for the current step", async ({
    page,
  }) => {
    await expectSelectedStepStyle(page, stepsList.length, 0);
  });
});
