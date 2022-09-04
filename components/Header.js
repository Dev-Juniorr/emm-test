import styles from "../styles/Header.module.css";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image className={styles.img} src={logo} />
        <div className={styles.name}>Extensiones Milán Medellín</div>
      </div>

      <div className={styles.links_button}>
        <div className={styles.links}>
          <a className={styles.link} href="#home">
            Inicio
          </a>
          <a className={styles.link} href="#services">
            Servicios
          </a>
          <a className={styles.link} href="#process">
            Procesos
          </a>
        </div>

        <div className={styles.icons_button}>
          <Link href="/reservas">
            <a className={styles.button}>Reservar</a>
          </Link>
          <div className={styles.socials}>
            <div className={styles.social}>
              <a href="/whatsapp.com" target="_blank">
                <FaWhatsapp />
              </a>
            </div>
            <div className={styles.social}>
              <a href="/facebook.com" target="_blank">
                <FaFacebook />
              </a>
            </div>
            <div className={styles.social}>
              <a href="/https://www.instagram.com/extensionesmilanmedellin/" target="_blank">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
