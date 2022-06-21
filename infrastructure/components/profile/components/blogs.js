import styles from './blogs.module.css'
import { useMemo } from 'react'

export default function Blogs({ blogs }) {
    const renderBlogs = useMemo(() => {
        console.log('osman render')
        return blogs.map((blog) => (
            <div key={blog.id} className={styles.blog}>
                <div>
                    <h2 className={styles.blogTitle}>{blog.blog_title}</h2>
                    <span className={styles.blogSummary}>{blog.blog_summary}</span>
                    <button className={styles.blogButton}>Goruntule</button>
                </div>
            </div>
        ))
    }, [blogs])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Bloglar</h1>
            <div className={styles.blogWrapper}>{renderBlogs}</div>
        </div>
    )
}
