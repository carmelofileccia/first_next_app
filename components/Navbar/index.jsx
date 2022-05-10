import Link from "next/link";
import Image from 'next/image'
import logo from "../../public/logo.png"
import styles from "./index.module.scss";


const Navbar = () => {
    return (
        <div className={styles.header}>
            <ul>
                {/* <a className={styles.header__link}>
                <Image 
                alt="Logo"
                src={logo}
                width={30}
                height={30}
                />
                </a> */}
                <span className={styles.header__title}>FNA</span>
                <Link  href="/"><a className={styles.header__link}>Home__</a></Link>
                <Link  href="/prodotti"><a className={styles.header__link}>Prodotti__</a></Link>
                <Link  href="/contatti"><a className={styles.header__link}>Contatti__</a></Link>

            </ul>
        </div>
    )
}

export default Navbar;