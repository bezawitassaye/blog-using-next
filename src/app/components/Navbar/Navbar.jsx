import React from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themetoogle/Themetoggle'
import Authlinks from '../authLinks/Authlinks'
const Navbar = () => {
  return (
    <div  className={styles.container}>
        <div className={styles.social}>
            {/* <Image src="/facebook.png" alt='facebook' width={40} height={40}/>
            <Image src="/youtube.png" alt='facebook' width={40} height={40}/> */}

        </div>
        <div className={styles.logo}>
            beza blog
            
        </div>
        <div className={styles.links}>
            <ThemeToggle/>
            <Link href="/">Homepage</Link>
            <Link href="/">Contact</Link>
            <Link href="/"> About</Link>
            <Authlinks/>

        </div>

      
    </div>
  )
}

export default Navbar
