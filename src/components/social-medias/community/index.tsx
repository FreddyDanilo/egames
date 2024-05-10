import styles from "./styles.module.css";
import { motion } from "framer-motion";

export function Community() {
  const cardVariants = {
    hidden: { filter: "blur(15px)", opacity: 0, transform: "translateY(25%)" },
    reveal: { filter: "blur(0px)", opacity: 1, transform: "translateY(0)" },
  };

  const config = {
    variants: cardVariants,
    transition: { duration: 1 },
    initial: "hidden",
    whileInView: "reveal",
  };

  return (
    <div className={styles.grid}>
      <div className={styles.column}>
        <motion.div className={styles.r1} {...config}>
          <img src="/community/apex.png" alt="apex" width={98} height={62} />
          <span className={styles.description}>38 mil eGamers fãs</span>
        </motion.div>

        <motion.div className={styles.dota} {...config}>
          <img src="/community/dota.png" alt="dota 2" width={193} height={38} />

          <span className={styles.description}>28 mil eGamers fãs</span>

          <img
            src="/community/dota-avatar.png"
            alt="dota 2"
            className={styles.dota_avatar}
          />
        </motion.div>
      </div>

      <div className={styles.column}>
        <motion.div className={styles.r1} {...config}>
          <img
            src="/community/overwatch.png"
            alt="overwatch"
            width={206}
            height={31}
          />

          <span className={styles.description}>42 mil eGamers fãs</span>
        </motion.div>

        <motion.div className={styles.r1} {...config}>
          <img src="/community/pugb.png" alt="pugb" width={150} height={51} />

          <span className={styles.description}>180 mil eGamers fãs</span>
        </motion.div>

        <motion.div className={styles.csgo} {...config}>
          <img src="/community/csgo.png" alt="csgo" width={132} height={55} />

          <span className={styles.description}>125 mil eGamers fãs</span>
        </motion.div>
      </div>

      <div className={styles.column}>
        <motion.div className={styles.fifa} {...config}>
          <img
            src="/community/fifa.png"
            alt="fifa 22"
            width={170}
            height={43}
          />

          <span className={styles.description}>87 mil eGamers fãs</span>
        </motion.div>

        <motion.div className={styles.r2_gradient} {...config}>
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
        </motion.div>
      </div>

      <div className={styles.column}>
        <motion.div className={styles.valorant} {...config}>
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
        </motion.div>

        <motion.div className={styles.r1} {...config}>
          <img
            src="/community/roblox.png"
            alt="roblox"
            width={172}
            height={30}
          />

          <span className={styles.description}>80 mil eGamers fãs</span>
        </motion.div>
      </div>
    </div>
  );
}
