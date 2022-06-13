import styles from './profile.module.css'
import Image from 'next/image'
import ProfileImage from '../../../public/images/profile.png'

export default function Profile() {

    return (
        <div className={styles.profile__content}>
            <div className={styles.Img}>
            <Image src={ProfileImage} alt="Imagem de Perfil" ></Image>
            </div>
            <div className={styles.content__profession}>
                <h1 className={styles.profile__name}>Fuad Zarzar</h1>
                <h2 className={styles.profile__profession}>Front-End developer</h2>
            </div>
        </div>
    )
}