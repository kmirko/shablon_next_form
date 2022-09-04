import Link from "next/link";
import styles from '@/styles/Header.module.css';

export default function Header(){
    let user;

    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>HOME PAGE</Link>
            </div>
            <ul>
                {user ? (<>
                <li>
                    <Link href='/accounts/dashboard'>dashboard</Link>
                </li>
                <li>
                    <button className="btn">logout</button>
                </li>
                </>):(<>
                <li>
                    <Link href='/accounts/login'>login</Link>
                </li>
                </>)}
            </ul>
        </header>
    )
}