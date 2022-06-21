import React from 'react'
import { Container, Modal, Content, SidePanel, Blogs } from './components'

export default function Profile() {
    const [showModal, setShowModal] = React.useState(false)

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
                <Blogs />
            </Content>
        </Container>
    )
}
