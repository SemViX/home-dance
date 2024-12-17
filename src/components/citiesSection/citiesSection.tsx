import styles from './citiesSection.module.scss'
import CustomButton from '../Button/CustomButton'
import { cities } from '../../constants/cities'
import {motion} from 'motion/react'
const CitiesSection = () => {
  return (
    <section className={styles.cities_section}>
        <motion.div 
            className={styles.part_one}
            initial={{y:-10, opacity:0}}
            whileInView={{y:0, opacity:1}}
            viewport={{once: false}}
            transition={{delay:0.2, ease:'easeInOut', duration:0.4}}
        >
            <h1>Your city is <br /> our city</h1>
            <p>
                Our rides are available in <br />
                5 European cities — and <br />
                counting.
            </p>
            <CustomButton type='purple' size='large' text='Start now'/>
            <p>Want to see Dance in your city?</p>
        </motion.div>
        <motion.div 
            className={styles.part_two}
            initial={{y:-10, opacity:0}}
            whileInView={{y:0, opacity:1}}
            viewport={{once: false}}
            transition={{delay:0.2, ease:'easeInOut', duration:0.4}}
        >
            <ul>
                {
                    cities.map((city, index) => (
                        <li key={index}>{city}</li>
                    ))
                }
            </ul>
        </motion.div>
    </section>
  )
}

export default CitiesSection