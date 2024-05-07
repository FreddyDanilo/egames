import { StarIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Cta() {
  return (
    <div style={{ backgroundColor: "#000", padding: "128px 0" }} id="download">
      <div className="container">
        <div style={{ backgroundColor: "#fff", borderRadius: 16 }}>
          <div className={styles.grid}>
            <div className={styles.details}>
              <img src="/cta/brand.png" alt="egames" width={60} height={60} />

              <h2 className={styles.title}>
                Instale o aplicativo e junte-se a nossa comunidade
              </h2>

              <div className={styles.rating}>
                <div className={styles.star}>
                  <StarIcon size={25} />
                  <span>4.9</span>
                </div>

                <div className={styles.update}>
                  <p>
                    <span style={{ fontWeight: 700 }}>257 mil</span> avaliações
                  </p>

                  <span>Atualizado em 22 Fev. 2022</span>
                </div>
              </div>

              <div className={styles.button}>
                <button type="button">
                  <img
                    src="/button-google-play.png"
                    alt="google play"
                    style={{ maxWidth: 214 }}
                  />
                </button>

                <button type="button">
                  <img
                    src="/button-apple-store.png"
                    alt="app store"
                    style={{ maxWidth: 214 }}
                  />
                </button>
              </div>
            </div>

            <div className={styles.cover}>
              <img src="/cta/mockup.png" alt="egames" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
