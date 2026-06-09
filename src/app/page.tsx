import styles from "./page.module.css";
import MultiStepFormProvider from "./components/context/MultiStepFormProvider";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";

/**
 * Renders the multi-step form
 */
export default function Home() {
  return (
    <main className={styles.mainCont}>
      <MultiStepFormProvider>
        <MultiStepForm />
      </MultiStepFormProvider>
    </main>
  );
}
