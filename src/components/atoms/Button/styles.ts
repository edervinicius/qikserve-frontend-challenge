import styled from "styled-components";

export const StyledButton = styled.button<{ $primaryColour?: string; $primaryColourHover: string }>`
  display: flex;
  cursor: pointer;
  height: 48px;
  padding: 4px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border: none;
  border-radius: 40px;
  background-color: ${props => props.$primaryColour };
  color: #fff;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.75px; 
  &:hover {
    background-color: ${props => props.$primaryColourHover };
  }
  &.fullwidth {
    width: 100%;
  }
`