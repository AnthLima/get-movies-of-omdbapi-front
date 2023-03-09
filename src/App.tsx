import {
  ThemeProvider,
  Button,
  Popover,
  PopoverDomRef,
  TextArea,
} from "@ui5/webcomponents-react";
import styles from "./App.modules.scss";
import SearchTextArea from "./components/SearchTextArea/SearchTextArea";
export default function App() {
  return (
    <ThemeProvider>
      <SearchTextArea />
    </ThemeProvider>
  );
}
