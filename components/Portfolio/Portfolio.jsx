import styles from './portfolio.module.css'
import { IoArrowForwardCircle } from "react-icons/io5"



export default function Portfolio() {
    return (
            <div className={styles.containerProjects}>
                <div className={styles.titleContainer}>
                    <p className={styles.hashTitle}>#myprojects</p>
                    <h1 className={styles.title}>My Projects
                    <p className={styles.ghosttext}>Sell all projects</p></h1>
                </div>
                <div>
                <IoArrowForwardCircle font-size="2.5rem" color="#8A39E1">
                </IoArrowForwardCircle>
                </div>
            </div>
    )
}