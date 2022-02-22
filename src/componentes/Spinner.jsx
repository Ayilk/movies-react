import { ImSpinner8 } from 'react-icons/im';
import styles from "./Spinner.module.css";

export function Spinner(){
    return(
        <div className={styles.spinner}>
           <ImSpinner8 className={styles.spinning} size={60}/> 
        </div>
    )
}