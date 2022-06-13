import styles from './description.module.css'

export default function Description() {
    return (
        <div className={styles.description__content}>
            <h1 className={styles.title__description}>about <span className={styles.span}>me</span></h1>
            <p className={styles.subtitle__description}>A dev passionate about Front-end in constant learning and willing to face the challenges of the world of technology. {`I'm`} trying to teach what I know to those starting out, like me, through my Instagram page.</p>
        </div>
    )
}