import Head from 'next/head'
import styles from '../styel'

export default function Layout({title, keywords, description, children}){
  return(
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
      </Head>
      <div className={styles.container}>
        {children}
      </div>

    </div>
    )
}

Layout.defaultProps = {
  title: 'events | find the hotest parties',
  description: 'find the latest events',
  keywords: 'music, dj , events'
}