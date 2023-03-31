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
        //Handles request as an arrow function async fetch statemnt
        //Not handling this in an arrow function with try catch block and async
        //The requests to duplicate
        //Flatmap turns responses into Project objects
        const fetchRepos = async () => {
            try {
                const promises = githubAccounts.map((account) =>
                    fetch(repoBaseURL + account + "/repos").then((response) => response.json())
                );
                const responses = await Promise.all(promises);
                console.log(responses)
                const data = responses.flatMap((d) => d);
                const results = data.flatMap((entry: any) => {
                    const entryProject = new Project(entry["name"],
                    entry["description"], entry["html_url"],
                    `https://github.com/`, [``]);
                    console.log(entryProject.getProjectDescription())
                    return entryProject
                });
                console.log(results);
                setResults(results);
            } catch (error) {
                console.log("Error: " + error)
            }
        };
        fetchRepos();
    }, [])
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
