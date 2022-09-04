import Image from "next/image";
import styles from "../styles/Services.module.css";
import icon1 from "../public/icon1.svg"
import icon2 from "../public/icon2.svg"
import icon3 from "../public/icon3.svg"
import icon4 from "../public/icon4.svg"

const Services = () => {
  return (
    <>
      <section className={styles.services} id="services">
        <div className={styles.text}>
          <div className={styles.desc}>Características de servicio</div>
          <div className={styles.title}>Servicios</div>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.icon}>
                <Image src={icon1} /> 
            </div>
            <div className={styles.texts}>
              <div className={styles.title_mini}>Asesoría general</div>
              <div className={styles.desc_mini}>
                Let’s just get this out of the way - there will always be a kit
                version of Edu flow. Paid subscriptions allow us to continue
                helping learners around the world.
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.icon}>
                <Image src={icon2} /> 
            </div>
            <div className={styles.texts}>
              <div className={styles.title_mini}>Mantenimiento de extensiones punto a punto</div>
              <div className={styles.desc_mini}>
                Let’s just get this out of the way - there will always be a kit
                version of Edu flow. Paid subscriptions allow us to continue
                helping learners around the world.
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.icon}>
                <Image src={icon3} /> 
            </div>
            <div className={styles.texts}>
              <div className={styles.title_mini}>Mantenimiento de cortina</div>
              <div className={styles.desc_mini}>
                Let’s just get this out of the way - there will always be a kit
                version of Edu flow. Paid subscriptions allow us to continue
                helping learners around the world.
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.icon}>
                <Image src={icon4} /> 
            </div>
            <div className={styles.texts}>
              <div className={styles.title_mini}>Extensiones</div>
              <div className={styles.desc_mini}>
                Let’s just get this out of the way - there will always be a kit
                version of Edu flow. Paid subscriptions allow us to continue
                helping learners around the world.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
