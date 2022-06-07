import styles from './side-panel.module.css'

export default function SidePanel() {
    return (
        <div className={styles.container}>
            <div className={styles.imgWrapper}>
                <img className={styles.userImg} src='/user.png' />
            </div>
            <div className={styles.infoWrapper}>
                <span className={styles.userName}>Osman Abi</span>
                <div className={styles.groupWrapper}>
                    <span className={styles.dot} />
                    <span className={styles.groupTitle}>Bloglarim</span>
                </div>
                <div className={styles.groupWrapper}>
                    <span className={styles.dot} />
                    <span className={styles.groupTitle}>Kaydettiklerim</span>
                </div>
                <div className={styles.groupWrapper}>
                    <span className={styles.dot} />
                    <span className={styles.groupTitle}>Yorumlarim</span>
                </div>
            </div>
        </div>
    )
}