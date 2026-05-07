/** @format */
import styles from "./styles.module.css";
export default function Loader() {
  return (
    <div className={styles.dropdown}>
      <div className={styles.overlay}></div>
      <div className={styles.loader}></div>
    </div>
  );
}
