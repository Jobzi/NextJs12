import Image from 'next/image'
import styles from '../styles/Home.module.css'
function Footer(){
    return <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/yaw.svg" alt="Vercel Logo" width={100} height={36} />
          </span>
        </a>
      </footer>
}
export default Footer