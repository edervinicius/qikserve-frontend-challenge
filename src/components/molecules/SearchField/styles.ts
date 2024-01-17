import styled from "styled-components";

export const StyledSearchField = styled.div`
  border-radius: 8px;
  border: 1px solid #8a94a4;
  background: #fff;
  display: flex;
  height: 44px;
  .searchLabel {
    display: block;
    padding: 10px 12px;
    height: 24px;
  }
  #searchField {
    border: none;
    background: none;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
`