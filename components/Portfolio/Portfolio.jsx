import styles from './portfolio.module.css'
import { RiShareCircleLine } from "react-icons/ri"

export default function Portfolio() {
    return (
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <p className={styles.hashtag}>#myprojects</p>
                    <h1 className={styles.title}>My Projects
                    <p className={styles.subtitle}>Sell all projects</p></h1>
                </div>

                <a href="https://github.com/Fuadzarzar?tab=repositories">
                    <div className={styles.iconContainer}>
                        <RiShareCircleLine fontSize="2rem" color="#9C51E0"></RiShareCircleLine>
                    </div>
                </a>
            </div>
    )
}