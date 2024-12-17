import { motion } from 'motion/react'
import { MoveWay } from '../../constants/moveWay'
import MoveVariant from '../moveVariant/moveVariant'
import styles from './moveSection.module.scss'

const MoveSection = () => {
  return (
    <section className={styles.move_section}>
        <h1>Move your way</h1>
        <p>Choose the electric ride that suits your lifestyle.</p>
        <motion.div
          className={styles.section_content}
          initial={{y:-10, opacity:0}}
          whileInView={{y:0, opacity:1}}
          viewport={{once: false}}
          transition={{delay:0.2, ease:'easeInOut', duration:0.4}}
          >
            {
                MoveWay.map((item, index) => (
                    <MoveVariant key={index} title={item.title} price={item.price} type={item.type} photo={item.image}/>
                ))
            }
        </motion.div>
    </section>
  )
}

export default MoveSection