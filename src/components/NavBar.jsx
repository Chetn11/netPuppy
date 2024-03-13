import React from 'react'
import styles from "./NavBar.module.css"
import logo from "../assets/logo.png"

function NavBar() {
  return (
    <div className={styles.Navbar}>
        <img className={styles.logo} src={logo} alt='logo'/>
         <div className={styles.navItems}>
            <a href='/INQUIRE'>INQUIRE</a>
            <a href='/APPLY'>APPLY</a>
            <a href='/SUPPORT'>SUPPORT US</a>
            <a href='/PARENTS'>PARENTS</a>
            <a href='/ALUMS'>ALUMS</a>
         </div>
    </div>
  )
}

export default NavBar
