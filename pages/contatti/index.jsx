
import Image from 'next/image';
import contatti from "../../public/contatti.jpeg";
import gradient from "../../public/gradient.jpg";
import styles from "./index.module.scss";


export default function Contatti () {

    return (
        <>
        <div className={styles.hero}>
          <Image 
              alt="Hero"
              src={gradient}  
          />
         
          <h1 className={styles.title}>
            Contattaci
          </h1>
        </div> 
        <div className={styles.contatti}>
            <h4 className={styles.contatti__subtitle}>Hai necessità di informazioni? Non esistare a contattarci.</h4>
            <div className={styles.contatti__wrapAdd}>
                
                <h3 className={styles.contatti__address}>📱 Tel: 345 2223344</h3>
                <h3 className={styles.contatti__address}>📮 Email: info@firstnextapp.it </h3>
                <h3 className={styles.contatti__address}>📍 Via Prova, 25 - Palermo</h3>
            
            </div>

        </div>
        </>
    )

}