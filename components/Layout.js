import Footer from "./Footer";
import Header from "./header";
import styles from '@/styles/Layout.module.css'

export default function Layout({children}){
    return(
        <div> 
            <div className={styles.container}>
                <div className={styles.header}>
                    <Header/>
                </div>
                <div className={styles.main}>
                    {children}
                </div>
                <div className={styles.footer}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
