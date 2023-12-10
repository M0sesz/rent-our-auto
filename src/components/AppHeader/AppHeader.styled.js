import { styled } from "styled-components";

export const HeaderDiv = styled.div`
  position: fixed;
  top: 5px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 1185px;
  padding: 10px;
  background-color: blue;
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 22px;

  p {
    font-weight: 800;
    font-size: 18px;
    font-style: italic;
    line-height: 28px;
    margin-left: 8px;
    color: red;

    img {
    }
  }
`;
