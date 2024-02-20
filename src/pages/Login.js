import React from 'react';
import "../css/Prologue.css";
import { Link } from 'react-router-dom';
import Mbutton from '../components/Mbutton.js';
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none; 
    color: inherit;
    cursor: pointer;
`;

const Login = () => {
    return (
        <div className='login_container'>
            <div className='login_content'>
                <div className='prologue_subtitle'>당신을 위한 쉼</div>
                <div className='prologue_title'>휴윗</div>
                <form className='login_form'>
                    <input type="text" placeholder='이메일' className='email'/><br/>
                    <input type="password" placeholder='비밀번호' className='pw'/>
                    <Mbutton color={'#000'}>로그인</Mbutton>
                </form>
                <StyledLink to='/signup'><div className='login_sub'>아직 계정이 없나요?
                <span className='login_join'> 회원가입하기</span></div></StyledLink>
            </div>
        </div>
    );
};

export default Login;