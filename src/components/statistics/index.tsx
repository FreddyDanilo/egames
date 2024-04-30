import { STATISTICS } from "./api";
import styles from "./styles.module.css";

export function Statistics() {
  return (
    <div className={styles.area}>
      <div className="container">
        <div className={styles.flex}>
          <h2 className={styles.title}>
            Confira os números eGames e faça parte você também
          </h2>

          <div className={styles.flex_two}>
            {STATISTICS.map((data) => (
              <div key={data.id} className={styles.box}>
                <div className={styles.icon}>
                  <img src={data.image} alt={data.title} />
                </div>

                <div className={styles.details}>
                  <h3>{data.title}</h3>
                  <span>{data.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
