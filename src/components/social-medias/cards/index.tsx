import { CARDS } from "./api";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

export function Cards() {
  const itemVariants = {
    hidden: { filter: "blur(15px)", opacity: 0 },
    reveal: { filter: "blur(0px)", opacity: 1 },
  };

  const cardVariants = {
    hidden: { filter: "blur(15px)", opacity: 0, transform: "translateY(15%)" },
    reveal: { filter: "blur(0px)", opacity: 1, transform: "translateY(0)" },
  };

  const config = {
    variants: itemVariants,
    transition: { duration: 1 },
    initial: "hidden",
    whileInView: "reveal",
  };

  return (
    <div className={styles.area} id="features">
      <motion.h2 {...config}>Uma rede social completa só de gamers</motion.h2>

      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="reveal"
        transition={{ staggerChildren: 0.25 }}
      >
        {CARDS.map((data) => (
          <motion.div
            className={styles.card}
            key={data.id}
            variants={cardVariants}
          >
            <img src={data.cover} alt={data.title} width={46} height={46} />
            <h3 className={styles.title}>{data.title}</h3>
            <span className={styles.description}>{data.description}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
