import React, {useState} from 'react';
import "../css/recommend.css"
import Mbutton from '../components/Mbutton';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none; 
    color: inherit;
    cursor: pointer;
`;

const RecommendResult = () => {
    const [user, setUser]= useState("제준");
    return (
        <div className='result_container'>
            <div className='result_content'>
                <div className='result_sub'>반영완료</div>
                <div className='result_title'>{user}님에게 꼭 맞는<br/>
                 쉼의 생활을 가져올게요</div>
                <div>
                    <img src="img/Result.png" />
                </div>
                <StyledLink to='/'><Mbutton>시작하기</Mbutton></StyledLink>
            </div>
        </div>
    );
};

export default RecommendResult;