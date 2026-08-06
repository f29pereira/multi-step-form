import { renderWithProviders } from "../../../../helpers/reduxHelper";
import StepsList from "@/app/components/MultiStepForm/StepsList/StepsList";
import en from "@/app/[lang]/dictionaries/en.json";
import { FIXTURE_STEPSLIST } from "../../../../../fixtures/multiStepForm.fixtures";
import { expectStepsListVisible } from "../../../../helpers/multiStepForm.helpers";

const stepsList = FIXTURE_STEPSLIST.stepsList;

/**
 * Unit testing for the component: StepsList
 */
describe("StepsList component", () => {
  beforeEach(() => {
    renderWithProviders(<StepsList list={stepsList} currentStepIndex={0} />, {
      preloadedState: {
        localization: { localeCode: "en", dictionary: en },
      },
    });
  });

  it("renders the list of steps", () => {
    expectStepsListVisible(stepsList.length);
  });
});
