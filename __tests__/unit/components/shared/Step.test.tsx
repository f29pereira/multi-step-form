import { render } from "@testing-library/react";
import Step from "@/app/components/shared/Step/Step";
import { FIXTURE_STEP } from "../../../../fixtures/multiStepForm.fixtures";
import { expectStepVisible } from "../../../helpers/multiStepForm.helpers";

const step = FIXTURE_STEP;

/**
 * Unit testing for the component: Step
 */
describe("Step component", () => {
  beforeEach(() => {
    render(
      <Step
        stepIndex={step.stepIndex}
        stepIndexDesktop={step.stepIndexDesktop}
        stepName={step.stepName}
        isSelected={true}
      />,
    );
  });

  it("renders a step with number and name", () => {
    expectStepVisible();
  });
});
