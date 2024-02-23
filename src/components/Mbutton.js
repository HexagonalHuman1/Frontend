import React from "react";
import styled, {css} from "styled-components";

const StyledButton = styled.button`
    width: 254px;
    height: 35px;
    border-radius :15px;
    border: none;
    outline: none;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
    font-family: "source-han-sans-korean", sans-serif;

  color: ${(props) => props.color || "#31383F"};
  background: ${(props) => props.background || "#DD8EA4"};
`;

function MButton({ children, color, background }) {
  return (
    <StyledButton color={color} background={background} Î>
      {children}
    </StyledButton>
  );
}

export default MButton;
