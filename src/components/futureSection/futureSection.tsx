import CustomButton from '../Button/CustomButton'
import styles from './futureSection.module.scss'

const FutureSection = () => {
  return (
    <section className={styles.future_section}>
        <div className={styles.future_content}>
            <h1>Your future <br /> is electric</h1>
            <p>Get your own ebike or emoped <br />with our flexible subscription</p>
            <CustomButton text='Start now' type='purple' size='large'/>
        </div>
    </section>
  )
}

export default FutureSection