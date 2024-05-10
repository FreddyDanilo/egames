import { Scan, Star, Trophy } from "lucide-react";
import { BadgeCheck, CirclePlay, Eye, Pause, Rocket } from "lucide-react";
import styles from "./styles.module.css";
import { USERS } from "./api";
import { motion } from "framer-motion";

export function VideoPlayer() {
  const itemVariants = {
    hidden: { filter: "blur(15px)", opacity: 0 },
    reveal: { filter: "blur(0px)", opacity: 1 },
  };

  const dotsVariants = {
    hidden: { transform: "translate(-50%,-50%)", opacity: 0 },
    reveal: { transform: "translate(0%,0%)", opacity: 1 },
  };

  const detailsVariants = {
    hidden: { transform: "translate(15%,5%)", opacity: 0 },
    reveal: { transform: "translate(0%,0%)", opacity: 1 },
  };

  const detailsConfig = {
    variants: detailsVariants,
    transition: { duration: 1 },
    initial: "hidden",
    whileInView: "reveal",
  };

  const config = {
    variants: itemVariants,
    transition: { duration: 1 },
    initial: "hidden",
    whileInView: "reveal",
  };

  return (
    <div className={styles.area}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <motion.div className={styles.browser} {...config}>
            <div className={styles.header}>
              <motion.div
                className={styles.button}
                initial="hidden"
                whileInView="reveal"
                transition={{ staggerChildren: 0.25 }}
              >
                <motion.div
                  style={{ backgroundColor: "#fff" }}
                  transition={{ duration: 0.3 }}
                  variants={dotsVariants}
                />
                <motion.div
                  style={{ backgroundColor: "#ffffff60" }}
                  transition={{ duration: 0.3 }}
                  variants={dotsVariants}
                />
                <motion.div
                  style={{ backgroundColor: "#ffffff20" }}
                  transition={{ duration: 0.3 }}
                  variants={dotsVariants}
                />
              </motion.div>
            </div>

            <div className={styles.body}>
              <div className={styles.channel}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className={styles.channel_name}>CarekaGamer</span>

                  <BadgeCheck size={16} color="#fff" />
                </div>

                <div style={{ display: "flex", gap: 16 }}>
                  <div className={styles.live}>
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        background: "#fff",
                        borderRadius: "50%",
                      }}
                    />
                    <span>live</span>
                  </div>

                  <div className={styles.views}>
                    <div className={styles.views_icon}>
                      <Eye color="#fff" size={20} />
                    </div>

                    <span>
                      2.754 <span className={styles.views_icon}>viewers</span>
                    </span>
                  </div>
                </div>
              </div>

              <img src="/browser-wallpaper.png" alt="egames" />

              <div className={styles.controllers}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <Pause color="#fff" />

                  <div className={styles.timeline}>
                    <div className={styles.time} />
                  </div>

                  <Scan color="#fff" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.users}
            transition={{ staggerChildren: 0.25 }}
            initial="hidden"
            whileInView="reveal"
          >
            {USERS.map((user) => (
              <motion.div
                className={styles.user}
                key={user.id}
                variants={dotsVariants}
              >
                <img src={user.cover} alt={String(user.id)} />
              </motion.div>
            ))}

            <motion.div className={styles.add_user} variants={dotsVariants}>
              +
            </motion.div>
          </motion.div>
        </div>

        <div className={styles.right}>
          <div className={styles.box}>
            <motion.div className={styles.content} {...detailsConfig}>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <Star size={22} color="#fff" />
                <span className={styles.title}>Avaliações</span>
              </div>

              <span className={styles.description}>
                Encontre as melhores avaliações antes de baixar ou comprar um
                novo jogo.
              </span>
            </motion.div>
          </div>

          <div className={styles.box}>
            <motion.div className={styles.content} {...detailsConfig}>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <CirclePlay size={22} color="#fff" />
                <span className={styles.title}>Streamers</span>
              </div>

              <span className={styles.description}>
                Divirta-se com os Streamers parceiros oficiais da eGames.
              </span>
            </motion.div>
          </div>

          <div className={styles.box}>
            <motion.div className={styles.content} {...detailsConfig}>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <Rocket size={22} color="#fff" />
                <span className={styles.title}>Lançamentos</span>
              </div>

              <span className={styles.description}>
                Você por dentro de todas as novidades do mercado antes de todos.
              </span>
            </motion.div>
          </div>

          <div className={styles.box}>
            <motion.div className={styles.content} {...detailsConfig}>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <Trophy size={22} color="#fff" />
                <span className={styles.title}>Campeonatos</span>
              </div>

              <span className={styles.description}>
                Organize e acompanhe os maiores campeonatos em um só lugar.
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
