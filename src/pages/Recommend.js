import React, { useState, useRef, useCallback } from 'react';
import Slider from 'react-slick';
import RecommendBtn from '../components/RecommendBtn';
import { dummy } from '../components/btnData';
import '../css/recommend.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
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
    const [clickBtn, setClickBtn] = useState(0);
    const [isCheck, setIsCheck] = useState(false);


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
                setIsCheck(true);
                let current = document.getElementById(id);
                current.style.backgroundColor = '#DD8EA4';
                current.style.color = 'white';
            }
            if(target && isCheck){
                target.disabled = false;
                setIsCheck(false);
                let current = document.getElementById(id);
                current.style.backgroundColor = '#fff';
                current.style.color = 'black';
            }
            setClickBtn(prevCount => prevCount + 1);
        }
    };
    const handleNext = () => {
        if (clickBtn >= 4) {
            window.location.href = "/recommendresult";
        } else {
            alert('모든 질문에 응답해주세요.');
        }
    };
    const [user, setUser]= useState("제준");

    return (
        <div className="recommend_container">
            <div className="reTitle">
                {user}님의 <br />
                쉼의 취향을 알아볼게요
            </div>
            <Slider {...settings}>
                {dummy.results.map((item) => (
                    <button key={item.id} id={item.id} className='buttonBox'>
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
                <button className="recommendBtn" onClick={handleNext}>다음</button>
            </div>
        </div>
    );
};

export default Recommend;
