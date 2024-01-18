import styled from "styled-components"

export const StyledPage= styled.div`
  .content {
    border-top: #fff solid 5px;
    .container {
      max-width: 1024px;
      margin: 0 auto;
      .searchArea {
        padding: 4px 0;
      }
    }
  }
  @media (max-width: 800px) {
    .content {
      border-top: none;
      background: #fff; 
      .container { 
        .searchArea {
          padding: 16px;
        }
      }
    }
  }
`