import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';

const NavBarStc = styled(Nav)`
    
  //background-color: ${(props) => props.bg || "#fff"};
  width: ${(props) => props.largeur || "100%"};
  height: ${(props) => props.hauteur || "80%"};
  display: flex;
  align-items: center;
  
  //flex-grow: 1;


  .nav-text {
    width: 100%!important;
    display: inline-flex;
    //justify-content: space-around!important;
    padding-left: 4rem;
  }

  .nav-text a.nav-link{
    display: block;
    color: #000;
    background: #f0f0f0;
    font-size: 500;
    letter-spacing: 1px;
    padding: 2px 15px;
    border-radius: 0.8rem;
    margin-left: .4rem;
    transition: .3s;
    transition-property: transform;
    overflow: hidden;
}

.nav-text{}

.nav-text a.nav-link:hover{
    background: #fff;
    transition: .4s;
}

@media (max-width: 1020px){
    .nav-text {
        display: none;
    }

}


`;
export default NavBarStc;