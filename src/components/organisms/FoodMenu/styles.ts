import styled from "styled-components";

export const StyledFoodMenu = styled.div<{ $primaryColour?: string;}>`
background: #fff;
padding-bottom: 24px;
width: 100%;
box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.14);
.categories {
    padding: 16px 20px;
    display: flex;
    gap: 12px;
    .category {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      width: 104px;
      min-height: 146px;
      position: relative;
      justify-content: space-between;
      align-items: center;
      .photo {
        display: flex;
        padding: 2px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        height: 82px;
        width: 82px;
        border-radius: 50%;
        border: none;
        background: #fff;
        border: 2px solid transparent;
        img {
          border-radius: 50%;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
      .name {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px 0 10px;        
        > span {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 38px;
          color: #121212;
          font-feature-settings: "clig" off, "liga" off;
          font-size: 16px;
          letter-spacing: 0.5px;
        }
      }
      &.selected {
        .photo {
          border: 2px solid ${props => props.$primaryColour };
        }
        .name {
          > span {
            font-weight: 600;
          }
        }
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          display: block;
          margin: 0 auto;
          width: 96px;
          height: 2px;
          background: ${props => props.$primaryColour };
        }
      }
    }
  }
  .itemsArea {
    .itemsGroup {

      &.closed{
        .itemHeader {
          .option {
            transform: rotate(180deg);
          }
        }
        .itemList {
          display: none;
        }
      }
      .itemHeader {        
        display: flex;
        justify-content: space-between;
        align-items:center;
        width: 100%;
        padding: 32px 16px 12px;
        .title{
          color: #121212;
          font-feature-settings: "clig" off, "liga" off;
          font-size: 24px;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
        .option{
          transition: transform 0.3s ease; 
          > * {
            cursor: pointer;
          }
        }
      }
      .itemList {
        .item {
          padding: 16px;
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-self: stretch;
          .photo {
            width: 128px;
            height: 85px;
            border-radius: 4px;
            background: #464646;
            img {
              object-fit: cover;
              width: 100%;
              height: 100%;
              border-radius: 4px;
            }
          }
          .info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
            flex: 1 0 0;
            align-self: stretch;
            .name {
              color: #121212;
              font-feature-settings: "clig" off, "liga" off;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 8px; 
              .modifier {
                color: #FFF;
                text-align: center;
                font-feature-settings: 'clig' off, 'liga' off;
                font-size: 14px;
                font-weight: 500;
                border-radius: 4px;
                background: ${props => props.$primaryColour };
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px; 
                width: 18px;
                height: 18px;
                padding: 1px 4px;
              }
            }
            .description {
              color: #464646;
              font-feature-settings: "clig" off, "liga" off;
              font-size: 16px;
              font-style: normal;
              font-weight: 300;
            }
            .price {
              color: #464646;
              font-feature-settings: "clig" off, "liga" off;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              letter-spacing: 0.5px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    box-shadow: none
  }
`