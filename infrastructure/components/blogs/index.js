import React                from 'react'
import { 
    Container, 
    Content,
    Header,
    BlogCard
}                           from './component'


const Blogs = () => {
    return (
        <Container>
            <Header />
            <Content>
                <BlogCard />
            </Content>
        </Container>
    )
}

export default Blogs; 
