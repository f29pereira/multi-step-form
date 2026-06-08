import styles from "./page.module.css";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";

/**
 * Renders the multi-step form
 */
export default function Home() {
  return (
    <main className={styles.mainCont}>
      <MultiStepForm />
    </main>
  );
}
