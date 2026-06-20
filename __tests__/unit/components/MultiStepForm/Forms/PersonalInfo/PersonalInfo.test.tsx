import { render } from "@testing-library/react";
import PersonalInfo from "@/app/components/MultiStepForm/Forms/PersonalInfo/PersonalInfo";
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
    render(<PersonalInfo />);
  });

  it("renders the main title, form description and inputs: name, email address and phone number", () => {
    expectPersonalInfoVisible();
  });
});
