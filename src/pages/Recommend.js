import React, { useState, useRef, useCallback } from 'react';
import Slider from 'react-slick';
import RecommendBtn from '../components/RecommendBtn';
import { dummy } from '../components/btnData';
import '../css/recommend.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Mbutton from '../components/Mbutton';
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
    const [prevClick, setPrevClick] = useState(null);
    
    const handleClick = (id) => {
        setCurrentClick(id);
        console.log(id);
        if(id=='1'){
            const target = document.getElementById('2');
            target.disabled = true;
        };
        if(id=='2'){
            const target = document.getElementById('1');
            target.disabled = true;
        };
        if(id=='3'){
            const target = document.getElementById('4');
            target.disabled = true;
        };
        if(id=='4'){
            const target = document.getElementById('3');
            target.disabled = true;
        };
        if(id=='5'){
            const target = document.getElementById('6');
            target.disabled = true;
        };
        if(id=='6'){
            const target = document.getElementById('5');
            target.disabled = true;
        };
        if(id=='7'){
            const target = document.getElementById('8');
            target.disabled = true;
        }
        if(id=='8'){
            const target = document.getElementById('7');
            target.disabled = true;
        }
        if(id=='9'){
            const target = document.getElementById('10');
            target.disabled = true;
        }
        if(id=='10'){
            const target = document.getElementById('9');
            target.disabled = true;
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
            <StyledLink to='/recommendresult'><Mbutton>다음</Mbutton></StyledLink>
            </div>
        </div>
    );
};

export default Recommend;
