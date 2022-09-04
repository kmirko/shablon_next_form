import '@/styles/globals.css'
import Head from 'next/head'
import { AuthProvider } from '@/context/AuthContext'

function MyApp({ Component, pageProps, title, description, keywards}) {
  return (
    <AuthProvider>
        <Head>
          <title>{title}</title>
          <meta name='description' content={description}/>
          <meta name='keywards' content={keywards}/>               
        </Head>
      <Component {...pageProps} />
    </AuthProvider>
  ) 
}

export default MyApp

MyApp.defaultProps = {
  title: 'Shablon Form',
  description: 'Templates',
  keywards: 'SEO'
}
