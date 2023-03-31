import React, {useEffect, useState} from "react";
import Papa, {ParseResult} from 'papaparse';
import Project from "../../lib/Project";
import { Card } from "./Card";

import styled from "styled-components";

const theme = {
    colors: {
        colorPrimary :`rgba(100, 100, 255, 1)`,
        colorSecondary :`rgba(150, 150, 255, 1)`,
        colorText :`rgba(255, 255, 255, 1)`,
        colorSubText:`rgba(175, 175, 175, 1)`
    }
}

const ProjectsCardContainer = styled.div`
    display: flex;
    align-content: around;
    flex-wrap: wrap;
    width: 90%;
    background-color: #242424;
    justify-content: space-between;
    margin: auto;
`
type Params = {
    projects: Project[];
}
const Results: React.FC<Params> = ({projects}) => {
    const [projectsList, setProjectsList] = useState<Project[]>([])

    const [isLoading, setIsLoading] = useState(true);
    
    //Forces the component to wait n seconds for the fetch function in parent
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);
    return ( <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
            <ProjectsCardContainer>
                {projects.map((project) => {
                    return <Card project={project}></Card>
                })}
            </ProjectsCardContainer>
        )}
      </div>)
}

export default Results;