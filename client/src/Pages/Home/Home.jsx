import styles from './Home.module.css';
import logo from '../../assets/logo.png';
import mask from '../../assets/mask.png';
import emblem from '../../assets/emblem.png';
import { ButtonData } from '../../Data.mjs';
const Home = () => {
    return ( 
        <div className={styles.main}>
            <div className={styles.header}>
                <div>
                <img src={logo} alt="" />
                <p>
                    Justice, Simplified
                </p>
                </div>
                <div>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>FAQs</p>
                </div>
                <button>
                    Login
                </button>
            </div>
            <div className={styles.body}>
                <img src={mask} alt="" />
                <div style={{
                    flex: 0.7,
                    height:"Fit-content",
                }}>
                    <div className={styles.upper}>
                        <div>
                        <img src={logo} alt="" />
                        <h5>
                        Enhancing the bail process for 
                        efficient and equitable justice delivery.
                        </h5>
                        </div>
                        <img style={{
                            width:"100px",
                        }} src={emblem} alt="" />
                    </div>
                    <div className={styles.bottom}>
                        {ButtonData.map((item,index) => {
                            return (
                                <div key={index} className={styles.card}>
                                    <img src={item.img} alt="" />
                                    <p>{item.text}</p>
                                    <h3>{item.heading}</h3>
                                </div>
                            )
                        })}
                        <div className={styles.line}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;