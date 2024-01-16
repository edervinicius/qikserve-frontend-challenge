import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #4f372f;
  color: #fff;
.menu {
  height: 52px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 232px;
    color: #fff;
    text-align: center;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.1px;
    text-transform: uppercase;
  }
}

.banner {
  height: 150px;
  width: 100%;
  background: #4f372f url("../../../../assets/images/header.png") no-repeat
    center;
  background-size: cover;
}

`