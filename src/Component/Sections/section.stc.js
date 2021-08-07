import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const SectionHomeStc = styled(Container)`
    
    
    padding: 0;
    text-align: center;
    background: url('../logo.svg')no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;


    header{
        top: 0;
        position: relative;
        width: 100%;
        padding: 30px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header .main a{
        color: #000;
        background: transparent;
        font-weight: 500;
        letter-spacing: 1px;
        padding: 2px 15px;
        border-radius: 20px;
        transition-property: background;
        transition: .3s;
        width: auto;
    }
    header .main a:not(:last-child){
        margin-right: 30px;
    }
    input{
        position: sticky;
        left: 0;
        width: -webkit-fill-available;
    }

    /*.heade{
        display: inline-flex;
        align-items: baseline;
        flex-direction: row;
    }*/

    .tt{
        margin: 30px 10px;
        max-width: -webkit-fill-available;
        overflow: hidden;
        text-align: start;
    }

    .info-btn{
        color: #fff;
        background: #226A80;
        text-transform: uppercase;
        font-weight: 700;
        width: unset;
        letter-spacing: 2px;
        padding: 10px 20px;
        margin-left: .8rem;
        border-radius: 5px;
        transition-property: background;
    }
    .info-btn:hover{
        background: #0C4F60;

    }
    
    .row{
        flex-wrap: wrap;
        width: 100%;
    }
    
    .main a{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        color: black;
        text-decoration: none;
    }

    .main a:hover{
    background: #fff;
    transition: .4s;
    }

    .main{
        display: flex;
        align-content: end;
        width: -webkit-fill-available;
        margin-left: 10rem;
    }

    .logo{
    display: inline-flex;
    color: #000;
    font-size: 30px;
    background: #f0f0f0;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 0.8rem;
    text-decoration: none;
    width: auto;
}

  /*.heade{
      position: relative;
      top: 0;
      width: 100%;
      padding: 30px 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }*/

.icon{
    display: none;
}

.social-links .icons{
    height: 13px;
    margin: 20px;
    cursor: pointer;
    transition: .4s;
    transition-property: transform;
}

.social-links .icons:hover{
    transform: scale(2.1);
}

.social-links{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    font-size: 70px;
    color: #111;
}

label{
    display: none;
}

#check{
    z-index: 3;
}

@media (max-width: 1020px){
    header .main{
        display: none;
    }

    label{
        display: block;
        font-size: 25px;
        cursor: pointer; 
        color: #111;
        transition: .3s;
        transition-property: color;
        position: fixed;
        right: 0;
        margin-right: 4.9rem;
    }

    label:hover{
        color: #fff;
    }

    label .close-btn{
        display: none;
    }

    #check:checked ~ header .main{
        z-index: 2;
        display: flex;
        position: fixed;
        background: rgba(114, 223, 255, .9);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: -webkit-fill-available;
        margin: 0;
    }

    #check:checked ~ header .main a{
        font-weight: 700;
        margin-right: 0;
        margin-bottom: 50px;
        letter-spacing: 2px;
    }

    #check:checked ~ header label .btn-menu{
        display: none;
    }

    #check:checked ~ header label .close-btn{
        z-index: 2;
        display: block!important;
        position: fixed;
    }
    label .btn-menu{
        position: absolute;
    }
}

@media only screen and (max-width: 700px){
    .row{
        flex-direction: column;
    }

} 

`;
export default SectionHomeStc;