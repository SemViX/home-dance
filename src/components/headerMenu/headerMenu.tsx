import { routes } from '../../constants/routes'
import styles from './headerMenu.module.scss'

interface IHeaderMenuProps{
    isActive: boolean
}

const HeaderMenu = ({isActive}:IHeaderMenuProps) => {
  return (
    <div className={`${isActive? styles.header_menu: styles.hidden_header_menu}`}>
        <nav>
            <ul>
                {
                    routes.map((item, index) => (
                        <li key={index}>
                            <a href="#">{item.name}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </div>
  )
}

export default HeaderMenu