import { Button, Icon } from "@ui5/webcomponents-react";
import styles from "./InputButton.module.scss";
interface IProps {
  icon: string;
}
export default function InputButton({ icon }: IProps) {
  return (
    <div className={styles.paddingLeft}>
      <Button icon={icon} className={styles.inputButton}></Button>
    </div>
  );
}
