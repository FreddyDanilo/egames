import { UserPlus } from "lucide-react";
import styles from "./styles.module.css";
import CountUp from "react-countup";

export function Header() {
  return (
    <header className={styles.area}>
      <div className={styles.gradient} />

      <div className="container">
        <div className={styles.grid}>
          <div className={styles.details}>
            <div className={styles.statistics}>
              <span className={styles.players}>
                <UserPlus size={16} />
                <CountUp end={25523} prefix="+" />
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

            <div className={styles.border} />

            <span
              className={styles.description}
              style={{ fontSize: 16, fontWeight: 500 }}
            >
              Integração com os maiores do mundo gamer
            </span>

            <div className={styles.channels}>
              <img
                src="/channels/facebook-gaming.png"
                alt="facebook gaming"
                style={{ maxWidth: 186 }}
              />
              <img
                src="/channels/twitch.png"
                alt="twitch"
                style={{ maxWidth: 32 }}
              />
              <img
                src="/channels/youtube.png"
                alt="youtube"
                style={{ maxWidth: 105 }}
              />
              <img
                src="/channels/discord.png"
                alt="discord"
                style={{ maxWidth: 140 }}
              />
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
