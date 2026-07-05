import styles from "./ErrorMessage.module.css";
import type { ErrorMessageProps } from "../../types";

/**
 * Renders an error message
 *
 * Props are defined in {@link ErrorMessageProps}.
 */
export default function ErrorMessage({ id, message }: ErrorMessageProps) {
  return (
    <span className={styles.errorMsg} id={id}>
      {message}
    </span>
  );
}
