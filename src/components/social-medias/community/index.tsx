import styles from "./styles.module.css";

export function Community() {
  return (
    <div className={styles.grid}>
      <div className={styles.column}>
        <div className={styles.r1}>
          <img src="/community/apex.png" alt="apex" width={98} height={62} />
          <span className={styles.description}>38 mil eGamers fãs</span>
        </div>

        <div className={styles.dota}>
          <img src="/community/dota.png" alt="dota 2" width={193} height={38} />

          <span className={styles.description}>28 mil eGamers fãs</span>

          <img
            src="/community/dota-avatar.png"
            alt="dota 2"
            className={styles.dota_avatar}
          />
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.r1}>
          <img
            src="/community/overwatch.png"
            alt="overwatch"
            width={206}
            height={31}
          />

          <span className={styles.description}>42 mil eGamers fãs</span>
        </div>

        <div className={styles.r1}>
          <img src="/community/pugb.png" alt="pugb" width={150} height={51} />

          <span className={styles.description}>180 mil eGamers fãs</span>
        </div>

        <div className={styles.csgo}>
          <img src="/community/csgo.png" alt="csgo" width={132} height={55} />

          <span className={styles.description}>125 mil eGamers fãs</span>
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.fifa}>
          <img
            src="/community/fifa.png"
            alt="fifa 22"
            width={170}
            height={43}
          />

          <span className={styles.description}>87 mil eGamers fãs</span>
        </div>

        <div className={styles.r2_gradient}>
          <img
            src="/community/cta-brand.png"
            alt="egames"
            width={71}
            height={71}
          />

          <span className={styles.title}>
            Na comunidade eGames todo jogo tem seu espaço.
            <br />
            Encontre a sua tribo!
          </span>

          <a className={styles.link} href="#">
            Instalar aplicativo
          </a>
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.valorant}>
          <img
            src="/community/valorant.png"
            alt="valorant"
            width={106}
            height={68}
          />

          <span className={styles.description}>95 mil eGamers fãs</span>

          <img
            src="/community/valorant-avatar.png"
            alt="valorant"
            className={styles.valorant_avatar}
          />
        </div>

        <div className={styles.r1}>
          <img
            src="/community/roblox.png"
            alt="roblox"
            width={172}
            height={30}
          />

          <span className={styles.description}>80 mil eGamers fãs</span>
        </div>
      </div>
    </div>
  );
}
