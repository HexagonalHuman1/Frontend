import React, { useState, useRef, useCallback } from 'react';
import Slider from 'react-slick';
import RecommendBtn from '../components/RecommendBtn';
import { dummy } from '../components/btnData';
import '../css/recommend.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none; 
    color: inherit;
    cursor: pointer;
`;

const Recommend = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
    };
    const [currentClick, setCurrentClick] = useState(null);
    const [clickedCount, setClickedCount] = useState(0);
    const totalButtons = 5; // 원하는 버튼의 총 개수
      
    const handleButtonClick = () => {
        setClickedCount(prevCount => prevCount + 1);
    };
    
    const handleClick = (id) => {
        setCurrentClick(id);
        console.log(id);
        const buttonsMapping = {
            '1': '2',
            '2': '1',
            '3': '4',
            '4': '3',
            '5': '6',
            '6': '5',
            '7': '8',
            '8': '7',
            '9': '10',
            '10': '9'
        };
        const targetId = buttonsMapping[id];
        if (targetId) {
            const target = document.getElementById(targetId);
            if (target) {
                target.disabled = true;
            }
        }
    };

    return (
        <div className="recommend_container">
            <div className="reTitle">
                사용자 님의 <br />
                쉼의 취향을 알아볼게요
            </div>
            <Slider {...settings}>
                {dummy.results.map((item) => (
                    <button key={item.id} id={item.id} className='buttonBox' onClick={handleButtonClick}>
                        <RecommendBtn 
                            id={item.id}
                            btnSub={item.btnSub} 
                            btnTitle={item.btnTitle} 
                            img_path={item.img_path}
                            currentClick={currentClick}
                            onClick={handleClick} />
                    </button>
                ))}
            </Slider>
            <div className='nextBtn'>
            <StyledLink to='/recommendresult'><button className="recommendBtn" disabled={clickedCount !== totalButtons}>다음</button></StyledLink>
            </div>
        </div>
    );
};

export default Recommend;
