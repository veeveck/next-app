import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
       <h1 className={styles.title}>Better design for your digital products</h1> 
       <p className={styles.description}>Turning your idea into Reality.We bring together teams for global tech industry.</p>
       <Button text="See Work" url="/portfolio"/>
      </div>
      <div className={styles.item}>
      <Image src={Hero} alt="imgh" className={styles.img}/>
      </div>
    </div>
  )
}
