import { QuoteIcon } from "lucide-react";
import styles from "./styles.module.css";
import { QUOTES } from "./api";
import { Quote } from "./quote";

export function Quotes() {
  return (
    <div className={styles.area}>
      <div className="container">
        <div className={styles.header}>
          <QuoteIcon size={36} color="#fff" />
          <h2 className={styles.title}>
            O que estão falando da comunidade por aí
          </h2>
        </div>
      </div>

      <div className={styles.flex}>
        {QUOTES.map((quote) => (
          <Quote quote={quote} />
        ))}
      </div>
    </div>
  );
}
