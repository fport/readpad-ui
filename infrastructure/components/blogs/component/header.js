import styles from './header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.headerImg} src='/header.png' />
            <h1 className={styles.headerTitle}>Tüm Bloglar</h1>
        </div>
    )
}