import { Gamepad2, Share2, UsersRound } from "lucide-react";
import styles from "./styles.module.css";
import { VideoPlayer } from "./video-player";
import { Cards } from "./cards";
import { Community } from "./community";
import { motion } from "framer-motion";

export function SocialMedias() {
  const itemVariants = {
    hidden: { filter: "blur(15px)", opacity: 0 },
    reveal: { filter: "blur(0px)", opacity: 1 },
  };

  const config = {
    variants: itemVariants,
    transition: { duration: 1 },
    initial: "hidden",
    whileInView: "reveal",
  };

  return (
    <div className={styles.area} id="about">
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.cover}
            transition={{ staggerChildren: 0.25 }}
            initial="hidden"
            whileInView="reveal"
          >
            <motion.img
              src="/social-media/social-media-wallpaper.png"
              alt="egames"
              style={{ animationName: "a-02" }}
              className={styles.animation}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            />

            <motion.img
              src="/social-media/icon-00.png"
              alt="egames"
              className={styles.icon}
              style={{
                width: 60,
                height: 60,
                left: "82%",
                top: "50%",
                animationName: "a-00",
              }}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            />

            <motion.img
              src="/social-media/icon-01.png"
              alt="egames"
              className={styles.icon}
              style={{
                width: "45%",
                height: "20%",
                left: "-5%",
                top: "20%",
                animationName: "a-01",
              }}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            />

            <motion.img
              src="/social-media/icon-02.png"
              alt="egames"
              className={styles.icon}
              style={{
                width: 32,
                height: 32,
                left: "52%",
                top: "5%",
                animationName: "a-00",
                animationDelay: "0.5s",
              }}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            />

            <motion.img
              src="/social-media/icon-03.png"
              alt="egames"
              className={styles.icon}
              style={{
                width: 44,
                height: 44,
                left: "9%",
                top: "60%",
                animationName: "a-00",
                animationDelay: "1s",
              }}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <motion.div className={styles.details}>
            <motion.div {...config}>
              <Share2 size={36} color="#fff" />
            </motion.div>

            <motion.h2 {...config}>
              Uma rede social completa só de gamers
            </motion.h2>

            <motion.span {...config}>
              Uma experiência 100% voltada para jogos. Aqui você pode postar
              sobre suas partidas, acompanhar seu streamer favorito e muito
              mais.
            </motion.span>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          <div className={styles.details}>
            <motion.div {...config}>
              <UsersRound size={36} color="#fff" />
            </motion.div>

            <motion.h2 {...config}>
              Faça amigos para sua próxima partida
            </motion.h2>

            <motion.span {...config}>
              Converse com seus amigos através de mensagens privadas ou até
              mesmo em grupos de até 200 pessoas.
            </motion.span>
          </div>

          <div className={styles.cover}>
            <motion.img
              src="/social-media/message-01.png"
              alt="egames"
              style={{ animationName: "a-03" }}
              className={styles.animation}
              {...config}
            />

            <motion.img
              src="/social-media/message-00.png"
              alt="egames"
              className={styles.icon}
              style={{
                width: "90%",
                height: "40%",
                left: "-10%",
                top: "45%",
                animationName: "a-01",
                animationDelay: "1s",
              }}
              {...config}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.details} style={{ placeItems: "center" }}>
          <motion.div {...config}>
            <Gamepad2 size={36} color="#fff" />
          </motion.div>

          <motion.h2 style={{ maxWidth: 742, textAlign: "center" }} {...config}>
            Você por dentro de tudo o que acontece com seu jogo favorito
          </motion.h2>

          <VideoPlayer />

          <Cards />

          <Community />
        </div>
      </div>
    </div>
  );
}
