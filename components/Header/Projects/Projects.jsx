import styles from './projects.module.css'
import { FiExternalLink } from 'react-icons/fi'

export default function Projects() {

    return (
        <div className={styles.projects__content}>
            <div className={styles.text__content}>
                <h1 className={styles.text__title}>#projects</h1>
            </div>
            <div className={styles.projects__cards}>
                <div className="degrade"></div>
                <div className={styles.all__projects}>


                    <div className={styles.card}>
                        <div className={styles.card__content}>
                            <h1 className={styles.card__title}>Forkstudy</h1>
                            <p className={styles.card__description}>forkstudy is a static landing page of a shared learning platform.</p>
                        </div>

                        <div className={styles.card__tecnology}>
                            <ul className={styles.card__list}>
                                <li className={`${styles.technology} ${styles.html}`}>HTML</li>
                                <li className={`${styles.technology} ${styles.css}`}>CSS3</li>
                                <li className={`${styles.technology} ${styles.javascript}`}>JavaScript</li>
                            </ul>
                        </div>
                        <p className={styles.card__arrow}><a href="https://github.com/Fuadzarzar/forkstudy-desktop-version" target="new_blank"><FiExternalLink className={styles.external} /></a>  </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.card__content}>
                            <h1 className={styles.card__title}>Titulo</h1>
                            <p className={styles.card__description}>descrição</p>
                        </div>

                        <div className={styles.card__tecnology}>
                            <ul className={styles.card__list}>
                                <li className={`${styles.technology} ${styles.html}`}>HTML</li>
                                <li className={`${styles.technology} ${styles.css}`}>CSS3</li>
                                <li className={`${styles.technology} ${styles.javascript}`}>JavaScript</li>
                            </ul>
                        </div>
                        <p className={styles.card__arrow}>{'->'}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}