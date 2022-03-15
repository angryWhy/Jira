import { Button } from 'antd';
import { useAuth } from './context/auth-context';
import ProjectList from './screens/project-list';
import styled from '@emotion/styled';
import { Row } from './components/lib';
import {ReactComponent as Software} from './assets/software-logo.svg'
import { Navigate, Route, Routes } from 'react-router';
import { ProjectScreen } from './screens/Project';
import { BrowserRouter as Router } from 'react-router-dom';
export const  Authenticated = () =>{
    
    return (<Container>
        <PageHeader/>
        <Nav>nav</Nav>
        <Main>
        {/* <ProjectList/> */}
        <Router>
        <Routes>
            <Route path="/projects" element={<ProjectList/>}/>
            <Route path="/projects/:projectId/*" element={<ProjectScreen/>}/>
            {/* <Route path="*" element={<Navigate to={window.location.pathname + "/kanban"}/>}/> */}
        </Routes>
        </Router>
        </Main>
        <Aside>aside</Aside>
        <Footer>footer </Footer>
    </Container>)
}

const PageHeader = () =>{
    const {logout} = useAuth()
    const resetHref = () =>{
        window.location.href = window.location.origin
    }
    return(
        <Header>
        <HeaderLeft gap={true}>
            <Button type='link' onClick={e=>{resetHref()}}>
            <Software width="18rem"></Software>
            </Button>
            <HeaderItem>项目</HeaderItem>
            <HeaderItem>用户</HeaderItem>
        </HeaderLeft>
        <HeaderRight>
        <Button onClick={logout} type="link">登出</Button>
        </HeaderRight>
        </Header>
    )
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