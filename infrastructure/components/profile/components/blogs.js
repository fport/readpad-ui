import styles from './blogs.module.css'

export default function blogs() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Bloglar</h1>
            <img className={styles.langingBlogs} src='/blogs.png' />
            <img className={styles.langingBlogs} src='/blogs.png' />
        </div>
    )
}
