import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background: linear-gradient(180deg, ${props => props.theme["base-profile"]} 25%, ${props => props.theme.blue} 550%);
  height: 18.75rem;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const LogoImage = styled.div`
  width: 9.25rem;
  height: 6.125rem;
  
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;
`

export const SideImages = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
