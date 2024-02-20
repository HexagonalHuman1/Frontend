import React, { useState } from 'react';
import axios from 'axios';
import Cbutton from '../components/Cbutton';
import Mbutton from '../components/Mbutton';
import '../css/Prologue.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import human from '../img/human.png';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    cursor: pointer;
`;

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
`;

const Img = styled.img`
    width: 5.25rem;
    height: 5.25rem;
`;

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [introduce, setIntroduce] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://13.209.74.21:8080/api/v1/member/join', {
        email,
        password,
        name,
        introduce,
        });

        if (response.data.isSuccess) {
        console.log('가입 성공');
        } else {
        console.log('가입 실패');
        }
    } catch (error) {
        console.error('가입 중 오류 발생: ', error);
    }
    };

    return (
    <div className="signup_container">
        <div className="signup_content">
        <div className="signup_title">가입하기</div>
        <ImgContainer>
            <Img src={human} />
        </ImgContainer>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
            type="text"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
            type="password"
            placeholder="패스워드"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <input
            type="text"
            placeholder="한줄소개"
            value={introduce}
            onChange={(e) => setIntroduce(e.target.value)}
            id="intro"
            />
            <br />
            <Mbutton type="submit" color={'#000'}>
            <StyledLink to="/recommend">가입하기</StyledLink>
            </Mbutton>
        </form>
        </div>
    </div>
    );
};

export default SignUp;
