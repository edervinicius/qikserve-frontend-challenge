import styled from "styled-components";

export const StyledCart = styled.div`
  width: 320px;
  .wrapper{
    background: #F8F9FA; 
    box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.15);
    .header{
      background: #F8F9FA;
      color: #464646;
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 24px;
      font-weight: 500;
      letter-spacing: 0.5px; 
      height: 64px;
      padding: 16px 24px; 
      display: flex;
      height: 64px;
      padding: 16px 24px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      align-self: stretch; 
    }
    .content{
      background: #fff;
      .message{
        color: #464646;
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 16px;
        font-weight: 400;
        padding: 24px;
      }
      .items {
          padding: 8px 0;
        .item {
          width: 100%;
          padding: 8px 16px;
          display: flex;
          justify-content: space-between;
          gap: 10px;
          align-self: stretch; 
          .info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
            align-self: stretch;
            h3 {
              color: #121212;
              font-size: 16px;
            }
            p {
              color: #5F5F5F;
              font-size: 16px;
            }
            .price {
              color: #121212;
              text-align: right;
              font-feature-settings: 'clig' off, 'liga' off;
              font-size: 16px;
              font-weight: 500;
              letter-spacing: 0.5px; 
              min-width: 30px;
            }
            .qtyWrapper {
                display: flex;
                width: 94px;
                padding: 8px;
                gap: 16px; 
                .button{
                    cursor: pointer;
                    &.disabled {
                        cursor: unset;
                    }
                }
            }
          }
        }
      }
    }
    .footer {
      text-align: left;
      .subtotal {
        display: flex;
        height: 30px;
        padding: 16px;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        h3 {
          color:#121212;
          font-feature-settings: 'clig' off, 'liga' off;
          font-size: 16px;
          font-weight: 400;
        }
        h4 {
          color: #121212;
          text-align: right;
          font-feature-settings: 'clig' off, 'liga' off;
          font-size: 16px;
          font-weight: 500;
        }
      }
      .total {
        display: flex;
        padding: 16px;
        justify-content: space-between;
        align-items: center;
        gap: 24px;
        align-self: stretch;
        h3 {
          color: #121212;
          font-family: 'SF Pro Display', sans-serif;
          font-size: 24px;
          font-weight: 300;
        }
        h4 {
          color: #121212;
          text-align: right;
          font-family: 'SF Pro Display', sans-serif;
          font-size: 24px;
          font-weight: 700;
        }
      }
      .checkout{
        display: flex;
        padding: 16px;
        justify-content: space-between;
        align-items: center;
        gap: 24px;
        align-self: stretch;
      }
    }
  }
`