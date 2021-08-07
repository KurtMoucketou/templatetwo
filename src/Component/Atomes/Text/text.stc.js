import Styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";

const ParagrapheStc=Styled.p`
    color:${(props)=>props.couleur || "#000000"};
    font-size:${(props)=>props.taille || "16px"};
    margin-bottom:${(props)=>props.marge_bas || "40px"};
    font-style:${(props)=> props.style_font || "normal" };
    font-weight:${(props)=>props.poid_font || "inherit"};
`;
export default ParagrapheStc;