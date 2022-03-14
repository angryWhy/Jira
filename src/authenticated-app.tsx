import { Button } from 'antd';
import { useAuth } from './context/auth-context';
import ProjectList from './screens/project-list';
import styled from '@emotion/styled';
import { Row } from './components/lib';
import {ReactComponent as Software} from './assets/software-logo.svg'

export const  Authenticated = () =>{
    const {logout} = useAuth()
    return (<Container>
        <Header>
        <HeaderLeft gap={true}>
            <Software width="18rem"></Software>
            <HeaderItem>12312312</HeaderItem>
        </HeaderLeft>
        <HeaderRight>
        <Button onClick={logout} type="link">登出</Button>
        </HeaderRight>
        </Header>
        <Nav>nav</Nav>
        <Main>
        <ProjectList/>
        </Main>
        <Aside>aside</Aside>
        <Footer>footer </Footer>
    </Container>)
}

const Container = styled.div`
display: grid;
grid-template-rows:6rem 1fr 6rem;
//左右两列rem，中间随缘
grid-template-columns: 20rem 1fr 20rem;
grid-template-areas: 
"header header header"
"nav main aside"
"footer footer footer"
;
height: 110vh;
`
const Header = styled.header`
padding: 3.2rem;
box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
z-index: 1;
 grid-area: header;
display: flex;
//默认为row
flex-direction: row;
align-items: center;
justify-content: space-between; 
`
const HeaderLeft = styled(Row)`
display: flex;
align-items: center;
`
const HeaderItem = styled.h3`
margin-right:3rem ;

`
const HeaderRight = styled.div`
`
const Main = styled.main`
grid-area: main;
`
const Nav =styled.nav`
grid-area: nav;
`

const Aside = styled.aside`
grid-area: aside;
`
const Footer = styled.footer`
grid-area: footer;
`