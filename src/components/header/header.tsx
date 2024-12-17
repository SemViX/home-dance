import {     Menu, Music, X } from "lucide-react"
import styles from './header.module.scss';
import { routes } from "../../constants/routes";
import CustomButton from "../Button/CustomButton";
import { useState } from "react";
import HeaderMenu from "../headerMenu/headerMenu";

const Header = () => {
    const [isActive, setActive] = useState(false)

    const handleActive = () => {
        setActive(state => !state)
    }
  return (
    <header className={styles.header}>
        <div className={styles.header_logo}>
            <Music size={40}/>
            <p>Dance</p>
        </div>
        <nav className={styles.header_links}>
            <ul>
                {routes.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
            <CustomButton text="Start Now" type="purple" size="medium"/>
        </nav>
        <div className={styles.header_burger_menu} onClick={handleActive}>
            {isActive? <X size={40}/> : <Menu size={40}/>}
        </div>
        <HeaderMenu isActive={isActive}/>
    </header>
  )
}

export default Header