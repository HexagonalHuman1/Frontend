import React from 'react';
import '../css/MyPage.css';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Nav from '../components/Nav';
import human from '../img/human.png';

const ImgContainer = styled.div`
    margin-right:15px;
`;

const Img = styled.img`
    width: 90px;
    height: 90px;
`;

const StyledLink = styled(Link)`
    text-decoration: none; 
    color: inherit;
    cursor: pointer;
`;

const MyPage = () => {
    return (
        <div className='mypage_container'>
            <div className='profile'>
                <ImgContainer>
                    <Img src={human} />
                </ImgContainer>
                <div className='profile_content'>
                    <div>
                        <p><span className='profile_name'>제준</span><br/>
                        <span className='profile_email'>33.beautifulboy@gmail.com</span><br/>
                        <span className='profile_info'>안녕하세요</span></p>
                    </div>
            </div>
        </div>
        <div className='mypage_menu'>
            <div className='mypage_menutitle'>설정</div>
            <ul className='mypage_menuname'>
                <li><StyledLink to="/profile">계정</StyledLink></li>
                <li>알림설정</li>
                <li>공지사항</li>
                <li>문의하기</li>
                <li>친구초대</li>
                <li>버전정보</li>
                <li>만든이들</li>
                <hr/>
                <li>로그아웃</li>
            </ul>
        </div>
        <Nav/>
        </div>
    );
};

export default MyPage;