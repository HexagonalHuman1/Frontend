import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {Component} from 'react'
import RecommendBtn from "../components/RecommendBtn";
import { dummy } from '../components/btnData';
import "../css/recommend.css"

export default class Recommend extends Component {
    render(){
        const settings={
            dots : true,
            infinite:false,
            speed : 500,
            slidesToShow:2,
            slidesToScroll:2
        };
        return (
            <div className="recommend_container">
                <div className="reTitle">사용자 님의 <br/>
                쉼의 취향을 알아볼게요</div>
                <Slider {...settings}>
                        {dummy.results.map((item)=>{
                            return(
                                <div key={item.id}>
                                <RecommendBtn
                                    btnSub={item.btnSub}
                                    btnTitle={item.btnTitle}
                                    img_path={item.img_path}
                                />
                                </div>
                            );
                        })}
                </Slider>
            </div>
        );
    }
}