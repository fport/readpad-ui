import Link from 'next/link'
import { LogoWrapper } from './components'
import { ArrowRight } from 'react-feather';
import styles from "./index.module.css";

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <LogoWrapper />
                <Link href="/login">
                    <button className={styles.btnWrapper}>
                        <span className={styles.btnTitle}>Hadi Başlayalım</span>
                        <ArrowRight />
                    </button>
                </Link>
            </div>
        </div>
    )
}
