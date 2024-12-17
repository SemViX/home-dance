import {motion} from 'motion/react'
import styles from './rideSection.module.scss'
import CustomButton from '../Button/CustomButton'
import { ArrowRight } from 'lucide-react'
import photoUrl from '../../assets/rideImage.png'
const RideSection = () => {
  return (
    <motion.section
        className={styles.ride_section}
        initial={{y:-10, opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:false}}
        transition={{delay:0.2, ease:'easeInOut', duration:0.4}}
    >
        <div className={styles.section_content}>
            <h1>
                Just ride— <br /> we’ll take care <br /> of the rest
            </h1>
            <p>
                Your local Concierge Team will repair <br />
                or replace your ride within 24 hours— <br />
                all included with your subscription.
            </p>
            <CustomButton
             text='See details'
             type='transparent'
             size='medium'
             icon={<ArrowRight/>}
            />
        </div>
        <img src={photoUrl} alt="" />
    </motion.section>
  )
}

export default RideSection