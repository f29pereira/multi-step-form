import styles from "./Button.module.css";
import type { ButtonProps } from "@/app/components/types";
import clsx from "clsx";

/**
 * Renders a button component
 *
 * Props are defined in {@link ButtonProps}.
 */
export default function Button({
  formId,
  description,
  variant,
  handleOnClick,
}: ButtonProps) {
  return (
    <button
      type={formId ? "submit" : "button"}
      className={clsx(styles.btn, styles[variant])}
      form={formId}
      onClick={handleOnClick}
    >
      <span className="bold-text">{description}</span>
    </button>
  );
}
