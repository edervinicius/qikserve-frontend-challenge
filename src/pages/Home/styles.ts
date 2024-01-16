import styled from "styled-components";

export const Main = styled.div`
  background: #f8f9fa;
  padding: 32px 40px;
`

export const FoodMenu = styled.div`
.categories {
    padding: 16px 20px;
    display: flex;
    gap: 12px;
    .category {
      display: flex;
      flex-direction: column;
      width: 104px;
      min-height: 146px;
      position: relative;
      justify-content: space-between;
      align-items: center;
      .photo {
        display: flex;
        padding: 4px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        height: 74px;
        width: 74px;
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
        height: 38px;
        color: #121212;
        font-feature-settings: "clig" off, "liga" off;
        font-size: 16px;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.5px;
      }
      &.selected {
        .photo {
          border: 2px solid #4f372f;
        }
        .name {
          font-weight: 600;
        }
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          display: block;
          margin: 0 auto;
          width: 96px;
          height: 2px;
          background: #4f372f;
        }
      }
    }
  }
  .itemsArea {
    .itemsGroup {
      .itemHeader {
        color: #121212;
        font-feature-settings: "clig" off, "liga" off;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.5px;
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
`