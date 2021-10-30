import React,{useState} from 'react';
import imgUrl from './beauty.jpg'
import styled from 'styled-components'
import {NavLink}  from 'react-router-dom';
import { Button } from 'antd';


const Header = styled.header`
display:flex;
align-items:center;
background-color:#02101f;
font-size:20px;
`;

const Div=styled.h1`
display:inline-block;
color:white;
margin-left:30px;
margin-right:90px;
`
const Logo = styled.img`
width: 100px;
height: auto;
display:inline-block;
`
const StyledLink=styled(NavLink)`
color:#fff;
margin-left:60px;
&.active{
    border-bottom:1px solid white;
}
`
const StyledButton=styled(Button)`
margin-left:40px;
`


function Component (){
   const [isLogin, setIsLogin] = useState(false);
    return(
        <Header>
        <Div>Epic图床</Div>
        <Logo src={imgUrl} alt='beauty' /> 
        <nav>
            <StyledLink to="/" exact style={{textDecoration:'none'}}  activeClassName="active" > 首页</StyledLink>
            <StyledLink to="/history" style={{textDecoration:'none'}}   activeClassName="active">上传历史</StyledLink>
            <StyledLink to="/about" style={{textDecoration:'none'}}  activeClassName="active">关于我</StyledLink>
        </nav>
        <>{
        isLogin  ?<>
        Hello,My Master <StyledButton  type="primary" onClick={()=>setIsLogin(false)}> 注销 </StyledButton>
        </>:<>       
        <StyledButton  type="primary" onClick={()=>{setIsLogin(true)}}> 登录</StyledButton>
        <StyledButton  type="primary" onClick={()=>setIsLogin(true)}> 注册                   </StyledButton>
        </>
        }
        </>
        </Header>
    )
}

export default Component;

// 这里出现第一个bug，