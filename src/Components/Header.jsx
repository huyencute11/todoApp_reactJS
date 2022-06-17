import styled from "styled-components";

import React from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: inherit;
    align-items: center;
  }
`;
const Content = styled.div`
  width: 100%;
  margin: 10px 0;
  font-size: 14px;
  color: #fff;
`;
const Slogan = styled.p`
  font-size: 20px;
  margin: 0;
  font-weight: 600;
  font-family: cursive;
  color: #f8fbff;
  letter-spacing: 6px;
  line-height: 30px;
  padding-top: 10px;
`;
const Time = styled.div`
  letter-spacing: 5px;
  font-size: 21px;
  font-weight: 500;
  color: #fff;

  font-family: emoji;
`;
const Header = () => {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  //get day
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[date.getDay() - 1];
  const slogans = [
    "Try to change every day, improve yourself!",
    "Learn English every day!",
    "Knowledge is limitless.",
    "Let's start making dreams come true.",
    " Why not try now",
  ];
  const random = Math.floor(Math.random() * slogans.length);
  const slogan = slogans[random];
  return (
    <Container>
      <Content>
        <Slogan>{slogan} </Slogan>
      </Content>
      <Content>
        <Time>
          {day} {date.getDate()} {month}
        </Time>
      </Content>
    </Container>
  );
};

export default Header;
