import { LogoWrapper } from './components'
import { ArrowRight } from 'react-feather';
import styles from "./index.module.css";

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <LogoWrapper />
                <button className={styles.btnWrapper}>
                    <span className={styles.btnTitle}>Hadi Başlayalım</span>
                    <ArrowRight />
                </button>
            </div>
        </div>
    )
}
