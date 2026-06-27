// Reusable helper functions for mobile and desktop E2E tests

import { Page, expect } from "@playwright/test";

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
