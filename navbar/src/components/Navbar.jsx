import React from 'react'
import styles from './Navbar.module.css'
import Logo from './Logo'
import Links from './Links'
import Button from './Button'


function Navbar() {
  return (
    <div class = {styles.navbar}>
        <div className={styles.div1}>
            <Logo/>
            <Links/>
            <Button/>
        </div>
    </div>
  )
}

export default Navbar