import styled from "styled-components";

export const StyledHeader = styled.div<{ $navBackgroundColour: string; $bannerImage: string }>`
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${props => props.$navBackgroundColour};
  color: #fff;
  .menuMobile {
    height: 64px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.16);
    padding: 14px 16px;
    display: flex;
    align-items:center;
    justify-content: center;
    .item {
      color: #FFF;
      text-align: center;
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 0.75px; 
    }
    .menuIcon {
      position:absolute ;
      right: 16px;
      top: 24px;
      cursor: pointer;
    }
  }
  .menu {
    height: 52px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.16);
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      height: 100%;
      width: 232px;
      span{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        color: #fff;
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 0.1px;
        text-transform: uppercase;
        border-bottom: solid 5px transparent;
        &.selected{
          border-color: #fff;
        }
        &:hover{
          opacity: .8;
        }
      }
    }
  }

.banner {
  height: 150px;
  width: 100%;
  background: ${props => props.$navBackgroundColour} url(${props => props.$bannerImage}) no-repeat
    center;
  background-size: cover;
}

`