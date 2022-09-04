import styles from "../styles/Process.module.css"
import process1 from "../public/process1.png"
import process2 from "../public/process2.png"
import process3 from "../public/process3.png"
import process4 from "../public/process4.png"
import Image from "next/image"

const Process = () => {
  return (
    <>
      <section className={styles.process} id="process">
        <div className={styles.text}>
          <div className={styles.desc}>Procesos del servicio</div>
          <div className={styles.title}>Procesos</div>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.icon}>
                 <Image src={process1} />
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
            <Image src={process2} />
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
            <Image src={process3} />
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
            <Image src={process4} />
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
  )
}

export default Process