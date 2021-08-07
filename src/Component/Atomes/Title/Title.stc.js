import Styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

 const TitleStc=Styled.h1`
    font-weight: ${(props) => props.weight || "bolder"};
    text-transform: ${(props) => props.text__transform || "uppercase"};
    color: ${(props) => props.coulor || "lightyellow"}!important;
    font-size: ${(props) => props.font__size || "xx-large"};
    line-height: 60px;
    margin-bottom: 30px;

    span .be{
        color: #f7f7f7;
        width: fit-content;
        font-size: 50px;
        font-weight: 600;
    }
    
`;
export default TitleStc;