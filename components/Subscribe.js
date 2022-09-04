import styles from "../styles/Subscribe.module.css"

const Subscribe = () => {
  return (
    <>
      <section className={styles.subscribe}>
        <div className={styles.title}>Suscríbase para recibir notificaciones sobre actualizaciones</div>
        <div className={styles.description}>Al suscribirse con su correo, acepta nuestra política de privacidad</div>

        <div className={styles.send}>
          <input className={styles.input} type="text" placeholder="Tu correo electronico" />
          <button className={styles.button}>Enviar</button>
        </div>
      </section>
    </>
  )
}

export default Subscribe