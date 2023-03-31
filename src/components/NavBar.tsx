import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import {Link} from "react-router-dom";
import styled from "styled-components";
import 'typeface-roboto';
import {theme, SubTitleText} from '../assets/theme'




//Styled Elements

//Header Container Styling

const NavBarContainer = styled.nav`
    border-radius: 25px;
    border-top-right-radius: 25px;
    margin-top: 2rem;
    width: 100%;
    background-color: ${theme.colors.colorPrimary};
`;

const NavBarListContainer = styled.div`
  display: flex;
  justify-content: center;
`;
//Unordered list styling
const NavBarList = styled.ul`
    border-radius: 25px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: ${theme.colors.colorPrimary};
    text-align: center;
`;

//List Item styling
const NavBarListItem = styled.li`
    float: left;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background-color: ${theme.colors.colorPrimary};
    display: inline=block;
    padding: 10px;
    margin-right: 10px;
`;

// NavBar Drop Down Menu Div
const DropDownBtn = styled.div`
    color: ${theme.colors.colorText};
    font-size: 1.5em;
    padding: 12px 12px;
    text-align: center;
    text-decoration: none;
    &:hover {
        //background-color: ${theme.colors.colorSecondary};
        color: ${props => theme.colors.colorSubText}
    }
`;

//Drop Down Menu Item Div
const DropDownItemContainer = styled.div`
    display: none;
    align-self: center;
    border-radius: 25px;
    background-color: ${props => theme.colors.colorSecondary};
    min-width: 120px;
    //box-shadow: -4px 4px 8px 0px ${props => theme.colors.colorSubText};
    z-index: 0;
`;

const DropDownItem = styled(NavBarListItem)`
    width: 100%;
    padding: 1rem 0rem;
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
    font-size: 1.5em;
    padding: 14px 16px;
    text-decoration: none;
    &:hover {
        background-color: ${props => theme.colors.colorSecondary};
        color: ${props => theme.colors.colorSubText}
    }
`;

const DropLinkA = styled(Link)`
    color: ${props => theme.colors.colorText};
    padding: 12px 12px;
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

const HamburgerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M2.999 6h18v2h-18v-2zm0 7h18v2h-18v-2zm0 7h18v2h-18v-2z" />
    </svg>
  );

const CloseIcon = () => (
    <svg viewBox="0 0 20 20">
        <line x1="0" y1="0" x2="20" y2="20" stroke="black" strokeWidth="2" />
        <line x1="0" y1="20" x2="20" y2="0" stroke="black" strokeWidth="2" />
      </svg>
)



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
                <NavBarListContainer>
                <NavBarList>
                    <NavBarListItem>
                        <LinkA to={"/Home"}><SubTitleText>Home</SubTitleText></LinkA>
                    </NavBarListItem>
                    <NavBarListItem>
                        <LinkA to={"/Projects"}><SubTitleText>Projects</SubTitleText></LinkA>
                    </NavBarListItem>
                    <NavBarListItem>
                        <LinkA to={"/Contact"}><SubTitleText>Contact Me</SubTitleText></LinkA>
                    </NavBarListItem>
                </NavBarList> 
                </NavBarListContainer>
            )
            : 
            (
                <DropDownItem>
                <DropDownBtn>
                    <HamburgerIcon></HamburgerIcon>
                </DropDownBtn>
                <DropDownItemContainer>
                    <DropLinkA to={"/Home"}><SubTitleText>Home</SubTitleText></DropLinkA>
                    <DropLinkA to={"/Projects"}><SubTitleText>Projects</SubTitleText></DropLinkA>
                    <DropLinkA to={"/Contact"}><SubTitleText>Contact Me</SubTitleText></DropLinkA>
                </DropDownItemContainer>
                </DropDownItem>
            )}
            {/*
            
            */} 
                
        </NavBarContainer>
    )
}
export default Header