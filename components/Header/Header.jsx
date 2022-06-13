import styles from './header.module.css'
import Profile from './Profile/Profile';
import Description from './Description/Description';
import Social from './Social/Social';
import StacksUsed from './Stacks/StacksUsed';
import Projects from './Projects/Projects';
import { GiBrazilFlag } from 'react-icons/gi'


export default function Header() {
    return (
       <div className={styles.header}>
        <div className={styles.oi}>
            <GiBrazilFlag className={styles.icon} />
        </div>
           <Profile />
           <Description />
           <Social />
           <StacksUsed />
           <Projects />
       </div>
    )
}