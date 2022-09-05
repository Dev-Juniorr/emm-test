import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import img from "../public/img.jpg"


const Banner = () => {
  return (
    <main className={styles.main} id="home">
      <div className={styles.banner}>
        <div className={styles.title}>
          <h1 className={styles.title}>Extensiones Milán Medellín</h1>
        </div>

        <Link href="/booking">
          <a className={styles.button}> Reservar </a>
        </Link>

        <div className={styles.info}>
          <div className={styles.item}>
            <div className={styles.num}>50K</div>
            <div className={styles.desc}>Asesoría general</div>
          </div>
          <div className={styles.item}>
            <div className={styles.num}>20K</div>
            <div className={styles.desc}>Mantenimiento</div>
          </div>
          <div className={styles.item}>
            <div className={styles.num}>20K</div>
            <div className={styles.desc}>Clientes</div>
          </div>
        </div>
      </div>
      <div className={styles.img}>
        <Image src={img} />
      </div>
    </main>
  );
};

export default Banner;
