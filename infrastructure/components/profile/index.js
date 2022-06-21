import { useState, useEffect } from 'react'
import { Container, Modal, Content, SidePanel, Blogs } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { getUserBlogs } from '@redux/actions/blogAction'

export default function Profile() {
    const dispatch = useDispatch()
    const userInfoData = useSelector((state) => state.userInfo)
    const blogInfoData = useSelector((state) => state.blogInfo)
    const { id } = userInfoData?.userInfo
    const { loading, blogInfo, blogs } = blogInfoData
    const [showModal, setShowModal] = useState(false)

    const createBlog = () => {
        dispatch(
            getUserBlogs({
                id
            })
        )
    }

    useEffect(() => {
        if (id) {
            createBlog()
        }
    }, [id])

    return (
        <Container>
            <Content>
                <SidePanel
                    changeShowModal={() => {
                        setShowModal(!showModal)
                    }}
                />
                <Modal
                    changeShowModal={() => {
                        setShowModal(!showModal)
                    }}
                    showModal={showModal}
                />
                <Blogs blogs={blogs} />
            </Content>
        </Container>
    )
}
