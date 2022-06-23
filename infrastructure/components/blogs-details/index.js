import { Container, Content, Header } from './component'
import styles from './index.module.css'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

export default function BlogsDetails() {
    const blogInfoData = useSelector((state) => state.blogInfo)
    const { blogList } = blogInfoData
    const router = useRouter()
    const { asPath } = router
    const id = asPath.split('/')[2]
    const selectedBlog = blogList?.find((d) => d?.blog_id == id)

    return (
        <Container>
            <Header title={selectedBlog?.blog_title} />
            <Content>
                <h2 className={styles.subTitle}>{selectedBlog?.blog_summary}</h2>
                <p className={styles.blogContent}>{selectedBlog?.blog_content}</p>
                <div className={styles.commentWrapper}>
                    <span>Yorumlar</span>
                    <input
                        type="text"
                        placeholder="Harika bir yazi olmus..."
                        className={styles.commentInput}
                    />
                </div>
                <div className={styles.authorInfo}>
                    <span>{selectedBlog?.blog_author}</span>
                    {/* <span>Ekleme Tarihi : 1 Agustos 2020</span> */}
                </div>
            </Content>
        </Container>
    )
}
