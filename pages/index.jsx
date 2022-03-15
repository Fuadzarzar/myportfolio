import Header from '../components/Header/Header'
import LatestProject from '../components/LatestProject/Latest'
import styles from '../components/Header/header.module.css'
import Portfolio from '../components/Portfolio/Portfolio'
import Head from 'next/head'

export default function Start() {

    return (
        <>
        <div>
            <Head>
                <title>Fuad Zarzar - Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
        </div>
        <body className={styles.body}>
                <Header />
            <div className={styles.shortcuts}>
                <LatestProject />
                < Portfolio />
            </div>
        </body>
        </>

    )


}