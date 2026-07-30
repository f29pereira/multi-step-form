import { useRouter } from "next/navigation";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../helpers/reduxHelper";
import userEvent from "@testing-library/user-event";
import MultiStepFormProvider from "@/app/components/context/MultiStepFormProvider";
import MultiStepForm from "@/app/components/MultiStepForm/MultiStepForm";
import en from "@/app/[lang]/dictionaries/en.json";
import {
  fillPersonalInfo,
  submitForm,
} from "../../../helpers/multiStepForm.helpers";
import {
  FIXTURE_MULTISTEPFORM,
  FIXTURE_FORM_STEPS,
  FIXTURE_SUBSCRIPTIONTOGGLE,
  FIXTURE_THEMESWITCH,
} from "../../../../fixtures/multiStepForm.fixtures";
import { expectErrorMessageVisible } from "../../../helpers/multiStepForm.helpers";
import { getLanguageSwitchBtnLabel } from "../../../helpers/multiStepForm.helpers";
import { getLocaleName } from "@/app/components/Switch/LanguageSwitch/LanguageSwitch.utils";

const multiStepForm = FIXTURE_MULTISTEPFORM;
const personalInfo = FIXTURE_FORM_STEPS.personalInfo;
const subscriptionToggle = FIXTURE_SUBSCRIPTIONTOGGLE;
const themeSwitch = FIXTURE_THEMESWITCH;

// Localization
const localeCode = "en";
const dictionary = en;

// Mock Next.js useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

// Type cast to be able to call jest functions in useRouterMock
const useRouterMock = useRouter as jest.Mock;

/**
 * Integration testing for the component: MultiStepForm
 */
describe("MultiStepForm component", () => {
  beforeEach(() => {
    useRouterMock.mockReturnValue({
      replace: jest.fn(),
    });

    renderWithProviders(
      <MultiStepFormProvider>
        <MultiStepForm />
      </MultiStepFormProvider>,
      {
        preloadedState: {
          localization: { localeCode: localeCode, dictionary: dictionary },
          theme: { isDarkTheme: false },
        },
      },
    );
  });

  describe("PersonalInfo component", () => {
    it("renders the error message `This field is required` for empty Name, Email Address and Phone Number fields", async () => {
      await submitForm();

      const requiredMsgs = screen.getAllByText(
        multiStepForm.personalInfo.required,
      );

      expect(requiredMsgs).toHaveLength(3);
    });

    it("renders the error message `Must be at least 2 characters` for the Name field", async () => {
      const nameInput = screen.getByLabelText(personalInfo.nameInputLabel);

      await userEvent.type(nameInput, "J");
      await submitForm();

      expectErrorMessageVisible(multiStepForm.personalInfo.name.minLength);
    });

    it("renders the error message `Must be under 50 characters` for the Name field", async () => {
      const nameInput = screen.getByLabelText(personalInfo.nameInputLabel);

      await userEvent.type(
        nameInput,
        "John Doe John Doe John Doe John Doe John Doe John J",
      );
      await submitForm();

      expectErrorMessageVisible(multiStepForm.personalInfo.name.maxLength);
    });

    it("renders the error message `Can only contain letters or spaces` for the Name field", async () => {
      const nameInput = screen.getByLabelText(personalInfo.nameInputLabel);

      await userEvent.type(nameInput, "John123 Doe");
      await submitForm();

      expectErrorMessageVisible(multiStepForm.personalInfo.name.invalid);
    });

    it("renders the error message `Invalid Email Address` for the Email field", async () => {
      const emailInput = screen.getByLabelText(personalInfo.emailInputLabel);

      await userEvent.type(emailInput, "johndoe@");
      await submitForm();

      expectErrorMessageVisible(multiStepForm.personalInfo.email.invalid);
    });

    it("renders the error message `Invalid Phone Number` for the Phone Number field", async () => {
      const phoneInput = screen.getByLabelText(personalInfo.phoneInputLabel);

      await userEvent.type(phoneInput, "1234");
      await submitForm();

      expectErrorMessageVisible(multiStepForm.personalInfo.phone.invalid);
    });
  });

  describe("SelectPlan component", () => {
    beforeEach(async () => {
      // Sucessfully submit PersonalInfo component to advance to the SelectPlan component
      await fillPersonalInfo();
      await submitForm();
    });

    it("renders the error message `Select a plan to continue` when no plan is selected", async () => {
      await submitForm();

      expectErrorMessageVisible(multiStepForm.selectPlan.required);
    });

    it("allows to toggle between monthly or yearly subscription", async () => {
      const toggleYearly = `${subscriptionToggle.btnDescription} Yearly`;
      const toggleMonthly = `${subscriptionToggle.btnDescription} Monthly`;

      expect(screen.queryAllByText(/\/yr/)).toHaveLength(3);
      expect(screen.queryAllByText(/\/mo/)).toHaveLength(0);

      // Toggle monthly subscription
      const yearlyBtn = screen.getByRole("button", { name: toggleYearly });
      await userEvent.click(yearlyBtn);
      expect(screen.queryAllByText(/\/yr/)).toHaveLength(0);
      expect(screen.queryAllByText(/\/mo/)).toHaveLength(3);

      // Toggle yearly subscription
      const monthlyBtn = screen.getByRole("button", { name: toggleMonthly });
      await userEvent.click(monthlyBtn);
      expect(screen.queryAllByText(/\/yr/)).toHaveLength(3);
      expect(screen.queryAllByText(/\/mo/)).toHaveLength(0);
    });
  });

  describe("ThemeSwitch component", () => {
    it("Change the app theme from light to dark", async () => {
      expect(document.documentElement).not.toHaveClass("dark-theme");

      const themeSwitchBtn = screen.getByRole("button", {
        name: themeSwitch.btnAriaLabel,
      });

      // Switch to the dark theme
      await userEvent.click(themeSwitchBtn);

      expect(document.documentElement).toHaveClass("dark-theme");
    });
  });

  describe("LanguageSwitch component", () => {
    it("Change the app language from English to Portuguese", async () => {
      // PersonalInfo component title in English
      const titleEn = screen.getByRole("heading", {
        level: 1,
        name: personalInfo.title,
      });

      expect(titleEn).toBeVisible();

      const languageSwitchBtn = screen.getByRole("button", {
        name: getLanguageSwitchBtnLabel(localeCode),
      });

      // Opens the language switch pop-up
      await userEvent.click(languageSwitchBtn);

      const ptLanguageBtn = screen.getByRole("button", {
        name: getLocaleName("pt"),
      });

      // Changes the language to Portuguese
      await userEvent.click(ptLanguageBtn);

      // PersonalInfo component title in Portuguese
      const titlePt = screen.getByRole("heading", {
        level: 1,
        name: personalInfo.title_pt,
      });

      expect(titlePt).toBeVisible();
    });
  });
});
