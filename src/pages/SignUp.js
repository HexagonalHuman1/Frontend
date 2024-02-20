import React from 'react';
import Cbutton from "../components/Cbutton"
import Mbutton from "../components/Mbutton"
import "../css/Prologue.css"
import { Link } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';

const StyledLink = styled(Link)`
    text-decoration: none; 
    color: inherit;
    cursor: pointer;
`;


const SignUp = () => {
    return (
        <div className='signup_container'>
            <div className='signup_content'>
                <div className='signup_title'>가입하기</div>
                <form>
                    <input type="text" placeholder='이메일'/><br/>
                    <input type="password" placeholder='비밀번호'/>
                    <Mbutton color={'#000'}><StyledLink to='/profilesetting'>가입하기</StyledLink></Mbutton>
                </form>
                <div className='signup_sub'>
                    가입을 진행하면 휴윗의 이용약관 및 개인정보 정책에 동의하는 것으로 간주합니다.
                </div>
                <Cbutton></Cbutton>
                <div className='signup_subbtn'>소셜로 로그인하기</div>
            </div>
        </div>
    );
};

export default SignUp;