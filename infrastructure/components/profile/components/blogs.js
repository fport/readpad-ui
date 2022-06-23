import styles from './blogs.module.css'
import { useMemo } from 'react'
import { Trash, Edit } from 'react-feather'
import Link from 'next/link'

export default function Blogs({ blogs }) {
    const renderBlogs = useMemo(() => {
        return blogs?.map((blog) => (
            <div key={blog.id} className={styles.blog}>
                <>
                    <h2 className={styles.blogTitle}>{blog.blog_title}</h2>
                    <span className={styles.blogSummary}>{blog.blog_summary}</span>
                    <Link href={`/blog/${blog.blog_id}`}>
                        <button className={styles.blogButton}>Goruntule</button>
                    </Link>
                    <div className={styles.actionWrapper}>
                        <span className={styles.iconWrapper}>
                            <Trash />
                        </span>
                        <span className={styles.iconWrapper}>
                            <Edit />
                        </span>
                    </div>
                </>
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
