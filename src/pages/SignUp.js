import React from 'react';
import Cbutton from "../components/Cbutton"
import Mbutton from "../components/Mbutton"
import "../css/Prologue.css"
import { Link } from 'react-router-dom';
import styled from "styled-components";
import human from '../img/human.png';

const StyledLink = styled(Link)`
    text-decoration: none; 
    color: inherit;
    cursor: pointer;
`;

const ImgContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    \
    margin-bottom: 3rem;
    
`;

const Img=styled.img`
width: 5.25rem;
    height: 5.25rem;
`;


const SignUp = () => {
    return (
        <div className='signup_container'>
            <div className='signup_content'>
                <div className='signup_title'>가입하기</div>
                <ImgContainer><Img src={human}/></ImgContainer>
                <form>
                    <input type="text" placeholder='이름'/><br/>
                    <input type="text" placeholder='이메일'/><br/>
                    <input type="password" placeholder='패스워드'/>
                    <input type="text" placeholder='한줄소개' id="intro"/><br/>

                    <Mbutton color={'#000'}><StyledLink to='/'>가입하기</StyledLink></Mbutton>
                </form>
                
            </div>
        </div>
    );
};

export default SignUp;