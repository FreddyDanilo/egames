import { QuoteI } from "../api";
import styles from "./styles.module.css";

export function Quote({ quote }: { quote: QuoteI }) {
  return (
    <div className={styles.area}>
      <div className={styles.profile}>
        <img src={quote.src} alt={quote.name} />

        <div style={{ display: "grid", gap: 4 }}>
          <span className={styles.name}>{quote.name}</span>
          <span className={styles.description}>{quote.description}</span>
        </div>
      </div>

      <div className={styles.quote_area}>
        <span className={styles.quote}>" {quote.quote} "</span>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div className={styles.favorite}>
          <span style={{ color: "#B3B0B8" }}>Jogo Favorito</span>
          <span style={{ color: "#fff" }}>{quote.game}</span>

          <div className={styles.icon}>
            <img
              src={quote.game_cover}
              alt={quote.game}
              width={25}
              height={25}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
