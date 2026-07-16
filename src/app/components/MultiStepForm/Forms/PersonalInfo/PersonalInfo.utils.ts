import { Dictionary } from "@/app/components/types";

/**
 * Returns the React Hook Form validation for the name field
 * @dictionary - localization dictionary
 */
export const nameValidation = (dictionary: Dictionary) => {
  const dict = dictionary.personalInfo.errorMessages;
  return {
    required: dict.required,
    minLength: {
      value: 2,
      message: dict.name.minLength,
    },
    maxLength: {
      value: 50,
      message: dict.name.maxLength,
    },
    pattern: {
      value: /^(?=[A-Za-z])[A-Za-z\s]+$/,
      message: dict.name.invalid,
    },
  };
};

/**
 * Returns the React Hook Form validation for the email field
 * @dictionary - localization dictionary
 */
export const emailValidation = (dictionary: Dictionary) => {
  const dict = dictionary.personalInfo.errorMessages;
  return {
    required: dict.required,
    pattern: {
      value: /^[\w-\.]+@(?:[\w-]+\.)+[\w-]{2,4}$/,
      message: dict.emailAddress,
    },
  };
};

/**
 * Returns the React Hook Form validation for the phone field
 * @dictionary - localization dictionary
 */
export const phoneValidation = (dictionary: Dictionary) => {
  const dict = dictionary.personalInfo.errorMessages;
  return {
    required: dict.required,
    pattern: {
      // Allows phone numbers like: +351 123456789; +1-(800)-123-4567; (926) 1234567; 1234567; 123-4567
      value:
        /^(?!\s)(?:\+?(?:\d{1,3}))?([-. (]*(?:\d{3})[-. )]*)?((?:\d{3})[-. ]*(?:\d{2,4})(?:[-.x ]*(?:\d+))?)$/,
      message: dict.phoneNumber,
    },
  };
};
