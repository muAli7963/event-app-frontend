import Head from 'next/head'
import {useRouter} from 'next/router'
import styles from '../styles/Layout.module.css'

import Showcase from './Showcase'
import Header from './Header'
import Footer from './footer'


export default function Layout({title, keywords, description, children}){
  const router = useRouter();
  return(
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
      </Head>
      <Header />
      {router.path === '/' && <Showcase /> }
      <div className={styles.container}>
        {children}
      </div>
      <Footer />
    </div>
    )
}

Layout.defaultProps = {
  title: 'events | find the hotest parties',
  description: 'find the latest events',
  keywords: 'music, dj , events'
}