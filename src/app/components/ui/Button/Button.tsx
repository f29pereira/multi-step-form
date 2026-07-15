import styles from "./Button.module.css";
import type { ButtonProps } from "@/app/components/types";
import clsx from "clsx";

/**
 * Renders a button component
 *
 * Props are defined in {@link ButtonProps}.
 */
export default function Button({
  description,
  variant,
  fontSize,
  handleOnClick,
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.btn, styles[variant], styles[fontSize ?? "base"])}
      onClick={handleOnClick}
      onMouseDown={(e) => e.preventDefault()}
    >
      <span className="bold-text">{description}</span>
    </button>
  );
}
