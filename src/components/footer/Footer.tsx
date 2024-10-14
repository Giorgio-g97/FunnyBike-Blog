import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          © {new Date().getFullYear()} La mia azienda. Tutti i diritti
          riservati.
        </p>
        <nav>
          <ul className={styles.nav}>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Termini di Servizio</a>
            </li>
            <li>
              <a href="/contact">Contatti</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
