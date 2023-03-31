import styled from "styled-components"
import {theme, TitleText, SubTitleText, Text, ImgLinkButton, ThemedButton} from '../assets/theme'
import Link from './MailButton'

const Page = styled.div`
        height: 90vh;
        margin-top: 0rem;
        padding: 1rem 0rem;
        width: 100%;
        display: flex;
        flex-direction: row;
    `;
const FlexDiv = styled.div`
    flex: 1;
`

const ContactPage = () => {
    return (
        <Page>
            <FlexDiv>
                <TitleText>E-Mail Me</TitleText>
                <Link label={"Mail Me"} mailto={"mailto:noahspoling@gmail.com"}></Link>
            </FlexDiv>
            <FlexDiv>
                <TitleText>Connect on LinkedIn</TitleText>
                <a href="https://www.linkedin.com/in/noah-poling-4abbba260/">
                        <ImgLinkButton style={{borderRadius: "50%"}}><img src="src/assets/linkedin.png" alt="LinkedIn" height="50px" width="50px"/>
                        </ImgLinkButton>
                        </a>
                </FlexDiv>
        </Page>
    )
}
export default ContactPage;