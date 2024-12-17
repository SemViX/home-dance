import { ReactNode } from "react"
import styles from './button.module.scss'

interface ButtonProps{
    text: string
    icon?: ReactNode,
    type: 'purple' | 'transparent'
    size: 'large' | 'medium' 
}

const CustomButton = ({text, icon, type, size}:ButtonProps) => {
  return (
    <button className={`${type === 'purple'? styles.purple : styles.transparent} ${size === 'large'? styles.large : styles.medium}`}>
        {text}
        {icon && icon}
    </button>
  )
}

export default CustomButton