import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/EventItem.module.css'

export default function EventItem(){
  return(
    <div className={styles.event}>
      <div className={styles.img}>
        <Image src={evt.image ? evt.image.formats.thubmnail.url:'/images/event-default.png' } width={170} height={100} />
        }
      </div>
      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`}>
          <a className='btn'>Details</a>
        </Link>
      </div>


    </div>)
}