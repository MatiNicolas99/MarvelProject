import "./nav.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = () => {
  const [color, setColor] = useState(false);
  
  const changeColor = () => {
    if(window.scrollY >= 90 ){
      setColor(true);
    }else {
      setColor(false);
    }
  }

window.addEventListener('scroll', changeColor);

  return (
    <Header className={color ? 'header header-bg': 'header'} >
      <Links to={"/"}><img src="/src/imgs/marvelLogo.png" alt="" className='logo' /></Links>
      <div className="toggle"></div>
      <ul className='navigation'>
        <li><Links className="link" to={"/"}>Inicio</Links></li>
        <li><Links className="link" to={"/Characters"}>Personajes</Links></li>
        <li><Links className="link" to={"/Comics"}>Comics</Links></li>
      </ul>
    </Header>
    
  )
};

const Header = styled.header`
  position: fixed;
  
`
const Links = styled(Link)`
background-image: linear-gradient(
  to right,
  red,
  red 50%,
  white 50%
);
background-size: 200% 100%;
background-position: -100%;
display: inline-block;
font-size: 20px;
font-weight: 100;
margin-left: 40px;
text-decoration: none;
padding: 5px 0;
position: relative;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
transition: all 0.3s ease-in-out;
}
:before{
  content: '';
  background: white;
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  transition: all 0.3s ease-in-out;
}
:hover {
  background-position: 0;
 }
:hover::before{
  width: 100%;
}
@media (max-width: 500px) {
  font-size: 12px;
  margin-left: 20px;
  margin-right: 0px;
}
`;