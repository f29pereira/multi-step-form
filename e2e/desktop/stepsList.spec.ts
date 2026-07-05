import { test } from "@playwright/test";
import { FIXTURE_STEPSLIST } from "../../fixtures/multiStepForm.fixtures";
import { expectDesktopStepsListVisible } from "../helpers/desktop.helpers";

const stepsList = FIXTURE_STEPSLIST.stepsList;

/**
 * End to End testing: desktop list of form steps
 */
test.describe("Desktop steps list", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/"); // baseURL
  });

  test("displays the steps list with index and name for each step", async ({
    page,
  }) => {
    await expectDesktopStepsListVisible(page, stepsList);
  });
});
