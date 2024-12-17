import { members } from '../../constants/members'
import {motion} from 'motion/react'
import styles from './membersSection.module.scss'
const MembersSection = () => {
  return (
    <section className={styles.members_section}>
        <h1>What our members say</h1>
        <div className={styles.section_content}>
            {
                members.map((item, index) => (
                    <motion.div
                        key={index}
                        className={styles.message}
                        initial={{y:-10, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        viewport={{once:false}}
                        transition={{delay:0.2, ease:'easeInOut', duration:0.4}}
                    >
                        <p>
                            {item.message}
                        </p>
                        <span>{item.name}, {item.city}</span>
                    </motion.div>
                ))
            }
        </div>
    </section>
  )
}

export default MembersSection