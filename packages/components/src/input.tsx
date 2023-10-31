import { FC } from "react";
import styles from "./input.module.css";

export const Input: FC = () => {
  return <input type="text" className={styles.input} />;
};
