"use client"; // Client Component
import styles from "./PersonalInfo.module.css";
import useFocus from "@/app/components/customHooks/useFocus";

/**
 * Renders the personal info form with the inputs:
 * - Name
 * - Email Address
 * - Phone Number
 */
export default function PersonalInfo() {
  const { elementRef } = useFocus<HTMLHeadingElement>();

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

      {/*TO DO: add error message*/}
      <form action="" aria-describedby="form-description">
        {/*Name*/}
        <label htmlFor="name">Name</label>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          placeholder="e.g. Stephen King"
          required
        />

        {/*Email Address*/}
        <label htmlFor="email">Email Address</label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="e.g. stephenking@lorem.com"
          required
        />

        {/*Phone Number*/}
        <label htmlFor="phone">Phone Number</label>
        <input
          className={styles.input}
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          placeholder="e.g. +1 234 567 890"
          required
        />
      </form>
    </div>
  );
}
