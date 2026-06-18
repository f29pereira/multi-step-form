const requiredField = "This field is required";

/**
 * Returns the React Hook Form validation for the name field
 */
export const nameValidation = {
  required: requiredField,
  minLength: {
    value: 2,
    message: "Must be at least 2 characters",
  },
  maxLength: {
    value: 50,
    message: "Must be under 50 characters",
  },
  pattern: {
    value: /^(?=[A-Za-z])[A-Za-z\s]+$/,
    message: "Can only contain letters or spaces",
  },
};

/**
 * Returns the React Hook Form validation for the email field
 */
export const emailValidation = {
  required: requiredField,
  pattern: {
    value: /^[\w-\.]+@(?:[\w-]+\.)+[\w-]{2,4}$/,
    message: "Invalid Email Address",
  },
};

/**
 * Returns the React Hook Form validation for the phone field
 */
export const phoneValidation = {
  required: requiredField,
  pattern: {
    // Allows phone numbers like: +351 123456789; +1-(800)-123-4567; (926) 1234567; 1234567; 123-4567
    value:
      /^(?!\s)(?:\+?(?:\d{1,3}))?([-. (]*(?:\d{3})[-. )]*)?((?:\d{3})[-. ]*(?:\d{2,4})(?:[-.x ]*(?:\d+))?)$/,
    message: "Invalid Phone Number",
  },
};
