import { Plus } from 'lucide-react'
import styles from './infoBlock.module.scss'

interface IInfoBlockProps{
    title: string
    info: string
    isOpen: boolean,
    onClick: () => void
}

const InfoBlock = ({title, info, isOpen, onClick}:IInfoBlockProps) => {
  return (
    <div className={styles.info_block} onClick={onClick}>
        <div className={styles.main}>
            <Plus/>
            <h2>{title}</h2>
        </div>
        <div className={`${isOpen? styles.info : styles.hidden_info}`}>
            <p>{info}</p>
        </div>
    </div>
  )
}

export default InfoBlock