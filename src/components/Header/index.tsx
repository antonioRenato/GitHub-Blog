import { HeaderContainer, LogoImage, SideImages } from "./styles";
import logo from '../../assets/logo.svg'
import imageRigth from '../../assets/headerRigth.svg'
import imageLeft from '../../assets/headerLeft.svg'


export function Header() {
  return (
    <HeaderContainer>
      <SideImages>
        <img src={imageLeft} alt="" />
        <LogoImage>
          <img src={logo} alt="" />
        </LogoImage>  
        <img src={imageRigth} alt="" />
      </SideImages>         
    </HeaderContainer>
  )
}