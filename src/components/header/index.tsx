import { UserPlus } from "lucide-react";
import styles from "./styles.module.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export function Header() {
  const titleVariants = {
    hidden: { filter: "blur(15px)", opacity: 0 },
    reveal: { filter: "blur(0px)", opacity: 1 },
  };

  const titleChars =
    "A maior e mais completa comunidade gamer da internet".split("");

  const itemVariants = {
    hidden: { transform: "translate(-10%,40px)", opacity: 0 },
    reveal: { transform: "translate(0px,0px)", opacity: 1 },
  };

  const coverVariants = {
    hidden: { transform: "translate(70%,70%) rotate(-45deg)", opacity: 0 },
    reveal: { transform: "translate(0%,0%) rotate(0deg)", opacity: 1 },
  };

  return (
    <header className={styles.area}>
      <div className={styles.gradient} />

      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.details}
            whileInView={"reveal"}
            initial="hidden"
            transition={{ staggerChildren: 0.25, staggerDirection: 1 }}
          >
            <motion.div
              className={styles.statistics}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <span className={styles.players}>
                <UserPlus size={16} />
                <CountUp end={25523} prefix="+" />
              </span>

              <span style={{ fontWeight: 500, fontFamily: "Inter" }}>
                eGamers online agora!
              </span>
            </motion.div>

            <motion.h1
              className={styles.title}
              whileInView={"reveal"}
              initial="hidden"
              transition={{ staggerChildren: 0.05 }}
            >
              {titleChars.map((char, index) => (
                <motion.span
                  key={index}
                  variants={titleVariants}
                  transition={{ duration: 0.25 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.span
              className={styles.description}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              Curta, compartilhe, assista e acompanhe tudo sobre o mundo gamer
              em um só lugar.
            </motion.span>

            <motion.div
              className={styles.button}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>

            <motion.div
              className={styles.border}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            />

            <motion.span
              className={styles.description}
              style={{ fontSize: 16, fontWeight: 500 }}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              Integração com os maiores do mundo gamer
            </motion.span>

            <motion.div
              className={styles.channels}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.cover}
            whileInView={"reveal"}
            initial="hidden"
          >
            <motion.img
              src="/mockups.png"
              alt="phone"
              variants={coverVariants}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
