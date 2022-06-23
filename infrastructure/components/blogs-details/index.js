import { Container, Content, Header, Comment } from './component'
import styles from './index.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { create } from '@redux/actions/commentAction'
import { useDispatch, useSelector } from 'react-redux'

export default function BlogsDetails() {
    const router = useRouter()
    const { asPath } = router

    const blogInfoData = useSelector((state) => state.blogInfo)
    const { blogList } = blogInfoData

    const idx = asPath.split('/')[2]
    const selectedBlog = blogList?.find((d) => d?.blog_id == idx)

    const userInfoData = useSelector((state) => state.userInfo)
    const osman = userInfoData?.userInfo

    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const handleComment = (e) => {
        setComment(e.target.value)
    }

    const submitComment = () => {
        dispatch(
            create({
                author: osman?.userNameuserSurname,
                content: comment,
                userId: osman?.user_id,
                blogId: selectedBlog?.blog_id
            })
        )
        setComment('')
    }

    return (
        <Container>
            <Header title={selectedBlog?.blog_title} />
            <Content>
                <h2 className={styles.subTitle}>{selectedBlog?.blog_summary}</h2>
                <p className={styles.blogContent}>{selectedBlog?.blog_content}</p>
                <Comment
                    handleComment={(e) => {
                        handleComment(e)
                    }}
                    submitComment={() => submitComment()}
                    comment={comment}
                />
                <div className={styles.authorInfo}>
                    <span>{selectedBlog?.blog_author}</span>
                    {/* <span>Ekleme Tarihi : 1 Agustos 2020</span> */}
                </div>
            </Content>
        </Container>
    )
}
