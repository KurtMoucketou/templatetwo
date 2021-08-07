import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SectionHomeStc from './section.stc';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import NavBar from '../Atomes/NavBar';
import Title from '../Atomes/Title';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';

    
    const SectionHome = (props) => {

      return (
    <SectionHomeStc>
        <div className="container-fluid tt d-flex flex-column justify-content-space-between align-items-lg-start">
        <div className="w3-row menu w-100">
            <input type="checkbox" id="check" />
            <header className="heade">
                <h2 className="w3-col m2 logo"><a href="#home" className="logo">Logo</a></h2>
                <div className="main w3-col m10">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#info">Info</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>
                <label for="check">
                    <GiHamburgerMenu className="btn-menu" />
                    <CgClose className="close-btn" />
                </label>
            </header>
        </div>
                
            <div className="row content">
                <Title
                    coulor="#226A80"
                    text__transform="uppercase"
                    weight="800"
                    font__size="55px"
                    text={
                        <span><strong>Like Nature</strong> <span className="be">Be Creative!</span></span>
                    }
                />
            </div>
            <div className='row text'>
                <p>Use .flex-shrink-* utilities to toggle a flex item’s 
                        ability to shrink if necessary. In the example below, 
                        the second flex item with .flex-shrink-1 is forced to 
                        wrap its contents to a new line, “shrinking” to allow 
                        more space for the previous flex item with .w-100.
                        On touch-enabled devices, opening a dropdown adds empty 
                        ($.noop) mouseover handlers to the immediate children of the 
                        *body element. This admittedly ugly hack is necessary to work 
                        around a quirk in iOS/’ event delegation, which would otherwise 
                        prevent a tap anywhere outside of the dropdown from triggering 
                        the code that closes the dropdown. Once the dropdown is closed, 
                        these additional empty mouseover handlers are removed.
                </p>
                <div className="info-btn">More info</div>
            </div>
        
            <div className='row'>
                <div className='social-links'>
                    <FaFacebookF className='icons' />
                    <FaTwitter className='icons' />
                    <AiOutlineInstagram className='icons' />
                </div>
            </div> 
        </div>         
        
        </SectionHomeStc>
      );
    }
    
    export default SectionHome;