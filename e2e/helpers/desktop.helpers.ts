// Reusable helper functions for desktop only E2E tests

import { Page, expect } from "@playwright/test";

/**
 * Asserts that, on desktop screens, the list of steps renders a circle with an index and name for each step
 * @param page      - Playwright page
 * @param stepsList - list of steps being rendered
 */
export const expectDesktopStepsListVisible = async (
  page: Page,
  stepsList: string[],
) => {
  const steps = page.getByTestId("step");

  for (let index = 0; index < stepsList.length; index++) {
    const step = steps.nth(index);

    const stepIndex = step.getByTestId("mobile-step-index");
    const desktopIndex = step.getByText(`STEP ${index + 1}`);
    const desktopName = step.getByText(stepsList[index]);

    await expect(stepIndex).toHaveText(`${index + 1}`);
    await expect(desktopIndex).toBeVisible();
    await expect(desktopName).toBeVisible();
  }
};
