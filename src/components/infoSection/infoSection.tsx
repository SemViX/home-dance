import { ArrowRight } from 'lucide-react'
import CustomButton from '../Button/CustomButton'
import styles from './infoSection.module.scss'
import { motion } from 'motion/react'
import { info } from '../../constants/info'
import InfoBlock from '../infoBlock/infoBlock'
import { useState } from 'react'

const InfoSection = () => {

    const initialState:{[index:number]:boolean} = {
        0: false,
        1: false,
        2:false,
        3:false,
        4:false,
        5:false,
        6:false,
    }

    const [isActive, setActive] = useState(initialState)

    const handleClick = (index:number) => {
        setActive((prevState) => ({
            ...prevState, 
            [index]:!prevState[index]
        }))
        
    }
    
  return (
    <section className={styles.info_section}>
        <div className={styles.part_one}>
            <h1>Want to <br /> know <br /> more?</h1>
            <CustomButton type='transparent' size='medium' text='Learn more' icon={<ArrowRight/>}/>
        </div>
        <motion.div
            className={styles.info}
            initial={{y:-10, opacity:0}}
            whileInView={{y:0, opacity:1}}
            viewport={{once: false}}
            transition={{delay:0.2, ease:'easeInOut', duration:0.4}}
        >
            {
                info.map((item, index:number) => (
                    <InfoBlock 
                        key={index} 
                        title={item.title} 
                        info={item.info} 
                        isOpen={isActive[index]}
                        onClick={() => handleClick(index)} 
                    />
                ))
            }
        </motion.div>
    </section>
  )
}

export default InfoSection  