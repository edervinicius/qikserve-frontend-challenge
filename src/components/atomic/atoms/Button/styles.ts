import styled from "styled-components";

export const StyledButton = styled.button`
display: flex;
height: 48px;
padding: 4px 24px;
justify-content: center;
align-items: center;
gap: 8px;
align-self: stretch;
border: none;
border-radius: 40px;
background-color: #4f372f;
color: #fff;
&.fullwidth {
  width: 100%;
}
`