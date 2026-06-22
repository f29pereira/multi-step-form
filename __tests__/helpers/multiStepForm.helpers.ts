import { screen } from "@testing-library/react";
import {
  FIXTURE_FORM_STEPS,
  FIXTURE_SUBSCRIPTIONTOGGLE,
  FIXTURE_THANKYOU,
} from "../../fixtures/multiStepForm.fixtures";

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
 * Expects the visibility of the following elements, in the SelectPlan component:
 * - Main header
 * - Toggle button
 * - Form description
 * - Form with a list of plans
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
