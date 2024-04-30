import { UserPlus } from "lucide-react";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.area}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.details}>
            <div className={styles.statistics}>
              <span className={styles.players}>
                <UserPlus size={16} />
                +25.523
              </span>

              <span style={{ fontWeight: 500, fontFamily: "Inter" }}>
                eGamers online agora!
              </span>
            </div>

            <h1 className={styles.title}>
              A maior e mais completa comunidade gamer da internet
            </h1>

            <span className={styles.description}>
              Curta, compartilhe, assista e acompanhe tudo sobre o mundo gamer
              em um só lugar.
            </span>

            <div className={styles.button}>
              <button type="button">
                <img src="/button-google-play.png" alt="google play" />
              </button>

              <button type="button">
                <img src="/button-apple-store.png" alt="app store" />
              </button>
            </div>

            <div className={styles.border} />

            <span
              className={styles.description}
              style={{ fontSize: 16, fontWeight: 500 }}
            >
              Integração com os maiores do mundo gamer
            </span>

            <div className={styles.channels}>
              <img src="/channels/facebook-gaming.png" alt="facebook gaming" />
              <img src="/channels/twitch.png" alt="twitch" />
              <img src="/channels/youtube.png" alt="youtube" />
              <img src="/channels/discord.png" alt="discord" />
            </div>
          </div>

          <div className={styles.cover}>
            <img src="/mockups.png" alt="phone" />
          </div>
        </div>
      </div>
    </header>
  );
}
