import styled from 'styled-components';
import Project from '../lib/Project';


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
    width: 46%;
    margin: 1em;
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
    padding: 2rem;
`

const CardDescription = styled.p`
    
`

export function Card({project}: CardProps) {
    return (
        <CardContainer>
            {/* todo: implement the mobile format of the card for 1 column*/}
            <CardLayout>
                <CardHeader>{project.getProjectName()}</CardHeader>
                <CardDescription>{project.getProjectDescription()}</CardDescription>
                <Button>Click to Expand</Button>
            </CardLayout>
        </CardContainer>
        )
}

