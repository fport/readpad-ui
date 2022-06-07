import styles from './index.module.css'

export default function Landing() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.landingHeader}>
                    <h1 className={styles.title}>Blog’un Yeni Dünyasına</h1>
                    <h1 className={styles.titleWelcome}>Hoşgeldiniz!</h1>
                    <span className={styles.desc}>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</span>
                </div>
                <img className={styles.langingBlogs} src='/blogs.png' />
                <img className={styles.langingBlogs} src='/blogs.png' />
            </div>
        </div>
    )
}
