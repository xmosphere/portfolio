import React, { useEffect, useState } from "react"
import Search from "./Search"
import Results from "./Results"
import styled from "styled-components"

import Project from "../../lib/Project";

const ProjectsPageStyling = styled.div`
    display: grid;
    grid-template-columns: repeat(3);
`
const githubAccounts = ['noahspoling', 'xmosphere']
const repoBaseURL = "https://api.github.com/users/"


const Projects = () => {
    //states for array of Project Objects and the Search Terms
    //And one for target 
    const [searchTerms, setSearchTerms] = useState<String[]>([]);
    const [results, setResults] = useState<Project[]>([]);
    const [result, setResult] = useState<Project>();

    useEffect(() => {
        githubAccounts.map((account) => {
            fetch(repoBaseURL + account + "/repos")
                .then((response) => response.json())
                .then((data) => {
                    /*
                     * TODO Fix the repeat request
                     * current work around is itterating over each
                     * array object to check if they are the same object
                     */
                    //dataJson.push(data)
                    data.map((entry: any) => {
                        const entryProject = new Project(entry["name"],
                        entry["description"], entry["html_url"], `https://github.com/`, [``])
                        console.log(entryProject)
                        results.push(entryProject)
                        //console.log(results.toString)
                    })
                })
                .catch((error) => {
                    console.error("Error: ", error)
                })
        })


    })
    return(
        <ProjectsPageStyling>
            {
            /*
             *
             * Search not implemented
             * <Search searchList={searchTerms => setSearchTerms(searchTerms)}></Search>
             */
            }
            <Results projects={results}></Results>
        </ProjectsPageStyling>
        )
}
export default Projects;