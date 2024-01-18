import styled from "styled-components";

export const Main = styled.div`
  background: #f8f9fa;
  padding: 32px 40px;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  @media (max-width: 800px) {    
    background: #fff;
    padding: 0;
    flex-direction: column;
  }
`