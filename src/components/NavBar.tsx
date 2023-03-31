import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import {Link} from "react-router-dom";
import styled from "styled-components";
import 'typeface-roboto';


const theme = {
        colors: {
            colorPrimary :`rgba(100, 100, 255, 1)`,
            colorSecondary :`rgba(150, 150, 255, 1)`,
            colorText :`rgba(255, 255, 255, 1)`,
            colorSubText:`rgba(175, 175, 175, 1)`
        }
}

//Styled Elements

//Header Container Styling

const NavBarContainer = styled.nav`
    border-radius: 25px;
    display: inline-block;
    width: 95%;
    color: ${props => theme.colors.colorPrimary};
    background-color: ${props => theme.colors.colorPrimary};
    padding: 1em;
    margin-top: 1rem;
`;

//Unordered list styling
const NavBarList = styled.ul`
    border-radius: 25px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: ${props => theme.colors.colorPrimary};
`;

//List Item styling
const NavBarListItem = styled.li`
    border-radius: 25px;
    background-color: ${props => theme.colors.colorPrimary};
    display: inline-block;
    padding: 20px;
`;

// NavBar Drop Down Menu Div
const DropDownBtn = styled.div`
    display: inline-block;
    color: ${props => theme.colors.colorText};
    font-size: 2em;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    &:hover {
        //background-color: ${props => theme.colors.colorSecondary};
        color: ${props => theme.colors.colorSubText}
    }
`;

//Drop Down Menu Item Div
const DropDownItemContainer = styled.div`
    display: none;
    position: absolute;
    border-radius: 25px;
    background-color: ${props => theme.colors.colorSecondary};
    min-width: 160px;
    //box-shadow: -4px 4px 8px 0px ${props => theme.colors.colorSubText};
    z-index: 0;
`;

const DropDownItem = styled(NavBarListItem)`
    border-radius: 25px;
    display: inline-block;
    &:hover {
        background-color: ${props => theme.colors.colorSecondary};
    }
    &:hover ${DropDownItemContainer} {
        display: block;
    }
`;

const LinkA = styled(Link)`
    border-radius: 25px;
    display: inline-block;
    align-content: center;
    color: ${props => theme.colors.colorText};
    text-align: center;
    font-size: 2em;
    padding: 14px 16px;
    text-decoration: none;
    &:hover {
        background-color: ${props => theme.colors.colorSecondary};
        color: ${props => theme.colors.colorSubText}
    }
`;

const DropLinkA = styled(Link)`
    color: ${props => theme.colors.colorText};
    padding: 12px 16px;
    font-size: 1em;
    text-decoration: none;
    display: block;
    text-align: left;
    &:hover {
        border-radius: 25px;
        background-color: ${props => theme.colors.colorSecondary};
        color: ${props => theme.colors.colorSubText}
    }
`;



const buttonLib = {
    c: NavBarContainer
}


const targetWidth = 760;

function Header() {
    

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > targetWidth);
    
    const handleScreenWidth = () => {
        setIsDesktop(window.innerWidth > targetWidth);
    }
    
    useEffect(() => {
        window.addEventListener("resize", handleScreenWidth);
        return() => window.removeEventListener("resize", handleScreenWidth);
    })

    return (
        <NavBarContainer>
            {isDesktop ? (
                <NavBarList>
                    <NavBarListItem>
                        <LinkA to={"/Home"}>Home</LinkA>
                    </NavBarListItem>
                    <NavBarListItem>
                        <LinkA to={"/About"}>About</LinkA>
                    </NavBarListItem>
                    <NavBarListItem>
                        <LinkA to={"/Projects"}>Projects</LinkA>
                    </NavBarListItem>
                    <NavBarListItem>
                        <LinkA to={"#"}>Contact Me</LinkA>
                    </NavBarListItem>
                </NavBarList> 
            )
            : 
            (
                <DropDownItem>
                <DropDownBtn>
                    Projects
                </DropDownBtn>
                <DropDownItemContainer>
                    <DropLinkA to={"/Home"}>Home</DropLinkA>
                    <DropLinkA to={"/About"}>About</DropLinkA>
                    <DropLinkA to={"/Projects"}>Projects</DropLinkA>
                    <DropLinkA to={"/ContactMe"}>Contact Me</DropLinkA>
                </DropDownItemContainer>
                </DropDownItem>
            )}
            {/*
            
            */} 
                
        </NavBarContainer>
    )
}
export default Header