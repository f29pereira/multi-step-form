import { useRouter } from "next/navigation";
import { renderWithProviders } from "../../../../helpers/reduxHelper";
import LanguageSwitch from "@/app/components/Switch/LanguageSwitch/LanguageSwitch";
import en from "@/app/[lang]/dictionaries/en.json";
import { expectLanguageSwitchVisible } from "../../../../helpers/multiStepForm.helpers";

// Mock Next.js useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

// Type cast to be able to call jest functions in useRouterMock
const useRouterMock = useRouter as jest.Mock;

// Localization
const localeCode = "en";
const dictionary = en;

/**
 * Unit testing for the component: LanguageSwitch
 */
describe("LanguageSwitch component", () => {
  beforeEach(() => {
    useRouterMock.mockReturnValue({
      replace: jest.fn(),
    });

    renderWithProviders(<LanguageSwitch />, {
      preloadedState: {
        localization: { localeCode: localeCode, dictionary: dictionary },
      },
    });
  });

  it("renders the language switch button", () => {
    expectLanguageSwitchVisible(localeCode);
  });
});
