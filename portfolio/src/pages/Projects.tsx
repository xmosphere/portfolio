import React, {useEffect, useState} from "react";
import Papa from 'papaparse';
import Project from "../lib/Project";
import { Card } from "../components/Card";

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
    width: 104%;
    background-color: white;
    justify-content: space-between;
    margin: auto;
`
type Link = {
    link: string;

};
const Projects: React.FC<Link> = ({link}) => {
    
    const [rows, setRows] = React.useState([])
    useEffect(() => {
    async function getData() {
      const response = await fetch('src/assets/projects.csv')
      const reader = response.body.getReader()
      const result = await reader.read() // raw array
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(result.value) // the csv text
      const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
      const rows = results.data // array of objects
      setRows(rows)
      console.log(rows)
    }
    getData()
  }, [])
    return  (
        <ProjectsCardContainer>
            {
            rows.map((row) => {
                const project = new Project(row["Project Name"],
                row["Project Description"], row["Repo Link"],
                row["Live Link"], row["Screenshot"])
                console.log("Project Name: " +row["Project Name"]);
                if(row["Project Name"] == "") {
                    return
                }
                return <Card project={project}></Card>
            })
            }
            
        </ProjectsCardContainer>
    )
}
export default Projects;