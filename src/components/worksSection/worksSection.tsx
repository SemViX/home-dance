import CustomButton from '../Button/CustomButton'
import styles from './workSection.module.scss'
import { motion } from "motion/react"
import photoUrl from '../../assets/photo1.png'
const WorksSection = () => {
  return (
    <section className={styles.work_section}>
      <h1>How it works</h1>
      <motion.div
        initial={{y: -10, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        viewport={{once: false}}
        transition={{delay: 0.2, ease:'easeInOut', duration:0.5}}
        className={styles.work_content}
      >
        <div className={styles.work_list}>
          <ul>
            <li>1. Pick your city</li>
            <li>2. Choose your ride</li>
            <li>3. Delivery to your door</li>
            <li>4. Ride freely</li>
          </ul>

          <CustomButton text='Start now' type='purple' size='medium'/>
        </div>
        <img src={photoUrl} alt="" />
          
      </motion.div>
    </section>
  )
}

export default WorksSection