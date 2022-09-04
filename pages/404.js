import Link from 'next/link'
import Layout from "@/components/Layout"
import styles from '@/styles/404.module.css'

export default function NotFound(){
    return(
    <Layout title='Page Not Found'>
      <div className={styles.error}>
        <h1>
        <i className="fa-solid fa-circle-exclamation"></i> 404
        </h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href='/'>Go Back Home</Link>
      </div>
    </Layout>
    )
}