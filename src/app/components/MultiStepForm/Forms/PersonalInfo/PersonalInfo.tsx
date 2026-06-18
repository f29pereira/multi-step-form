"use client"; // Client Component

import styles from "./PersonalInfo.module.css";
import clsx from "clsx";
import { FieldValues, useForm } from "react-hook-form";
import useFocus from "@/app/components/customHooks/useFocus";
import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";
import type { PersonalInfoFields } from "@/app/components/types";
import {
  nameValidation,
  emailValidation,
  phoneValidation,
} from "./PersonalInfo.utils";
import ErrorMessage from "@/app/components/shared/ErrorMessage/ErrorMessage";

/**
 * Renders the personal info form with:
 * Inputs:
 * - Name
 * - Email Address
 * - Phone Number
 *
 * - When submitting the form if any field is invalid, renders an error message
 */
export default function PersonalInfo() {
  const { elementRef } = useFocus<HTMLHeadingElement>();

  const { formData, setFormData, goToNextStep } = useMultiStepForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFields>({
    defaultValues: {
      name: formData.personalInfo?.name ?? "",
      email: formData.personalInfo?.email ?? "",
      phone: formData.personalInfo?.phone ?? "",
    },
  });

  /**
   * Returns true if the input has an associated error message
   */
  const isInputInvalid = (input: keyof PersonalInfoFields) => {
    return errors[input] !== undefined;
  };

  /**
   * Submits the form and goes to the next form step
   */
  const submit = (data: FieldValues) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
    }));
    goToNextStep();
  };

  return (
    <div className={"white-card-cont"}>
      <h1
        ref={elementRef}
        tabIndex={-1}
        className={styles.title}
        aria-label="Step 1 of 4, Personal info"
      >
        Personal info
      </h1>

      <p className="lighter-text form-description" id="form-description">
        Please provide your name, email address, and phone number.
      </p>

      <form
        id="current-form-step"
        onSubmit={handleSubmit((data) => {
          submit(data);
        })}
        aria-describedby="form-description"
      >
        <div className="flex-space-between">
          {/*Name: Label*/}
          <label htmlFor="name">Name</label>
          {/*Name: Error message*/}
          <ErrorMessage id={"name-error"} message={errors.name?.message} />
        </div>

        {/*Name: Input*/}
        <input
          className={clsx(styles.input, {
            [styles.errorInput]: isInputInvalid("name"),
          })}
          type="text"
          id="name"
          autoComplete="name"
          placeholder="e.g. Stephen King"
          aria-invalid={isInputInvalid("name")}
          aria-errormessage="name-error"
          {...register("name", nameValidation)}
        />

        <div className="flex-space-between">
          {/*Email Address: Label*/}
          <label htmlFor="email">Email Address</label>
          {/*Email Address: Error message*/}
          <ErrorMessage id={"email-error"} message={errors.email?.message} />
        </div>

        {/*Email Address: Input*/}
        <input
          className={clsx(styles.input, {
            [styles.errorInput]: isInputInvalid("email"),
          })}
          type="email"
          id="email"
          autoComplete="email"
          placeholder="e.g. stephenking@lorem.com"
          aria-invalid={isInputInvalid("email")}
          aria-errormessage="email-error"
          {...register("email", emailValidation)}
        />

        <div className="flex-space-between">
          {/*Phone Number: Label*/}
          <label htmlFor="phone">Phone Number</label>
          {/*Phone Number: Error message*/}
          <ErrorMessage id={"phone-error"} message={errors.phone?.message} />
        </div>

        {/*Phone Number: Input*/}
        <input
          className={clsx(styles.input, {
            [styles.errorInput]: isInputInvalid("phone"),
          })}
          type="tel"
          id="phone"
          autoComplete="tel"
          placeholder="e.g. +1 234 567 890"
          aria-invalid={isInputInvalid("phone")}
          aria-errormessage="phone-error"
          {...register("phone", phoneValidation)}
        />
      </form>
    </div>
  );
}
