import Header from '../components/Header/Header'
import Head from 'next/head'
import styles from '../components/Main/main.module.css'
import MainHome from '../components/Main/Main'

export default function Start() {

    return (
      <div>
        <div>
            <Head>
                <title>Fuad Zarzar - Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
            </Head>
        </div>
        <body className={styles.body}>
                <Header />
        </body>
        </div>

    )

}