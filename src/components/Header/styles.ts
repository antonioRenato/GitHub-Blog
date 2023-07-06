import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background: linear-gradient(180deg, ${props => props.theme["base-profile"]} 25%, ${props => props.theme.blue} 550%);
  padding: 1.5rem;
  height: 18.75rem;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;  
`
