import Image from "next/image";
import styles from "../styles/Footer.module.css";
import logo from "../public/logo.png";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className={styles.footer} id="footer">
        <div className={styles.logo_all}>
          <div className={styles.logo}>
            <div className={styles.img}>
              <Image
                alt="Picture of the author"
                width={40}
                height={45}
                src={logo}
              />
            </div>
            <div className={styles.name}>Extensiones Milán Medellín</div>
          </div>

          <div className={styles.all}>
            All right reserved - Design & Developed by Emprise Soft, Inc
          </div>
        </div>
        <div className={styles.socials}>
          <div className={styles.social}>
            <a href="/whatsapp.com">
              <FaWhatsapp />
            </a>
          </div>
          <div className={styles.social}>
            <a href="/facebook.com">
              <FaFacebook />
            </a>
          </div>
          <div className={styles.social}>
            <a href="/https://www.instagram.com/extensionesmilanmedellin/">
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
