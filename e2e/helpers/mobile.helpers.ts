// Reusable helper functions for mobile only E2E tests

import { Page, expect } from "@playwright/test";

/**
 * Asserts that, on mobile screens, the list of steps only renders a circle with an index for each step
 * @param page      - Playwright page
 * @param stepsList - list of steps being rendered
 */
export const expectMobileStepsListVisible = async (
  page: Page,
  stepsList: string[],
) => {
  const steps = page.getByTestId("step");

  for (let index = 0; index < stepsList.length; index++) {
    const step = steps.nth(index);

    // Mobile only step index
    const stepIndex = step.getByTestId("mobile-step-index");
    await expect(stepIndex).toHaveText(`${index + 1}`);

    // Desktop only step index and name
    const desktopIndex = step.getByText(`STEP ${index + 1}`);
    const desktopName = step.getByText(stepsList[index]);

    await expect(desktopIndex).toBeHidden();
    await expect(desktopName).toBeHidden();
  }
};
