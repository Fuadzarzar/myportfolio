import styles from './projects.module.css'

export default function Projects() {
    return (
        <div className={styles.projects__content}>
            <div className={styles.text__content}>
                <h1 className={styles.text__title}>#projects</h1>
            </div>
            <div className={styles.projects__cards}>
                <div className="degrade"></div>
                <div className={styles.all__projects}>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                </div>
            </div>
        </div>
    )
}