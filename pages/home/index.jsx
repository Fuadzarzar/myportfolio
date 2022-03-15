import Header from '../../components/Header/Header'
import LatestProject from '../../components/LatestProject/Latest'
import styles from '../../components/Header/header.module.css'
import Portfolio from '../../components/Portfolio/Portfolio'

export default function Start() {

    return (
        <>
        <body className={styles.body}>
        <Header />
        <LatestProject />
        < Portfolio />
        </body>
        </>

    )


}