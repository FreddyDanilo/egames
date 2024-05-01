import { useNumber } from "../../hooks/useNumber";
import { STATISTICS } from "./api";
import styles from "./styles.module.css";
import CountUp from "react-countup";

export function Statistics() {
  const { format } = useNumber({ lang: "pt-br" });

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
                  <img src={data.image} alt={data.description} />
                </div>

                <div className={styles.details} style={{ width: 200 }}>
                  <h3>
                    <CountUp
                      enableScrollSpy={true}
                      end={format(data.title).number}
                      prefix="+"
                      suffix={" " + format(data.title).suffix}
                      duration={4}
                    />
                  </h3>
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
