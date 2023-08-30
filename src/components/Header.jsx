import React from "react";
import { Link } from "react-router-dom";

import styles from '../styles/header.module.css'
import logo from "../assets/images/28699644_christmas_2012_new_6457.jpg";
import heart from "../assets/icons/icon-2445095_640.png";
import cartImag from "../assets/icons/shopping-cart-297750_640.png"

const Header = ()=>{
    return (
    <>
       <div className={styles.header}>
        <div >
          <Link to="ROUTES.HOME">
             <img className={styles.logo} src={logo} alt='stuff' />
          </Link>
        </div>
        <form className={styles.form}>
          <div className={styles.info}>
              <div className={styles.user}>
                 <div className={styles.avatar}>User Avatar</div>
              </div>
          </div>
          <div >
            <input className={styles.input} type="search" name="search" placeholder="Search ..."></input>
          </div>
          <div className={styles.box}></div>
         </form>
         <div className={styles.containerIcons}>
          <div className={styles.account}>
            <Link to="ROUTES.HOME" className={styles.favourites}>
               <img className={styles.iconHead} src={heart} />
            </Link>
          </div>
       
          <div className={styles.account}>
            <Link to="ROUTES.CART" className={styles.favourites} >
                <img className={styles.iconCart} src={cartImag} />
            </Link>
            <span ><h3>2</h3></span>
          </div>
         </div>
       </div>
    </>
    );
  }
  
  export default Header