import styles from "./app.module.css";
import { Header } from "./components/header";
import { NavBar } from "./components/nav-bar";

export default function App() {
  return (
    <div className={styles.area}>
      <NavBar />
      <Header />
    </div>
  );
}
