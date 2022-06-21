import { useState, useEffect } from 'react'
import { Container, Modal, Content, SidePanel, Blogs } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { getUserBlogs } from '@redux/actions/blogAction'
import { logout } from '@redux/actions/userAction'
import Router from 'next/router'
import useAuth from '@hooks/useAuth'

export default function Profile() {
    const dispatch = useDispatch()
    const userInfoData = useSelector((state) => state.userInfo)
    const blogInfoData = useSelector((state) => state.blogInfo)
    const { id } = userInfoData?.userInfo
    const { loading, blogInfo, blogs } = blogInfoData
    const [showModal, setShowModal] = useState(false)
    const [isAuthenticated] = useAuth()

    const createBlog = () => {
        dispatch(
            getUserBlogs({
                id
            })
        )
    }

    const logoutUser = () => {
        dispatch(logout())
    }

    useEffect(() => {
        if (id) {
            createBlog()
        }
    }, [id])

    useEffect(() => {
        if (!isAuthenticated) {
            Router.push('/login')
        }
    }, [isAuthenticated])

    return (
        <Container>
            <Content>
                <SidePanel
                    changeShowModal={() => {
                        setShowModal(!showModal)
                    }}
                    logoutUser={() => {
                        logoutUser()
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
