import { render } from "@testing-library/react";
import StepsList from "@/app/components/MultiStepForm/StepsList/StepsList";
import { FIXTURE_STEPSLIST } from "../../../../../fixtures/multiStepForm.fixtures";
import { expectStepsListVisible } from "../../../../helpers/multiStepForm.helpers";

const stepsList = FIXTURE_STEPSLIST.stepsList;

/**
 * Unit testing for the component: StepsList
 */
describe("StepsList component", () => {
  beforeEach(() => {
    render(<StepsList list={stepsList} currentStepIndex={0} />);
  });

  it("renders the list of steps", () => {
    expectStepsListVisible(stepsList.length);
  });
});
