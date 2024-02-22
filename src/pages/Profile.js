import React from 'react';
import Mbutton from "../components/Mbutton"
import "../css/MyPage.css";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import human from '../img/human.png';

const ImgContainer = styled.div`
    margin-bottom:20px;
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

const Profile = () => {
    return (
        <div className='profile_container'>
            <div className='profile_title'>
                <div>
                    <StyledLink to="/mypage"><img src="img/logouticon.png" className='logoutpng'/></StyledLink>
                </div>
            <div className='profile_main'>
                <div className='profile_t'>계정</div>
                <div>
                <ImgContainer>
                    <Img src={human} />
                </ImgContainer>
                </div>
                <div className='profile_name'>사용자 이름</div>
                <form className='profile_form'>
                    <div className='profile_input'>
                        <input type="text" placeholder='써놓은 한줄소개'/><br/>
                        <input type="text" placeholder='사용 중인 이메일'/><br/>
                        <input type="text" placeholder='사용 중인 패스워드'/>
                    </div>
                    <StyledLink to="/mypage"><Mbutton>저장</Mbutton></StyledLink>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Profile;