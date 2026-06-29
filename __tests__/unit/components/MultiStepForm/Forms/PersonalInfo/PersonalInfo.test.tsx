import { render } from "@testing-library/react";
import { createRef } from "react";
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
    const formRef = createRef<HTMLFormElement>();
    render(<PersonalInfo formRef={formRef} />);
  });

  it("renders the main title, form description and inputs: name, email address and phone number", () => {
    expectPersonalInfoVisible();
  });
});
