import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

const desktopOnly = "desktop/**/*.spec.ts";
const mobileOnly = "mobile/**/*.spec.ts";
const shared = "shared/**/*.spec.ts";
const helpers = "helpers/**/*.ts";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./e2e",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: "http://localhost:3000",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    /* Test against desktop viewports. */
    {
      name: "chromium-desktop",
      use: { ...devices["Desktop Chrome"] },
      testMatch: desktopOnly,
    },

    {
      name: "firefox-desktop",
      use: { ...devices["Desktop Firefox"] },
      testMatch: desktopOnly,
    },

    {
      name: "webkit-desktop",
      use: { ...devices["Desktop Safari"] },
      testMatch: desktopOnly,
    },

    /* Test against mobile viewports. */
    {
      name: "chrome-mobile",
      use: { ...devices["Pixel 5"] },
      testMatch: mobileOnly,
    },
    {
      name: "safari-mobile",
      use: { ...devices["iPhone 12"] },
      testMatch: mobileOnly,
    },

    /* Test against desktop and mobile viewports. */
    {
      name: "chromium-desktop-shared",
      use: { ...devices["Desktop Chrome"] },
      testMatch: shared,
    },
    {
      name: "firefox-desktop-shared",
      use: { ...devices["Desktop Firefox"] },
      testMatch: shared,
    },
    {
      name: "webkit-desktop-shared",
      use: { ...devices["Desktop Safari"] },
      testMatch: shared,
    },
    {
      name: "chrome-mobile-shared",
      use: { ...devices["Pixel 5"] },
      testMatch: shared,
    },
    {
      name: "safari-mobile-shared",
      use: { ...devices["iPhone 12"] },
      testMatch: shared,
    },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /*Files matching one of these patterns are not executed as test files.*/
  testIgnore: helpers,

  /* Run your local dev server before starting the tests */
  webServer: {
    command: process.env.CI
      ? "npx next build && npx serve@latest out -l 3000"
      : "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
