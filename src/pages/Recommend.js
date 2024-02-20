import React, { useState } from 'react';
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
    
    const handleClick = (id) => {
        setCurrentClick(id);
        console.log(id);
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
