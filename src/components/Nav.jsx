import React, { useState } from 'react';
import home from '../img/homeButton.png';
import statics from '../img/statsButton.png';
import feed from '../img/feedButton.png';
import mybutton from '../img/MyButton.png';
import styled from 'styled-components';
import mybuttonpink from '../img/mypink.png';
import feedpink from '../img/feedpink.png';
import staticspink from '../img/staticspink.png';
import homepink from '../img/homepink.png';
import { Link, useLocation } from 'react-router-dom';
import Main from '../main/Main';


const NavContainer = styled.div`
    width: 100%;
    height: 58px;
    background: #31383F;
    display: flex;
    position: fixed;
    bottom: 0;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 9px;
    max-width: 350px;
`;

const NavLink = styled(Link)`
    color: ${props => props.active ? '#DD8EA4' : '#FFF'};
    text-align: center;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-bottom: 3px;
    margin-top: 5px;
    text-decoration: none;
    &:hover {
        color: #DD8EA4;
    }
`;

const NavButton = styled.img`
    width: 33px;
    height: 33px;
    flex-shrink: 0;
    &:hover {
        cursor: pointer;
    }
`;

const OptionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

function Nav() {
    const [activeIndex, setActiveIndex] = useState(null);
    const location = useLocation();

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    const getIconSource = (buttonType) => {
        switch (buttonType) {
            case 'home':
                return location.pathname === '/' ? homepink : home;
            case 'feed':
                return location.pathname === '/feed' ? feedpink : feed;
            case 'statics':
                return location.pathname === '/statics' ? staticspink : statics;
            case 'mypage':
                return location.pathname === '/mypage' ? mybuttonpink : mybutton;
            default:
                return;
        }
    };

    return (
        <NavContainer>
            <OptionContainer>
                <NavLink to="/" active={location.pathname === '/'}>홈</NavLink>
                <Link to='/'><NavButton src={getIconSource('home')} alt="홈" onClick={() => setActiveIndex(0)} /></Link>
            </OptionContainer>
            <OptionContainer>
                <NavLink to="/feed" active={location.pathname === '/feed'}>피드</NavLink>
                <Link to='/feed'><NavButton src={getIconSource('feed')} alt="피드" onClick={() => setActiveIndex(1)} /></Link>
            </OptionContainer>
            <OptionContainer>
                <NavLink to="/statics" active={location.pathname === '/statics'}>통계</NavLink>
                <Link to='/statics'><NavButton src={getIconSource('statics')} alt="통계" onClick={() => setActiveIndex(2)} /></Link>
            </OptionContainer>
            <OptionContainer>
                <NavLink to="/mypage" active={location.pathname === '/mypage'}>My</NavLink>
                <Link to='/mypage'><NavButton src={getIconSource('mypage')} alt="Mypage" onClick={() => setActiveIndex(3)} /></Link>
            </OptionContainer>
        </NavContainer>
    );
}

export default Nav;