import styles from './latest.module.css'
import { RiShareCircleLine } from "react-icons/ri"

export default function LatestProject() {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
            <p className={styles.latestHash}>#updatedBrain</p>
            <p className={styles.latestTitle}>Latest project</p>
            </div>
            <div><RiShareCircleLine fontSize="1.8rem">
                </RiShareCircleLine></div>
        </div>
    )
}