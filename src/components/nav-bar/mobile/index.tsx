import { Menu, X } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";

export function Mobile() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.area}>
      <div
        className={styles.menu}
        style={{ left: isOpen ? "0%" : "-100%" }}
        onClick={handleMenu}
      >
        <a href="#about">Sobre</a>
        <a href="#features">Funcionalidades</a>
        <a href="#download">Download</a>
        <a href="#">Português</a>
      </div>

      <button
        type="button"
        aria-label="botão menu"
        className={styles.button}
        onClick={handleMenu}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>
  );
}
