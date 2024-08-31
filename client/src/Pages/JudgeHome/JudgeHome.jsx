import styles from "./JudgeHome.module.css";
import logo from "../../assets/logo.png";

const JudgeHome = () => {
    return ( 
        <div className={styles.main}>
        <div className={styles.header}>
        <div>
          <img src={logo} alt="" />
          <p>Justice, Simplified</p>
        </div>

        <button>Login</button>
      </div>
        </div>
     );
}
 
export default JudgeHome;