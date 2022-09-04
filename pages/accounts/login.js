import {useState} from 'react'
import Layout from "@/components/Layout";
import styles from '@/styles/Form.module.css'

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault()
    }

    return(
        <Layout>
            <div className={styles.card}>
                <div className={styles.logo}>
                <i className="fa-solid fa-user"></i>
                <span>Log In Page</span>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div >
                        <label>Email:</label>
                        <input type='email' onChange={e=>setEmail(e.target.value)} value={email}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type='password' onChange={e=>setPassword(e.target.value)} value={password}/>
                    </div>
                    <button className="btn">Login</button>
                </form>
            </div>
        </Layout>
    )
}