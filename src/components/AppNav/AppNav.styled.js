import { styled } from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  align-self: center;
  gap: 20px;
  width: 690px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85px;
    height: 35px;
    background-color: white;
    border-radius: 10px;
    color: rgba(11, 68, 205, 1);

    &:hover,
    &:active,
    &:focus {
      color: white;
      background-color: red;
    }
  }
`;
