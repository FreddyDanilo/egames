import { ChevronDown, Languages } from "lucide-react";
import styles from "./styles.module.css";
import { ITEMS } from "./items-links";

export function Footer() {
  return (
    <footer className={styles.area}>
      <div className="container">
        <div className={styles.flex} style={{ alignItems: "center" }}>
          <ul className={styles.links}>
            {ITEMS.map((item) => (
              <li key={item.id + item.title}>
                <a href="#">{item.title}</a>
                {item.extra && <span>{item.extra}</span>}
              </li>
            ))}

            <li style={{ display: "flex", gap: 16, marginTop: 16 }}>
              <img src="/medias/instagram.png" alt="instagram" />
              <img src="/medias/twitter.png" alt="facebook" />
              <img src="/medias/linkedin.png" alt="facebook" />
              <img src="/medias/facebook.png" alt="facebook" />
            </li>
          </ul>

          <p className={styles.description}>
            Comunidade gamer feita para você ficar por dentro das novidades da
            industria e também se conectar com outros gamers.
          </p>
        </div>

        <div className={styles.flex}>
          <div className={styles.languages}>
            <li className={styles.language}>
              <Languages size={22} />
              <span>Português</span>
              <ChevronDown size={22} />
            </li>

            <div className={styles.rights}>
              <p style={{ color: "#fff" }}>
                Egames &copy; 2024 Todos os direitos reservados
              </p>

              <a href="#">Termos e Políticas de Privacidade</a>
            </div>
          </div>

          <div className={styles.newsletter}>
            <span>GRÁTIS</span>

            <h3>Assine nossa newsletter</h3>

            <label>
              <input type="text" disabled placeholder="Seu melhor e-mail" />
              <button type="button" aria-label="Botão assinar na newsletter">
                Assinar
              </button>
            </label>
          </div>
        </div>
      </div>
    </footer>
  );
}
