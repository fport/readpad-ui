import styles from './header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.headerImg} src="/header.png" />
            <span className={styles.headerTitle}>Artist Feature: Malaysia</span>
        </div>
    )
}
