import { TextArea } from "@ui5/webcomponents-react";
import styles from "./SearchTextArea.module.scss";
export default function SearchTextArea() {
  return (
    <div>
      <TextArea
        className={styles.textArea}
        onChange={function ka() {}}
        onInput={function ka() {}}
      />
    </div>
  );
}
