import styled from "styled-components"


const HomePage = () => {
    const Page = styled.div`
        height: 90vh;
        margin-top: 0rem;
        padding: 1rem;
        width: 90%;
        background-color: white;
    `;
    return (
        <Page>
            <h1 style={{color: 'black'}}>HelloWorld</h1>
        </Page>
    )
}
export default HomePage;