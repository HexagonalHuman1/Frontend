import React from 'react';
import Mbutton from "../components/Mbutton";
import "../css/Prologue.css"
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none; 
    color: inherit;
    cursor: pointer;
`;

const Prologue = () => {
    return (
        <>
        <div className='prologue_container'>
            <div className='prologue_content'>
                <div className='prologue_subtitle'>당신을 위한 쉼</div>
                <div className='prologue_title'>휴윗</div>
                <img src="img/prologue_img.png" alt="메인페이지 화면" className='prologue_img'/><br/>
                <Mbutton><StyledLink to='/login'>시작하기</StyledLink></Mbutton>
            </div>
        </div>
        </>
    );
};

export default Prologue;