import React from "react";
import styles from "./header.module.css"
import logo from '../../assets/images/Digiency.svg';
import light from '../../assets/images/light.svg'
import burger from '../../assets/images/three_lines.svg'


export default function Header (){
    return (
        <header className={styles["header"]}>
            <div className={styles["logo"]}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles['light']}>
                <img src={light} alt="light" />
            </div>
            <div><img src={burger} alt="" /></div>
        </header>
    )
}


