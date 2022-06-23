import Link from 'next/link'
import styles from './blog-card.module.css'

export default function BlogCard({ blogList }) {
    return (
        <>
            {blogList?.map((d) => (
                <div className={styles.wrapper}>
                    <div className={styles.desc}>
                        <img className={styles.blogImg} src="https://picsum.photos/200/300" />
                        <h1 className={styles.blogTitle}>{d.blog_title}</h1>
                        <p className={styles.blogDesc}>{d?.blog_summary}</p>
                    </div>
                    <div className={styles.dirc}>
                        <span className={styles.readMore}>
                            <Link href={`/blog/${d?.blog_id}`}>DEVAMINI OKU</Link>
                        </span>
                        {/* <span className={styles.time}>{d.blog_time}</span> */}
                    </div>
                </div>
            ))}
        </>
    )
}
