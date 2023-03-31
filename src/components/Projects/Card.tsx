import styled from 'styled-components';
import Project from '../../lib/Project';
import React, {useState} from 'react';
import ReactModel from 'react-modal';
import {theme, ThemedButton } from '../../assets/theme';

//Interface for passing prop values to card component
interface CardProps {
    project: Project;
}



const CardContainer = styled.div`
    border-radius: 25px;
    width: 30%;
    margin-top: 1em;
    min-height: 100px;
    background-color: ${theme.colors.colorPrimary};
    &:hover{
        box-shadow: -4px 4px 8px 4px ${theme.colors.colorSecondary};
    }
`

const CardLayout = styled.div`
    margin: 1rem;
`
const CardHeader = styled.h1`
    font-size: 1em;
    align-items: center;
    overflow-wrap: break-word;
    text-shadow: -1px 1px 1px ${theme.colors.colorSubText};
`
const Button = styled.button`
    border-radius: 20px;
    min-height: 40px;
    background-color: transparent;
    position: relative;
    bottom: 0;
    &:hover{
        background-color: ${theme.colors.colorSecondary};
        color: ${props => theme.colors.colorPrimary};
    }
`

const Popup = styled(ReactModel)`
    text-align: center;
    align-self: center;
    border-radius: 25px;
    margin:  auto;
    margin-top: 2em;
    max-height: 50vh;
    width: 80%;
`

const PopupBox = styled.div`
    position: relative;
    border-radius: 25px;
    background-color: ${theme.colors.colorText};
    margin: 0px;
    min-height: 50vh;
`

const PopupHeader = styled.div`
    padding: .5em 0em;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    width: 100%;
    background-color: ${theme.colors.colorPrimary};
`

const PopupFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 1rem 0rem;
    //background-color: ${theme.colors.colorPrimary};
`

const PopupTitleText = styled.h1`
    color: black;
    text-align: center;
    overflow-wrap: break-word;
    letter-spacing: .125rem;
    text-shadow: -2px 2px ${theme.colors.colorSecondary};
`
const PopupSubText = styled.p`
    color: black;
    text-align: center;
    overflow-wrap: break-word;
    letter-spacing: .125rem;
    text-shadow: -1px 1px ${theme.colors.colorSubText};
`

export function Card({project}: CardProps) {

    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    };
    const closePopup = () => {
        setIsOpen(false);
    };
    return (
        <CardContainer>
            {/* todo: implement the mobile format of the card for 1 column*/}
            <CardLayout>
                <CardHeader>{project.getProjectName()}</CardHeader>
                <Button onClick={openPopup}>Expand</Button>
                <Popup
                    isOpen={isOpen}
                    contentLabel='Project'>
                        <PopupBox>
                                <PopupHeader>
                                    <PopupTitleText>{project.getProjectName()}</PopupTitleText>
                                </PopupHeader>
                                <PopupSubText>{project.getProjectDescription()}</PopupSubText>
                                <PopupFooter>
                                <a href={project.getProjectRepo()}><ThemedButton>Open in Github</ThemedButton></a>
                                <ThemedButton onClick={closePopup}>Close</ThemedButton>
                                </PopupFooter>
                        </PopupBox>
                </Popup>
            </CardLayout>
        </CardContainer>
        )
}

