import React from "react";
import styled, {css} from "styled-components";

const StyledButton = styled.button`
    background-image:url('img/chrome.png');
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 3px solid #FFF;
    background-size: cover;
    background-position: center;
`

function CButton({ }) {
    return (
      <StyledButton>
      </StyledButton>
    );
  }

  export default CButton;