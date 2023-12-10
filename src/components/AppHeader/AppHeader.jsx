import AppNav from "../AppNav/AppNav";
import { SectionContainer } from "../../GlobalStyle";
import { HeaderDiv, LogoDiv } from "./AppHeader.styled";

export default function AppHeader() {
  return (
    <header>
      <SectionContainer>
        <HeaderDiv>
          <LogoDiv>
            <p>RENT OUR CARS</p>
          </LogoDiv>
          <AppNav />
        </HeaderDiv>
      </SectionContainer>
    </header>
  );
}
