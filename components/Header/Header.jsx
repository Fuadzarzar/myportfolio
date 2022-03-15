import styles from './header.module.css'
import Image from 'next/image'
import profile from '../../public/images/profile.jpg'
import { AiOutlineCode, AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";


export default function Header() {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileImage}><Image src={profile} className={styles.photo} width="100px" height="100px" alt="foto do perfil" /></div>
            <div>
                <h1 className={styles.profileName}>Fuad Zarzar</h1>
                <p className={styles.profileWork}>Front-end web developer</p>
            </div>
            <div className="icon">
                <div className={styles.iconContainer}><AiOutlineCode color="white" fontSize="1.5rem"></AiOutlineCode></div>
                <div className="description">
                    <p className={styles.profileDescription}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text eve
                    </p>
                </div>
                <div className={styles.socialMdia}>
                    <div className={styles.social}> <p className={styles.socialTitle}>Github</p> < AiFillGithub fontSize="1.2rem" ></AiFillGithub></div>
                    <div className={styles.social}><p className={styles.socialTitle}>Instagram</p> < AiFillInstagram fontSize="1.2rem" ></AiFillInstagram></div>
                    <div className={styles.social}><p className={styles.socialTitle}>Twitter</p> < AiFillTwitterCircle fontSize="1.2rem" ></AiFillTwitterCircle></div>
                </div>
            </div>
        </div>
    )
}