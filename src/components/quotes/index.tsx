import { QuoteIcon } from "lucide-react";
import styles from "./styles.module.css";
import { QUOTES } from "./api";
import { Quote } from "./quote";
import { motion } from "framer-motion";

export function Quotes() {
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
    <div className={styles.area}>
      <div className="container">
        <div className={styles.header}>
          <motion.div {...config}>
            <QuoteIcon size={36} color="#fff" />
          </motion.div>

          <motion.h2 className={styles.title} {...config}>
            O que estão falando da comunidade por aí
          </motion.h2>
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
