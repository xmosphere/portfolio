import styled from 'styled-components';
import Project from '../../lib/Project';
import React, {useState} from 'react';
import { Popup } from './Popup';
import ReactModel from 'react-modal';

//Interface for passing prop values to card component
interface CardProps {
    project: Project;
}

const theme = {
    colors: {
        colorPrimary :`rgba(100, 100, 255, 1)`,
        colorSecondary :`rgba(150, 150, 255, 1)`,
        colorText :`rgba(255, 255, 255, 1)`,
        colorSubText:`rgba(175, 175, 175, 1)`
    }
}

const CardContainer = styled.div`
    border-radius: 25px;
    width: 30%;
    margin: 1em;
    max-height: 200px;
    background-color: ${props => theme.colors.colorPrimary};
    &:hover{
        box-shadow: -4px 4px 8px 4px ${props => theme.colors.colorSecondary};
    }
`;
const CardLayout = styled.div`
    margin: 1rem;
`
const CardHeader = styled.h1`
    font-size: 1em;
    align-items: center;
    text-shadow: -1px 1px 1px ${props => theme.colors.colorSubText};
`
const Button = styled.button`
    border-radius: 20px;
    min-height: 40px;
    background-color: transparent;
    position: relative;
    bottom: 0;
    &:hover{
        outline: 5px solid blue;
    }
`
const PopupBox = styled.div`
    width: 100%;
`
const ButtonPopup = styled.button`
    border-radius: 20px;
    min-height: 40px;
    background-color: black;

    &:hover{
        outline: 5px solid blue;
    }
`
const PopupTitleText = styled.h1`
    color: black;
    text-align: center;
    letter-spacing: .125rem;
`
const PopupSubText = styled.p`
    color: black;
    text-align: center;
    letter-spacing: .125rem;
`
const CardDescription = styled.p`
    
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
                <CardDescription>{project.getProjectDescription()}</CardDescription>
                <Button onClick={openPopup}>Expand</Button>
                <ReactModel
                    isOpen={isOpen}
                    contentLabel='Project'>
                        <PopupBox>
                            <div>
                                <PopupTitleText>{project.getProjectName()}</PopupTitleText>
                                <PopupSubText>{project.getProjectDescription()}</PopupSubText>
                            </div>
                            <div>
                                <a href={project.getProjectRepo()}><ButtonPopup>Open in Github</ButtonPopup></a>
                                <ButtonPopup onClick={closePopup}>Close</ButtonPopup>
                            </div>
                        </PopupBox>
                </ReactModel>
            </CardLayout>
        </CardContainer>
        )
}

