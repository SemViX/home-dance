import { ArrowRight, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.main}>
          <h1>Stay up to speed</h1>
          <p>
            Sign up to get the latest Dance offers, <br />
            updates, and tips straight to your inbox.
          </p>
          <div className={styles.input_block}>
            <input
              placeholder='your@email.de'
            />
            <div className={styles.icon}>
              <ArrowRight size={30}/>
            </div>
          </div>
          <p>
              By checking this box, you allow Dance to <br />
              collect data relating to the Dance <br />
              newsletter, including whether it has been <br /> opened and clicked through. For more <br />
              information.
          </p>
         
        </div>
        
        <div className={styles.other}>
          <h2>Menu</h2>
          <ul>
            <li>Rides</li>
            <li>Concierge</li>
            <li>For Business</li>
            <li>Start now</li>
          </ul>
        </div>

        <div className={styles.other}>
          <h2>Products</h2>
          <ul>
            <li>Ebikes</li>
            <li>Moped</li>
          </ul>
        </div>

        <div className={styles.other}>
          <h2>Company</h2>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Press</li>
            <li>FAQ</li>
            <li>Jobs</li>
          </ul>
        </div>

        <div className={styles.other}>
          <h2>Legal</h2>
          <ul>
            <li>Privacy</li>
            <li>Imprint</li>
            <li>Cancel subscription</li>
          </ul>
        </div>
       
      </div>
      <div className={styles.socials}>
        <div>
          <a href="#"><Instagram size={30}/></a>
          <a href="#"><Facebook size={30}/></a>
          <a href="#"><Twitter size={30}/></a>
          <a href="#"><Youtube size={30}/></a>
        </div>  
      </div>
    </footer>
  )
}

export default Footer