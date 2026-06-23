import { ReactElement, ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { screen, render } from "@testing-library/react";
import {
  FIXTURE_FORM_STEPS,
  FIXTURE_SUBSCRIPTIONTOGGLE,
  FIXTURE_THANKYOU,
} from "../../fixtures/multiStepForm.fixtures";
import { formatYearlyOrMonthlyPrice } from "@/app/lib/utils";

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
 * Expects the radio input to be in the document, in the SubscriptionToggle component:
 */
export const expectPlanRadioInputInDocument = () => {
  const radioInput = screen.getByTestId("plan-radio-input");

  expect(radioInput).toBeInTheDocument();
};

/**
 * Expects the visibility of the following elements, in the Plan component:
 * - Plan type
 * - Price (monthly or yearly value)
 * - Discount if applicable
 */
export const expectPlanVisible = (
  isYearly: boolean,
  type: string,
  value: number,
  discount: string | undefined,
) => {
  const planType = screen.getByText(type);

  const formattedPrice = formatYearlyOrMonthlyPrice(isYearly, value);
  const planPrice = screen.getByText(formattedPrice);

  expect(planType).toBeVisible();
  expect(planPrice).toBeVisible();

  const planDiscount = screen.getByTestId("plan-discount");
  expect(planDiscount).toBeVisible();

  if (discount) {
    expect(planDiscount).toHaveTextContent(discount);
  } else {
    expect(planDiscount).toHaveTextContent("");
  }
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

/**
 * Returns a React Form Hook provider with react element
 * @param ui - React element to be rendered inside the React Form Hook provider
 */
export const renderWithReactFormHookProvider = (ui: ReactElement) => {
  // Wrapper component
  const Wrapper = ({ children }: { children: ReactNode }) => {
    const methods = useForm();

    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  return render(<Wrapper>{ui}</Wrapper>);
};
