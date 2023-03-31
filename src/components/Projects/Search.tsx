import { Children, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from "react";
import styled from "styled-components";

const SearchBox = styled.div`
 width: 90%;
`

const TagBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    align-content: <center></center>;
    background-color: #242424;
    justify-content: space-between;
    margin: auto;
`
const options = ["Labs", "Assignments", "Projects",
        "Design", "Mobile Application", "DatabaseDesign",
        "Java", "JavaScript", "CSS", "HTML", "React", "Python",
        "Backend", "Frontend", "Server"];

function Search(_props: { searchList: (arg0: string[]) => void; })  {
    return (
        <SearchBox>
            <form>
                <TagBox>
                {options.map((option) => {
                    return <>
                        <input type="checkbox"></input>
                        <span>{option}</span><br/>
                    </>
                })}
                </TagBox>
                
                <button onClick={() => _props.searchList(options)}>Search</button>
            </form>
        </SearchBox>
    )

}
export default Search;