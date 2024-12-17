import { Check } from 'lucide-react'
import { subscriptionInfo } from '../../constants/subscriptionInfo'
import styles from './subscriotionSection.module.scss'
import {motion} from 'motion/react'
import { MoveWay } from '../../constants/moveWay'
import MoveVariant from '../moveVariant/moveVariant'
const SubscriptionSection = () => {
  return (
    <motion.section
        className={styles.subscription_section}
        initial={{y:-10, opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:false}}
        transition={{delay:0.2, ease:'easeInOut', duration:0.4}}
    >
        <div className={styles.info}>
            <h1>You’re in charge</h1>
            <p>
                Your subscription is fully <br />
                flexible—with free <br />
                cancelation at any time <br />
                and no sign-up fees.
            </p>
            <ul>
                {
                    subscriptionInfo.map((item, index) => (
                        <li key={index}>
                            <Check/>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className={styles.cards}>
            {
                MoveWay.filter((_, index) => index % 2 === 0).map((item, index) => (
                    <MoveVariant
                        key={index}
                        title={item.title}
                        photo={item.image}
                        price={item.price}
                        type={item.type}
                    />
                ))
            
            }
        </div>
    </motion.section>
  )
}

export default SubscriptionSection