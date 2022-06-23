import React, { useEffect } from 'react'
import { Container, Content, Header, BlogCard } from './component'
import { getAllBlogs } from '@redux/actions/blogAction'
import { useDispatch, useSelector } from 'react-redux'

const Blogs = () => {
    const dispatch = useDispatch()
    const blogInfoData = useSelector((state) => state.blogInfo)
    const { blogList } = blogInfoData

    useEffect(() => {
        dispatch(getAllBlogs())
    }, [])

    return (
        <Container>
            <Header />
            <Content>
                <BlogCard blogList={blogList} />
            </Content>
        </Container>
    )
}

export default Blogs
