import { ArrowRight } from 'lucide-react'
import CustomButton from '../Button/CustomButton'
import styles from './moveVariant.module.scss'

interface IMoveVariantProps{
    title: string
    type: string
    price: string
    photo: string
}
const MoveVariant = ({title, type, photo, price}:IMoveVariantProps) => {
  return (
    <div className={styles.move_variant}>
      <img src={photo} alt="" />
      <div className={styles.price_info}>
        {price}
        <span>Winter offer</span>
      </div>
      <h2>{title}</h2>
      <p>{type}</p>
      <CustomButton 
        text='See details'
        type='transparent'
        size='large'
        icon={<ArrowRight/>}  
      />
    </div>
  )
}

export default MoveVariant