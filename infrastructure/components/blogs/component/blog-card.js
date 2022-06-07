import data from "./data"
import Link from "next/link"
import styles from './blog-card.module.css'

export default function BlogCard() {
    return (
        <>
            {
                data.map((d) => (
                    <div className={styles.wrapper}>
                        <div className={styles.desc}>
                            <img className={styles.blogImg} src="https://picsum.photos/200/300" />
                            <h1 className={styles.blogTitle}>{d.blog_title}</h1>
                            <p className={styles.blogDesc}>{d.blog_desc}</p>
                        </div>
                        <div className={styles.dirc}>
                            <span className={styles.readMore}>
                                <Link href="/blog/asdad">DEVAMINI OKU</Link>
                            </span>
                            <span className={styles.time}>{d.blog_time}</span>
                        </div>
                    </div>
                ))
            }
        </>
    )
}