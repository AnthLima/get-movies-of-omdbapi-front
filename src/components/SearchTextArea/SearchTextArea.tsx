import InputButton from "../InputButton/InputButton";
import styles from "./SearchTextArea.module.scss";
export default function SearchTextArea() {
  return (
    <>
      <label className={styles.titleOfSearchInput}> Find perfect movie </label>
      <div className={styles.containerInputSearch}>
        <input
          type="search"
          placeholder="What a film you looking for?"
          className={styles.inputSearch}
        />
        <InputButton icon="search" />
      </div>
    </>
  );
}
