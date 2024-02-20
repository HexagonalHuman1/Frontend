//나의 도전 현황 페이지
import Nav from '../components/Nav';
import React from 'react';
import back from '../img/backarrow.svg';
import styled from 'styled-components';
import { useState } from 'react';
import line from '../img/Line11.svg';


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
    border-color: #D9D9D9;
    margin-top:0.63rem;
`;

const Statics = () => {
    const [user, setUser]= useState("이름");
    const [date, setDate]= useState(0);

    return (
    <>
        <HeaderContainer>
            <Arrow src={back} alt="back"/>
            <Header>나의 도전 현황</Header>
        </HeaderContainer>

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

        <Hr></Hr>
        

        <Nav/>
    </>
    );
};

export default Statics;