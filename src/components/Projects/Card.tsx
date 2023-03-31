import styled from 'styled-components';
import Project from '../../lib/Project';
import React, {useState} from 'react';
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
    margin-top: 1em;
    max-height: 200px;
    background-color: ${props => theme.colors.colorPrimary};
    &:hover{
        box-shadow: -4px 4px 8px 4px ${props => theme.colors.colorSecondary};
    }
`

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

const Popup = styled(ReactModel)`
    text-align: center;
    align-self: center;
    border-radius: 25px;
    margin:  auto;
    margin-top: 2em;
    min-height: 50vh;
    width: 80%;
`

const PopupBox = styled.div`
    position: relative;
    border-radius: 25px;
    background-color: ${props => theme.colors.colorText};
    margin: 0px;
    min-height: 50vh;
`

const PopupHeader = styled.div`
    padding: .5em 0em;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    width: 100%;
    background-color: ${props => theme.colors.colorPrimary};
`

const PopupFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 1rem 0rem;
    background-color: ${props => theme.colors.colorPrimary};
`

const ButtonPopup = styled.button`
    border-radius: 20px;
    min-height: 40px;
    background-color: black;
    margin: 0rem 1rem;
    color: white;
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
                <Popup
                    isOpen={isOpen}
                    contentLabel='Project'>
                        <PopupBox>
                                <PopupHeader>
                                    <PopupTitleText>{project.getProjectName()}</PopupTitleText>
                                </PopupHeader>
                                <PopupSubText>{project.getProjectDescription()}</PopupSubText>
                                <PopupFooter>
                                <a href={project.getProjectRepo()}><ButtonPopup>Open in Github</ButtonPopup></a>
                                <ButtonPopup onClick={closePopup}>Close</ButtonPopup>
                                </PopupFooter>
                        </PopupBox>
                </Popup>
            </CardLayout>
        </CardContainer>
        )
}

