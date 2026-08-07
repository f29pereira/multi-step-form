# Frontend Mentor - Multi-step form

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Allows users to fill out a multi-step form for a gaming subscription.

<img src="public/images/readme/layout/lightTheme/desktop.png" width="750" alt="Multi-step form desktop layout">

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
    - [Responsive Layout](#responsive-layout)
    - [Dark Theme](#dark-theme)
    - [Localization](#localization)
    - [Multi-step form](#multi-step-form)
      - [Steps](#steps)
        - [1. Personal Info](#1-personal-info)
        - [2. Select Plan](#2-select-plan)
        - [3. Pick Add-ons](#3-pick-add-ons)
    - [Forms Validation](#forms-validation)
      - [1. Personal Info Validation](#1-personal-info-validation)
      - [2. Select Plan Validation](#2-select-plan-validation)
    - [Hover and Focus states](#hover-and-focus-states)
  - [Tests](#tests)
    - [Unit and Integration Tests](#unit-and-integration-tests)
    - [E2E Tests](#e2e-tests)
    - [Accessibility Tests](#accessibility-tests)
  - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

Additional features:

- Receive form validation messages if:
  - The name field contains characters other than letters and spaces
  - The name field has less than 2 characters or more than 50 characters
- App theme switch that allows users to toggle between light and dark themes
- Language switch that allows users to choose between English and Portuguese

### Screenshots

#### Responsive Layout

This project features a responsive design, built with with a "mobile-first" approach.

1. Mobile layout

   1.1 Small Screens

      <img src="public/images/readme/layout/lightTheme/mobile.png" width="250" alt="Multi-step form mobile layout">

   1.2 Tablet Screens

      <img src="public/images/readme/layout/lightTheme/tablet.png" width="350" alt="Multi-step form tablet layout">

<br>

2. Desktop layout

   <img src="public/images/readme/layout/lightTheme/desktop.png" width="750" alt="Multi-step form desktop layout">

#### Dark Theme

Clicking the theme switch allows the users to change the app's theme.

1. Mobile dark theme

   1.1 Small Screens

      <img src="public/images/readme/layout/darkTheme/mobile.png" width="250" alt="Multi-step form mobile layout with dark theme">

   1.2 Tablet Screens

      <img src="public/images/readme/layout/darkTheme/tablet.png" width="350" alt="Multi-step form tablet layout with dark theme">

<br>

2. Desktop dark theme

   <img src="public/images/readme/layout/darkTheme/desktop.png" width="750" alt="Multi-step form desktop layout with dark theme">

#### Localization

Clicking the current language button will open the languages pop-up, allowing users to change the app's locale.

<img src="public/images/readme/localization/button.png" width="250" alt="Languages pop-up">

<br>

Personal Info form step with Portuguese locale:

<img src="public/images/readme/localization/personalInfo_pt.png" width="750" alt="Personal Info with Portuguese locale">

#### Multi-step form

##### Steps

###### 1. Personal Info

The first form step is the Personal Info form, the user needs to provide their name, email address, and phone number.

Light theme:

<img src="public/images/readme/steps/personalInfo/lightTheme/personalInfo.png" width="750" alt="First form step - Personal Info with light theme">

<br>

Dark theme:

<img src="public/images/readme/steps/personalInfo/darkTheme/personalInfo.png" width="750" alt="First form step - Personal Info with dark theme">

###### 2. Select Plan

The second form step is the Select Plan form, the user needs to choose a plan.

Light theme:

<img src="public/images/readme/steps/selectPlan/lightTheme/select_plan.png" width="750" alt="Second form step - Select Plan with light theme">

<br>

Dark theme:

<img src="public/images/readme/steps/selectPlan/darkTheme/select_plan.png" width="750" alt="Second form step - Select Plan with dark theme">

<br>

When a plan is selected, it stays highlighted:

Light theme:

<img src="public/images/readme/steps/selectPlan/lightTheme/selected_plan.png" width="450" alt="Select Plan - highlighted plan with light theme">

<br>

Dark theme:

<img src="public/images/readme/steps/selectPlan/darkTheme/selected_plan.png" width="450" alt="Select Plan - highlighted plan with dark theme">

<br>

By default, the yearly subscription is selected. If the user wants to change to monthly, just needs to click the toggle button and the monthly pricing is applied:

<img src="public/images/readme/steps/selectPlan/lightTheme/monthly_subscription.png" width="450" alt="Select Plan - monthly subscription">

<br>

Clicking the "Go Back" button allows the user to return to the previous form step, where the submitted data is displayed. For example, going back to the first step:

Light theme:

<img src="public/images/readme/steps/personalInfo/lightTheme/submitted_data.png" width="750" alt="Personal Info - submitted data with light theme">

<br>

Dark theme:

<img src="public/images/readme/steps/personalInfo/darkTheme/submitted_data.png" width="750" alt="Personal Info - submitted data with dark theme">

###### 3. Pick Add-ons

The final form step is the Pick Add-ons form, where the user can choose the add-ons for the subscription.

Light theme:

<img src="public/images/readme/steps/pickAddons/lightTheme/pick_addons.png" width="750" alt="Third form step - Pick Add-ons with light theme">

<br>

Dark theme:

<img src="public/images/readme/steps/pickAddons/darkTheme/pick_addons.png" width="750" alt="Third form step - Pick Add-ons with dark theme">

<br>

Like the plan, selected add-ons stay highlighted:

Ligth theme:

<img src="public/images/readme/steps/pickAddons/lightTheme/selected_addons.png" width="450" alt="Pick Add-ons - highlighted add-ons with light theme">

<br>

Dark theme:

<img src="public/images/readme/steps/pickAddons/darkTheme/selected_addons.png" width="450" alt="Pick Add-ons - highlighted add-ons with dark theme">

<br>

After the last form submision, the user is redirected to a confirmation screen to review the filled-out data:

Light theme:

<img src="public/images/readme/steps/confirmation/lightTheme/confirmation.png" width="750" alt="Confirmation screen with light theme">

<br>

Dark theme:

<img src="public/images/readme/steps/confirmation/darkTheme/confirmation.png" width="750" alt="Confirmation screen with dark theme">

<br>

On this screen, the user can click the "Change" button to be redirected to the Select Plan form step, or click the "Confirm" button to be redirected to the thank-you screen:

Light theme:

<img src="public/images/readme/steps/thankYou/lightTheme/thankYou.png" width="750" alt="Thank you screen with light theme">

<br>

Dark theme:

<img src="public/images/readme/steps/thankYou/darkTheme/thankYou.png" width="750" alt="Thank you screen with dark theme">

##### Forms Validation

This projects uses the React Hook Form library to validate and display error messages in the form steps: Personal Info and Select Plan

###### 1. Personal Info Validation

- If a field is missing:

  Light theme:

  <img src="public/images/readme/steps/personalInfo/lightTheme/errorMessages/required.png" width="450" alt="Personal Info -  required field message with light theme">

  <br>

  Dark theme:

  <img src="public/images/readme/steps/personalInfo/darkTheme/errorMessages/required.png" width="450" alt="Personal Info -  dark theme required field message with dark theme">

Name field:

- If it has less than 2 characters:

  <img src="public/images/readme/steps/personalInfo/lightTheme/errorMessages/name_less_than_2_chars.png" width="450" alt="Personal Info - name field min characters message">

- If it has more than 50 characters:

  <img src="public/images/readme/steps/personalInfo/lightTheme/errorMessages/name_less_than_2_chars.png" width="450" alt="Personal Info - name field max characters message">

- If contains characters other than letters and spaces the message:

  <img src="public/images/readme/steps/personalInfo/lightTheme/errorMessages/name_invalid.png" width="450" alt="Personal Info - name field invalid message">

Email Address field:

- If doesn't match the valid format:

  <img src="public/images/readme/steps/personalInfo/lightTheme/errorMessages/email_invalid.png" width="450" alt="Personal Info - email address field invalid message">

Phone Number field:

- If doesn't match a valid format like +351 123456789; +1-(800)-123-4567; (926) 1234567; 1234567; 123-4567:

  <img src="public/images/readme/steps/personalInfo/lightTheme/errorMessages/phone_invalid.png" width="450" alt="Personal Info - phone number field invalid message">

###### 2. Select Plan Validation

If no plan is selected by the user the following message will appear:

Light theme:

  <img src="public/images/readme/steps/selectPlan/lightTheme/errorMessages/required.png" width="450" alt="Selected Plan - light theme required message">

  <br>

Dark theme:

  <img src="public/images/readme/steps/selectPlan/darkTheme/errorMessages/required.png" width="450" alt="Selected Plan - dark theme required message">

#### Hover and Focus states

##### Hover states

These are the hover states used in the app.

###### 1. Theme switch and Localization

1.1 Theme switch - default/hover states:

Light theme:

<img src="public/images/readme/hover/lightTheme/buttons/theme/theme_no_hover.png" width="150" alt="Theme switch - default state with light theme">

<img src="public/images/readme/hover/lightTheme/buttons/theme/theme_with_hover.png" width="150" alt="Theme switch - hover state with light theme">

<br>

Dark theme:

<img src="public/images/readme/hover/darkTheme/buttons/theme/theme_no_hover.png" width="150" alt="Theme switch - default state with dark theme">

<img src="public/images/readme/hover/darkTheme/buttons/theme/theme_with_hover.png" width="150" alt="Theme switch - hover state with dark theme">

1.2 Localization button and pop-up - default/hover states:

- Localization button:

  Light theme:

  <img src="public/images/readme/hover/lightTheme/buttons/locale/locale_no_hover.png" width="150" alt="Localization button - default state with light theme">

  <img src="public/images/readme/hover/lightTheme/buttons/locale/locale_with_hover.png" width="150" alt="Localization button - hover state with light theme">

  Dark theme:

  <img src="public/images/readme/hover/darkTheme/buttons/locale/locale_no_hover.png" width="150" alt="Localization button - default state with dark theme">

  <img src="public/images/readme/hover/darkTheme/buttons/locale/locale_with_hover.png" width="150" alt="Localization button - hover state with dark theme">

  <br>

- Localization pop-up:

  Light theme:

  <img src="public/images/readme/hover/lightTheme/buttons/locale/popUp/popUp_no_hover.png" width="150" alt="Localization pop-up - default state with light theme">

  <img src="public/images/readme/hover/lightTheme/buttons/locale/popUp/popUp_with_hover.png" width="150" alt="Localization pop-up - hover state with light theme">

  Dark theme:

  <img src="public/images/readme/hover/darkTheme/buttons/locale/popUp/popUp_no_hover.png" width="150" alt="Localization pop-up - default state with dark theme">

  <img src="public/images/readme/hover/darkTheme/buttons/locale/popUp/popUp_with_hover.png" width="150" alt="Localization pop-up - hover state with dark theme">

###### 2. Personal info form

Name field - default/hover states:

Light theme:

<img src="public/images/readme/hover/lightTheme/steps/personalInfo/field.png" width="450" alt="Personal Info field - hover state with light theme">

<br>

Dark theme:

<img src="public/images/readme/hover/darkTheme/steps/personalInfo/field.png" width="450" alt="Personal Info field - hover state with dark theme">

###### 3. Select Plan form

###### Selected plan - default/hover states:

Light theme:

<img src="public/images/readme/hover/lightTheme/steps/selectPlan/plan.png" width="450" alt="Selected Plan - plan hover state with light theme">

<br>

Dark theme:

<img src="public/images/readme/hover/darkTheme/steps/selectPlan/plan.png" width="450" alt="Selected Plan - plan hover state with dark theme">

###### Yearly/Monthly subscription toggle:

Light theme:

<img src="public/images/readme/hover/lightTheme/steps/selectPlan/subscriptionToggle/subscription_no_hover.png" width="450" alt="Subscription toggle button - default state with light theme">

<img src="public/images/readme/hover/lightTheme/steps/selectPlan/subscriptionToggle/subscription_with_hover.png" width="450" alt="Subscription toggle - button hover state with light theme">

<br>

Dark theme:

<img src="public/images/readme/hover/darkTheme/steps/selectPlan/subscriptionToggle/subscription_no_hover.png" width="450" alt="Subscription toggle button - default state with light theme">

<img src="public/images/readme/hover/darkTheme/steps/selectPlan/subscriptionToggle/subscription_with_hover.png" width="450" alt="Subscription toggle button - hover state with light theme">

###### 4. Confirmation screen

4.1 "Change" button - default/hover states:

Light theme:

<img src="public/images/readme/hover/lightTheme/buttons/change/change_no_hover.png" width="150" alt="Change button - default state with light theme">

<img src="public/images/readme/hover/lightTheme/buttons/change/change_with_hover.png" width="150" alt="Change button - hover state with light theme">

<br>

Dark theme:

<img src="public/images/readme/hover/darkTheme/buttons/change/change_no_hover.png" width="150" alt="Change button - default state with dark theme">

<img src="public/images/readme/hover/darkTheme/buttons/change/change_with_hover.png" width="150" alt="Change button - hover state with dark theme">

4.2 "Confirm" button - default/hover states:

Same for light and dark themes:

<img src="public/images/readme/hover/lightTheme/buttons/confirm/confirm_no_hover.png" width="150" alt="Confirmation screen - confirm button default state">

<img src="public/images/readme/hover/lightTheme/buttons/confirm/confirm_with_hover.png" width="150" alt="Confirmation screen - confirm button hover state">

###### 5. Step navigation buttons

Default/Hover states:

5.1 "Go Back" button:

Light theme:

<img src="public/images/readme/hover/lightTheme/buttons/goBack/goBack_no_hover.png" width="150" alt="Go back button - default state with light theme">

<img src="public/images/readme/hover/lightTheme/buttons/goBack/goBack_with_hover.png" width="150" alt="Go back button - hover state with light theme">

<br>

Dark theme:

<img src="public/images/readme/hover/darkTheme//buttons/goBack/goBack_no_hover.png" width="150" alt="Go back button - default state with dark theme">

<img src="public/images/readme/hover/darkTheme//buttons/goBack/goBack_with_hover.png" width="150" alt="Go back button - hover state with dark theme">

<br>

5.2 "Next Step" button:

Light theme:

<img src="public/images/readme/hover/lightTheme/buttons/nextStep/nextStep_no_hover.png" width="150" alt="Next step button - default state with light theme">

<img src="public/images/readme/hover/lightTheme/buttons/nextStep/nextStep_with_hover.png" width="150" alt="Next step button - hover state with light theme">

<br>

Dark theme:

<img src="public/images/readme/hover/darkTheme/buttons/nextStep/nextStep_no_hover.png" width="150" alt="Next step button - default state with dark theme">

<img src="public/images/readme/hover/darkTheme/buttons/nextStep/nextStep_with_hover.png" width="150" alt="Next step button - hover state with dark theme">

##### Focus states

These are the focus states used in the app.

##### 1. Theme switch and Localization

1.1 Theme switch focus state

Light theme:

<img src="public/images/readme/focus/lightTheme/buttons/theme.png" width="150" alt="Theme switch - focus state with light theme">

<br>

Dark theme:

<img src="public/images/readme/focus/darkTheme/buttons/theme.png" width="150" alt="Theme switch - focus state with dark theme">

1.2 Localization button and pop-up focus states

- Localization button:

  Light theme:

  <img src="public/images/readme/focus/lightTheme/buttons/locale/locale.png" width="150" alt="Localization button - focus state with light theme">

  <br>

  Dark theme:

  <img src="public/images/readme/focus/darkTheme/buttons/locale/locale.png" width="150" alt="Localization pop-up - focus state with dark theme">

- Localization pop-up:

  Light theme:

  <img src="public/images/readme/focus/lightTheme/buttons/locale/popUp.png" width="150" alt="Localization button - focus state with light theme">

  <br>

  Dark theme:

  <img src="public/images/readme/focus/darkTheme/buttons/locale/popUp.png" width="150" alt="Localization pop-up - focus state with dark theme">

##### 2. Personal info form

Name field with focus state:

Light theme:

<img src="public/images/readme/focus/lightTheme/steps/personalInfo_field.png" width="450" alt="Personal Info field - focus state with light theme">

<br>

Dark theme:

<img src="public/images/readme/focus/darkTheme/steps/personalInfo_field.png" width="450" alt="Personal Info field - focus state with dark theme">

##### 3. Select Plan form

Subscription toggle button focus state:

Light theme:

<img src="public/images/readme/focus/lightTheme/steps/selectPlan_subscriptionToggle.png" width="450" alt="Select Plan - subscription toggle focus state with light theme">

<br>

Dark theme:

<img src="public/images/readme/focus/darkTheme/steps/selectPlan_subscriptionToggle.png" width="450" alt="Select Plan - subscription toggle focus state with dark theme">

###### 4. Confirmation screen

4.1 "Change" button:

Light theme:

<img src="public/images/readme/focus/lightTheme/buttons/change.png" width="150" alt="Change button - focus state with light theme">

<br>

Dark theme:

<img src="public/images/readme/focus/darkTheme/buttons/change.png" width="150" alt="Change button - focus state with dark theme">

4.2 "Confirm" button:

Light theme:

<img src="public/images/readme/focus/lightTheme/buttons/confirm.png" width="150" alt="Go Back button - focus state">

<br>

Dark theme:

<img src="public/images/readme/focus/darkTheme/buttons/confirm.png" width="150" alt="Go Back button - focus state">

##### 5. Steps navigation buttons

5.1 "Go Back" button:

Light theme:

<img src="public/images/readme/focus/lightTheme/buttons/goBack.png" width="150" alt="Go Back button - focus state with light theme">

<br>

Dark theme:

<img src="public/images/readme/focus/darkTheme/buttons/goBack.png" width="150" alt="Go Back button - focus state with dark theme">

5.2 "Next Step" button:

Light theme:

<img src="public/images/readme/focus/lightTheme/buttons/nextStep.png" width="150" alt="Go Back - button focus state with light theme">

<br>

Dark theme:

<img src="public/images/readme/focus/darkTheme/buttons/nextStep.png" width="150" alt="Next Step - button focus state with dark theme">

### Tests

#### **Unit and Integration Tests**

This project uses Jest and React Testing Library for unit and integration testing.

The unit tests cover:

- The rendering of the components
- The function formatYearlyOrMonthlyPrice, used to format the price in the Select Plan, Pick Add-ons and Finishing Up screens

The integration tests cover:

- Allowing the user to switch between the light and dark theme
- Allowing the user to switch the app language

For the Personal info form step:

- Displaying the message "This field is required" for the empty fields
- Displaying the message "Must be at least 2 characters" if the Name field has less than 2 characters
- Displaying the message "Must be under 50 characters" if the Name field has more than 50 characters
- Displaying the message "Can only contain letters or spaces" if the Name field is invalid
- Displaying the message "Invalid Email Address" if the Email Address field is invalid
- Displaying the message "Invalid Phone Number" if the Phone Number field is invalid

For the Select plab form step:

- Displaying the message "Select a plan to continue" is no plan is selected
- Allowing the user to toggle between monthly or yearly subscription

#### **E2E Tests**

This project uses Playwright for end to end testing.

The E2E tests cover:

1. Mobile only (Pixel 5 and iPhone 12):

- Displaying the steps list with the index for each step

2. Desktop only (Chromium, Firefox and Webkit):

"displays the steps list with index and name for each step"

- Displaying the steps list with the index and name for each step

3. All viewport tests:

- Allowing the user to switch between the light and dark theme
- Allowing the user to switch the app language
- Not allowing the user to go to the next step if the current step has an invalid field
- All form steps Keep the submitted form data

After completing the Multi-step form:

- Displaying the "Finishing up" screen with a summary of the entered form data
- Allowing the user to go back to the "Select Plan" for step when clicking on the "Change" button in the "Finishing up" screen
- Allowing the user togo to the "Thank you" screen when clicking on the "Confirm" button in the "Finishing up" screen

#### **Accessibility Tests**

1. Automated Tests

- Run Lighthouse audits in Chrome and Edge DevTools (96 score - related to the text font color and form background color for the light theme).

2. Manual Tests

- Screen Reader testing with NVDA:
  - Checked that headings (h1, h2) are announced correctly.
  - Checked that the main headings (h1) are automatically announced when changing from one form step to another, to let know the users that a new form step is being displayed.
  - Checked that the steps list is not announced.
  - Checked that all section content is announced correctly.
  - Checked that all buttons and fields are read when focused.

### Links

- Solution URL: [https://github.com/f29pereira/multi-step-form](https://github.com/f29pereira/multi-step-form)
- Live Site URL: [https://f29pereira.github.io/multi-step-form/](https://f29pereira.github.io/multi-step-form/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Grid
- Mobile-first workflow
- TypeScript
- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - JavaScript library
- [React Context API](https://react.dev/reference/react/createContext) - React API that allows to share state across components without prop drilling
- [React Developer Tools](https://react.dev/learn/react-developer-tools) - browser extension
- [React Hook Form](https://react-hook-form.com/) - Library that helps build performant, flexible and extensible forms with easy-to-use validation
- [React Icons](https://react-icons.github.io/react-icons/) - Library that bundles popular icon sets as React components
- [clsx](https://www.npmjs.com/package/clsx) - Utility for constructing className strings conditionally
- [Jest](https://jestjs.io/) - JavaScript testing library
- [React Testing Library](https://testing-library.com/) - React components testing library
- [user-event](https://www.npmjs.com/package/@testing-library/user-event) - companion library of the React Testing Library
- [Playwright](https://playwright.dev/) - Automation library for end-to-end testing
- [NVDA (NonVisual Desktop Access)](https://www.nvaccess.org/) - Open-source screen reader for Windows
- [GitHub Actions](https://github.com/features/actions) - CI/CD platform built into GitHub that automates workflows on every push or pull request
- [Vercel](https://vercel.com/) - Cloud platform used to host and deploy modern websites and web applications

### What I learned

- Use a list of components (form step related components) to de displayed one by one in the main form component `MultiStepForm`.

- For the complex functions use the JSDocs `@returns` and `@example` for easy readability.

- Use multiple TypeScript files to organize the different types. The types are divided into: component props, Redux Toolkit, Context API, localization and data.

- Use the React Hook Form library to validate the form fields and display error messages.

- Add localization using Next.js dictionaries and `proxy` (redirects the user to the correct locale).

- Avoid potential hydration errors that occasionally occur during the E2E Playwright tests (browsers: webkit and safari) by using the Playwright's method `click()`, to check if the inputs of the first form step where ready to be filled in.

- For the unit/integration tests when using the `user-event` library, follow the docs recommendation and use a session object (`userEvent.setup()`) instead of the `userEvent` directly. This session object persists during the test and can be configured if necessary.

- Host this project on Vercel to get full access to Next.js Server Actions functionality, instead of using GitHub Pages, which only supports static websites.

## Author

- Frontend Mentor - [@f29pereira](https://www.frontendmentor.io/profile/f29pereira)
