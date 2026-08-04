import { createRef } from "react";
import { renderWithProviders } from "../../../../../helpers/reduxHelper";
import PersonalInfo from "@/app/components/MultiStepForm/Forms/PersonalInfo/PersonalInfo";
import en from "@/app/[lang]/dictionaries/en.json";
import { createEmptyMultiStepFormContext } from "../../../../../../fixtures/multiStepForm.fixtures";
import { expectPersonalInfoVisible } from "../../../../../helpers/multiStepForm.helpers";

// Mock useMultiStepForm hook
jest.mock("@/app/components/customHooks/useMultiStepForm", () => ({
  useMultiStepForm: () => createEmptyMultiStepFormContext(),
}));

/**
 * Unit testing for the component: PersonalInfo
 */
describe("PersonalInfo component", () => {
  beforeEach(() => {
    const formRef = createRef<HTMLFormElement>();

    renderWithProviders(<PersonalInfo formRef={formRef} />, {
      preloadedState: {
        localization: { localeCode: "en", dictionary: en },
      },
    });
  });

  it("renders the main title, form description and inputs: name, email address and phone number", () => {
    expectPersonalInfoVisible();
  });
});
