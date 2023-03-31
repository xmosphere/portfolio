import styled from "styled-components"

/*
file for eventually moving all my styled components to
*/


export const theme = {
    colors: {
        colorPrimary :`rgba(100, 100, 255, 1)`,
        colorSecondary :`rgba(150, 150, 255, 1)`,
        colorText :`rgba(255, 255, 255, 1)`,
        colorSubText:`rgba(175, 175, 175, 1)`
    }
}


//Styled Components

//Img Link Button styling
export const ImgLinkButton = styled.button`
    background-color: transparent;
    padding: 0;
`;
//Popup and Email Button
export const ThemedButton = styled.button`
    border-radius: 20px;
    min-height: 40px;
    background-color: black;
    margin: 0rem 1rem;
    color: white;
    &:hover{
        outline: 2px solid ${props => theme.colors.colorPrimary};
        color: ${props => theme.colors.colorPrimary}
    }
`

export const TitleText = styled.h1`
    color: ${theme.colors.colorText};
    text-align: center;
    overflow-wrap: break-word;
    letter-spacing: .125rem;
    text-shadow: -2px 2px ${props => theme.colors.colorPrimary};
`

export const SubTitleText = styled.h4`
    color: ${theme.colors.colorText};
    text-align: center;
    overflow-wrap: break-word;
    letter-spacing: .125rem;
    text-shadow: -2px 2px ${props => theme.colors.colorPrimary};
`

export const Text = styled.p`
    color: ${theme.colors.colorSubText};
    text-align: center;
    overflow-wrap: break-word;
    letter-spacing: .125rem;
    text-shadow: -1px 1px ${props => theme.colors.colorText};
`