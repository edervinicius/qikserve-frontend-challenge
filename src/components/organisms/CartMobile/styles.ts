import styled from "styled-components";

export const StyledCart = styled.div`
  @media (max-width: 768px) {
      height: 100vh;
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */
      width: 100%;
  }
  min-height: 80%;
  position: fixed;
  background-color: #F8F9FA;
  max-width: 480px;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 9999;
  .wrapper{
    background: #F8F9FA;  
    .header{
      background: #fff;
      color: #121212;
      font-feature-settings: 'clig' off, 'liga' off; 
      font-weight: 500; 
      height: 64px;
      padding: 16px 24px; 
      display: flex;
      height: 64px;
      padding: 16px 24px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-self: stretch;
      font-size: 18px;   
      letter-spacing: 0.75px; 
      border-bottom: 1px solid #DADADA;
      .close{
        position: absolute;
        right: 16px;
        top: 16px;
        cursor: pointer;
      }
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
          padding: 16px 0 0 0;
        .item {
          width: 100%;
          padding: 8px 16px;
          display: flex;
          justify-content: space-between;
          gap: 10px;
          align-self: stretch; 
          border-bottom: 1px solid #EEE; 
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
      .divisor{
        margin: 0 16px;
        background-color: #DADADA;
        height: 1px;
      }
      .subtotal {
        display: flex;
        height: 30px;
        margin: 16px;
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
          font-size: 24px;
          font-weight: 300;
        }
        h4 {
          color: #121212;
          text-align: right; 
          font-size: 24px;
          font-weight: 700;
        }
      } 
    }
      .checkout{
        display: flex;
        padding: 16px;
        justify-content: space-between;
        align-items: center;
        gap: 24px;
        align-self: stretch;
        position: fixed;
        z-index: 9;
        bottom: 0;
        width: 100%;
      }
  }
`

export const StyledBasket = styled.div`
  position: fixed;
  z-index: 9;
  bottom: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.30);
  backdrop-filter: blur(4px); 
  display: flex;
  padding: 8px 24px 24px 24px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;     
`