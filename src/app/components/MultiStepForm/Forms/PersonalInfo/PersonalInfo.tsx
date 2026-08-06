"use client"; // Client Component

import styles from "./PersonalInfo.module.css";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import useFocus from "@/app/components/customHooks/useFocus";
import { useMultiStepForm } from "@/app/components/customHooks/useMultiStepForm";
import type { PersonalInfoFields } from "@/app/components/types/context";
import type { FormStepProps } from "@/app/components/types";
import {
  nameValidation,
  emailValidation,
  phoneValidation,
} from "./PersonalInfo.utils";
import ErrorMessage from "@/app/components/shared/ErrorMessage/ErrorMessage";
import { useAppSelector } from "@/app/hooks";

/**
 * Renders the personal info form with:
 * - Main header
 * - Form description
 * - Form with the inputs: Name, Email Address and Phone Number
 *
 * When submitting the form if any field is invalid, renders an error message
 *
 * Props are defined in {@link FormStepProps}.
 */
export default function PersonalInfo({ formRef }: FormStepProps) {
  // Localization reducer
  const dictionary = useAppSelector((state) => state.localization.dictionary);
  const personalInfoDict = dictionary.personalInfo;

  // MultiStepForm context
  const { formData, setFormData, goToNextStep } = useMultiStepForm();

  // Main header Ref
  const { elementRef } = useFocus<HTMLHeadingElement>();

  // React Hook Form
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
   * @param data name, email an phone input data
   */
  const submit = (data: PersonalInfoFields) => {
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
      {/*Main header*/}
      <h1
        ref={elementRef}
        tabIndex={-1}
        className={styles.title}
        aria-label={personalInfoDict.titleAriaLabel}
      >
        {personalInfoDict.title}
      </h1>

      {/*Form description*/}
      <p className="lighter-text form-description" id="form-description">
        {personalInfoDict.description}
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit((data) => {
          submit(data);
        })}
        aria-describedby="form-description"
        noValidate
        data-testid="personal-info-form"
      >
        <div className="flex-space-between">
          {/*Name: Label*/}
          <label htmlFor="name">{personalInfoDict.nameLabel}</label>
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
          aria-errormessage={isInputInvalid("name") ? "name-error" : undefined}
          {...register("name", nameValidation(dictionary))}
        />

        <div className="flex-space-between">
          {/*Email Address: Label*/}
          <label htmlFor="email">{personalInfoDict.emailAddressLabel}</label>
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
          aria-errormessage={
            isInputInvalid("email") ? "email-error" : undefined
          }
          {...register("email", emailValidation(dictionary))}
        />

        <div className="flex-space-between">
          {/*Phone Number: Label*/}
          <label htmlFor="phone">{personalInfoDict.phoneNumberLabel}</label>
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
          aria-errormessage={
            isInputInvalid("phone") ? "phone-error" : undefined
          }
          {...register("phone", phoneValidation(dictionary))}
        />
      </form>
    </div>
  );
}
