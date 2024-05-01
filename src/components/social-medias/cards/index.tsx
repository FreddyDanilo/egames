import { CARDS } from "./api";
import styles from "./styles.module.css";

export function Cards() {
  return (
    <div className={styles.area}>
      <h2>Uma rede social completa só de gamers</h2>

      <div className={styles.area}>
        <div className={styles.grid}>
          {CARDS.map((data) => (
            <div className={styles.card} key={data.id}>
              <img src={data.cover} alt={data.title} width={46} height={46} />
              <h3 className={styles.title}>{data.title}</h3>
              <span className={styles.description}>{data.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
