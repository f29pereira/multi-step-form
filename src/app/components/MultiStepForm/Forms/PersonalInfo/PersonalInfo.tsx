import styles from "./PersonalInfo.module.css";

/**
 * Renders the personal info form with the inputs:
 * - Name
 * - Email Address
 * - Phone Number
 */
export default function PersonalInfo() {
  return (
    <div className={styles.mainCont}>
      <h1 className={styles.title}>Personal info</h1>

      <p className={`lighter-text ${styles.description}`} id="form-description">
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
