import styles from './header.module.css'
import Image from 'next/image'
import profile from '../../public/images/profile.jpg'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";


export default function Header() {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileImage}>
                <Image src={profile} className={styles.photo} width="100px" height="100px" alt="foto do perfil" />
            </div>

            <div>
                <h1 className={styles.profileName}>Fuad Zarzar</h1>
                <p className={styles.profileWork}>Front-end web developer</p>
            </div>

            <div className="icon">
                <div className={styles.iconContainer}>
                    <BiCodeAlt color="#8A39E1" fontSize="1.5rem" className={styles.animIcon}></BiCodeAlt>
                </div>

                <div className={styles.socialMdia}>
                    <a href="https://github.com/Fuadzarzar">
                        <div className={styles.social}>
                            <p className={styles.socialTitle}>Github</p>
                            < AiFillGithub fontSize="1.2rem" ></AiFillGithub>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/fuad-zarzar-78ab05124/">
                        <div className={styles.social}>
                            <p className={styles.socialTitle}>LinkedIn</p> 
                            <AiFillLinkedin fontSize="1.2rem"></AiFillLinkedin>
                        </div>
                    </a>

                    <a href="https://www.instagram.com/aprendizdedev/">
                        <div className={styles.social}>
                            <p className={styles.socialTitle}>Instagram</p> 
                            < AiFillInstagram fontSize="1.2rem" ></AiFillInstagram>
                        </div>
                    </a>
                </div>

                <div className="description">
                    <p className={styles.profileDescription}>
                        A dev passionate about Front-end in constant learning and willing to face the challenges of the world of technology. I&#39;m trying to teach what I know to those starting out, like me, through my Instagram page.
                    </p>
                </div>

            </div>

        </div>
    )
}