import { useRouter } from "next/navigation";
import { renderWithProviders } from "../../../../helpers/reduxHelper";
import ThemeSwitch from "@/app/components/Switch/ThemeSwitch/ThemeSwitch";
import en from "@/app/[lang]/dictionaries/en.json";
import { expectThemeSwitchVisible } from "../../../../helpers/multiStepForm.helpers";

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
 * Unit testing for the component: ThemeSwitch
 */
describe("ThemeSwitch component", () => {
  beforeEach(() => {
    useRouterMock.mockReturnValue({
      replace: jest.fn(),
    });

    renderWithProviders(<ThemeSwitch />, {
      preloadedState: {
        localization: { localeCode: localeCode, dictionary: dictionary },
        theme: { isDarkTheme: false },
      },
    });
  });

  it("renders the theme switch button", () => {
    expectThemeSwitchVisible();
  });
});
