import styles from './social.module.css'
import Image from 'next/image'
import Git from '../../../public/images/git.svg'
import Linked from '../../../public/images/linke.svg'
import Insta from '../../../public/images/instagram.svg'

export default function Social() {
    return (
        <div className={styles.social__content}>
            <div className={styles.social__follow}>
                <p className={styles.follow__text}>Follow me on</p>
            </div>
            <div className={styles.icon__content}>
                <Image src={Git} alt='Github Image' />
            </div>
            <div className={styles.icon__content}>
                <Image src={Linked} alt='LinkedIn Image' />
            </div>
            <div className={styles.icon__content}>
                <Image src={Insta} alt='Instagram Image' />
            </div>
        </div>
    )
}

