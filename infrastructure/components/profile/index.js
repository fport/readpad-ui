import {
    Container,
    Content,
    SidePanel,
    Blogs
} from './components'


export default function Profile() {
    return (
        <Container>
            <Content>
                <SidePanel />
                <Blogs />
            </Content>
        </Container>
    )
}