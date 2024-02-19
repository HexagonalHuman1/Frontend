import React, { useState } from 'react';
import home from '../img/homeButton.png';
import statics from '../img/statsButton.png';
import feed from '../img/feedButton.png';
import mybutton from '../img/MyButton.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <NavContainer>
            <OptionContainer>
                <NavLink to="/" active={activeIndex === 0} onClick={() => handleItemClick(0)}>홈</NavLink>
                <NavButton src={home} alt="홈" onClick={() => handleItemClick(0)} />
            </OptionContainer>
            <OptionContainer>
                <NavLink to="/" active={activeIndex === 1} onClick={() => handleItemClick(1)}>피드</NavLink>
                <NavButton src={feed} alt="피드" onClick={() => handleItemClick(1)} />
            </OptionContainer>
            <OptionContainer>
                <NavLink to="/statics" active={activeIndex === 2} onClick={() => handleItemClick(2)}>통계</NavLink>
                <NavButton src={statics} alt="통계" onClick={() => handleItemClick(2)} />
            </OptionContainer>
            <OptionContainer>
                <NavLink to="/" active={activeIndex === 3} onClick={() => handleItemClick(3)}>My</NavLink>
                <NavButton src={mybutton} alt="My" onClick={() => handleItemClick(3)} />
            </OptionContainer>
        </NavContainer>
    );
}

export default Nav;