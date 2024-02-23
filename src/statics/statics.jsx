//나의 도전 현황 페이지
import Nav from '../components/Nav';
import React from 'react';
import back from '../img/backarrow.svg';
import styled from 'styled-components';
import { useState } from 'react';
import line from '../img/Line11.svg';
import human from '../img/human.png';


const HeaderContainer = styled.div`
    display: flex;
    padding-top:1.56rem;
    gap: 4.43rem;
`;

const Arrow=styled.img`
    margin-left: 1rem;
`;


const Header = styled.div`
color: #000;
text-align: center;
font-family: Inter;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

const Div=styled.div`
    height: 3.27rem;
    border-radius: 1.1875rem;
    background: #31383F;
    margin-top: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

const DivContainer=styled.div`
    padding-left:1.37rem;
    padding-right:1.37rem;
`;

const Line1 = styled.div`
color: #DD8EA4;
font-family: Inter;
font-size: 0.75rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

const Date = styled.div`
color: #DD8EA4;
text-align: center;
font-family: Inter;
font-size: 1.5rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const Line=styled.img`
    width: 1.5rem;
`;

const ThisMonthContainer=styled.div`
    display:flex;
    gap: 12rem;
    padding-left: 2rem;
    margin-top:2rem;
`;

const ThisMonthTitle=styled.div`
    color: #000;

text-align: center;
font-family: Inter;
font-size: 0.75rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

const PageArrow=styled.div`
    display:flex;
    color: #000;
text-align: right;
font-family: Inter;
font-size: 0.75rem;
font-style: normal;
font-weight: 700;
line-height: normal;
gap:0.2rem;
`;

const Left=styled.div``;

const Right=styled.div``;

const Hr=styled.hr`
    margin: 0 auto;
    width: 100%;
    border-color: #D9D9D9;
    margin-top:0.63rem;
`;

const Percent=styled.div`    
    color: #CA3039;
    text-align: center;
    font-family: Inter;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top:2rem;
`;

const Success=styled.div`    
color: #CA3039;
text-align: center;
font-family: Inter;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const Circle=styled.div`
width: 1.09375rem;
height: 1.09375rem;
flex-shrink: 0;
border-radius: 0.9375rem;
background: #F08484;
`;

const Circle2=styled.div`
width: 1.09375rem;
height: 1.09375rem;
flex-shrink: 0;
border-radius: 0.9375rem;
background: #A3A6F2;
`;

const Circle3=styled.div`
width: 1.09375rem;
height: 1.09375rem;
flex-shrink: 0;
border-radius: 0.9375rem;
background: #D2D2D2;
`;

const CircleContainer=styled.div`
display:flex;
flex-direction: row;
padding-left: 1.66rem;
padding-right: 1.66rem;
justify-content: space-between;
`;

const Day=styled.div`
color: #000;
text-align: right;
font-family: Inter;
font-size: 0.625rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
const DayContainer=styled.div`
display:flex;
flex-direction: row;
padding-left: 1.9rem;
padding-right: 1.9rem;
justify-content: space-between;
margin-bottom : 0.38rem;
`;
const Graph1=styled.div`
width: 0.7rem;
height: 5.68888rem;
background: #F08484;
`;
const Graph2=styled.div`
width: 0.7rem;
height: 4.5625rem;
background: #BBBEFC;
position: absolute;
bottom:0;
left: 4.7rem;
`;
const GraphContainer=styled.div`
position : relative;
display:flex;
flex-direction: row;
padding-left: 1.9rem;
padding-right: 1.9rem;
justify-content: space-between;
margin-bottom : 0.38rem;
margin-top : 3rem;
`;
const Img=styled.img`
width: 5.25rem;
height: 5.25rem;
flex-shrink: 0;
`;
const ImgContainer=styled.div`
display:flex;
justify-content:center;
margin-top:2.81rem;
margin-bottom:4.31rem;
`;

const Statics = () => {
    const [user, setUser]= useState("제준");
    const [date, setDate]= useState(2);

    return (
    <>
        <HeaderContainer>
            <Arrow src={back} alt="back"/>
            <Header>나의 도전 현황</Header>
        </HeaderContainer>
        <ImgContainer><Img src={human}></Img></ImgContainer>
        <DivContainer>
            <Div>
                <Line1>{user} 님이 휴윗과 함께한 시간</Line1>
                <Line src={line}></Line>
                <Date>{date}일</Date>
            </Div>
        </DivContainer>

        <ThisMonthContainer>
            <ThisMonthTitle>이번달 현황</ThisMonthTitle>
            <PageArrow>
                <Left>&#60;</Left>
                <Right>&#62;</Right>
            </PageArrow>
        </ThisMonthContainer>
        <Hr/>
        <Percent>70%</Percent>
        <Success>35/44</Success>

        <GraphContainer>
            <Graph1></Graph1>
            <Graph2></Graph2>
        </GraphContainer>

        <DayContainer>
            <Day>월</Day>
            <Day>화</Day>
            <Day>수</Day>
            <Day>목</Day>
            <Day>금</Day>
            <Day>토</Day>
            <Day>일</Day>
        </DayContainer>
        <CircleContainer>
        <Circle></Circle>
        <Circle2></Circle2>
        <Circle3></Circle3>
        <Circle3></Circle3>
        <Circle3></Circle3>
        <Circle3></Circle3>
        <Circle3></Circle3>
        </CircleContainer>

        <Nav/>
    </>
    );
};

export default Statics;