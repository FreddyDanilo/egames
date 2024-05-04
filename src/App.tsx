import styles from "./app.module.css";
import { Header } from "./components/header";
import { NavBar } from "./components/nav-bar";
import { Quotes } from "./components/quotes";
import { SocialMedias } from "./components/social-medias";
import { Statistics } from "./components/statistics";

export default function App() {
  return (
    <div className={styles.area}>
      <NavBar />
      <Header />
      <Statistics />
      <SocialMedias />
      <Quotes />
    </div>
  );
}
