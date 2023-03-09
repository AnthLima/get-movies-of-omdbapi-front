import { TextArea } from "@ui5/webcomponents-react";
import styles from "./SearchTextArea.module.scss";
export default function SearchTextArea() {
  return (
    <div className={styles.containerInputSearch}>
      <label className={styles.titleOfSearchInput}> Find perfect movie </label>
      <input
        type="search"
        placeholder="What a film you looking for?"
        className={styles.inputSearch}
      />
    </div>
  );
}
