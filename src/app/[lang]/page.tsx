import styles from "./page.module.css";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import MultiStepFormProvider from "../components/context/MultiStepFormProvider";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";

/**
 * Renders the multi-step form
 */
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <main className={styles.mainCont}>
      <MultiStepFormProvider dictionary={dict}>
        <MultiStepForm />
      </MultiStepFormProvider>
    </main>
  );
}
