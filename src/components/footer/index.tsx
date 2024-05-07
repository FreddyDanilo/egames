import { ChevronDown, Languages } from "lucide-react";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.area}>
      <div className="container">
        <div className={styles.footer}>
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
