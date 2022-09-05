import styles from "../styles/Gallery.module.css";
import gallery1 from "../public/1.jpg";
import gallery2 from "../public/2.jpg";
import gallery3 from "../public/3.jpg";
import gallery4 from "../public/4.jpg";
import gallery5 from "../public/5.jpg";
import gallery6 from "../public/6.jpg";
import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <section className={styles.galley}>
        <div className={styles.row}>
          <div className={styles.img}>
            <Image src={gallery1} />
          </div>
          <div className={styles.img}>
            <Image src={gallery2} />
          </div>
          <div className={styles.img}>
            {" "}
            <Image src={gallery3} />
          </div>
          <div className={styles.img}>
            {" "}
            <Image src={gallery4} />
          </div>
          <div className={styles.img}>
            {" "}
            <Image src={gallery5} />
          </div>
          <div className={styles.img}>
            {" "}
            <Image src={gallery6} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
