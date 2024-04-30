import { Mobile } from "./mobile";
import styles from "./styles.module.css";

export function NavBar() {
  return (
    <div className="container">
      <div className={styles.area}>
        <img src="/brand.png" className={styles.brand} alt="egames logotipo" />

        <nav>
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>

            <li>
              <a href="#">Funcionalidades</a>
            </li>

            <li>
              <a href="#">Download</a>
            </li>

            <li>
              <a href="#">Português</a>
            </li>
          </ul>
        </nav>

        <Mobile />
      </div>
    </div>
  );
}
