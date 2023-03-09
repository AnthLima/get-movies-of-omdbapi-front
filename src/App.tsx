import {
  ThemeProvider,
  Button,
  Popover,
  PopoverDomRef,
  TextArea,
} from "@ui5/webcomponents-react";
import styles from "./App.module.scss";
import SearchTextArea from "./components/SearchTextArea/SearchTextArea";
import videoBg from "./assets/videoBg.mp4";
export default function App() {
  return (
    <ThemeProvider>
      <div className={styles.main}>
        <div className={styles.overlay}></div>
        <video src={videoBg} autoPlay loop muted />
        <div className={styles.content}>
          <SearchTextArea />
        </div>
      </div>
    </ThemeProvider>
  );
}
