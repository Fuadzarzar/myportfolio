import styles from './stacks.module.css'
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNextdotjs } from 'react-icons/si'


export default function StacksUsed() {
    return (
        <div>
            <div>
                <h1 className={styles.stack__title}>stacks <span className={styles.stack__span}>I use</span></h1>
            </div>

            <div className={styles.stack__list}>

                <div className={styles.icon__content}>
                    <SiCss3 className={`${styles.stack__icon} ${styles.html__icon}`} />
                    <p className={styles.icon__title}>HTML</p>
                </div>

                <div className={styles.icon__content}>
                    <SiHtml5 className={`${styles.stack__icon} ${styles.css__icon}`} />
                    <p className={styles.icon__title}>CSS3</p>
                </div>

                <div className={styles.icon__content}>
                    <SiJavascript className={`${styles.stack__icon} ${styles.js__icon}`} />
                    <p className={styles.icon__title}>JavaScript</p>
                </div>

                <div className={styles.icon__content}>
                    <SiReact className={`${styles.stack__icon} ${styles.react__icon}`} />
                    <p className={styles.icon__title}>ReactJS</p>
                </div>

                <div className={styles.icon__content}>
                    <SiNextdotjs className={`${styles.stack__icon} ${styles.next__icon}`} />
                    <p className={styles.icon__title}>NextJS</p>
                </div>

            </div>
        </div>
    )
}

