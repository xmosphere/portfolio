import styled, { ThemeProvider } from "styled-components"
import {theme, ImgLinkButton, TitleText, SubTitleText, Text} from '../assets/theme'
const Page = styled.div`
        height: 90vh;
        margin-top: 0rem;
        padding: 1rem 0rem;
        width: 100%;
        background-color: #242424;
    `;

//Flex Containers [1fr 3fr] [1fr 1fr 1fr]
const TopLayout = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    min-height: 50%;
`
const BottomLayout = styled.div` 
    display: flex;
    flex-direction: row;
`

const ProfilePane = styled.div`
    flex: 1;
    //background-color: ${theme.colors.colorSecondary};
    position: relative;
    overflow: hidden;
`
const Avatar = styled.img`
    position: absolute;
    top: 2rem;
    left: 0;
    width: 100%;
    height: auto;
    border-radius: 50%;
`
const AboutPane = styled.div`
    flex: 3;
    padding: 0rem 3rem;
    //background-color: ${theme.colors.colorPrimary};
`

const ListBox = styled.div`
    flex: 1;
`

//Text Styling



const HomePage = () => {
    //Arrays used to map list times for skills and certifications
    const skills = ["Java", 'JavaScript', 'CSS', 'HTML', 'React', 'TypeScript', 'Bash', 'Android/Kotln', 'SQL', 'MongoDB'];
    const softSkills = ["Time Management", 'Attention to detail', 'Cooperative'];
    const certifications = ["CompTIA IT Fundamentals", "CompTIA Security+ (Working Towards"];

    return (
        <Page>
            <TopLayout>
                <ProfilePane>
                    <Avatar src="src/assets/avatar.jpg" alt="My Picture">
                    </Avatar>
                </ProfilePane>
                <AboutPane>
                    <TitleText>
                        Hello! My Name is Noah Poling!
                    </TitleText>
                    <Text>I'm am a fullstack software engineer and recent Computer and Information Science graduade. I am based in the Richmond, VA area and able to relocate.</Text>
                    <a href="https://www.linkedin.com/in/noah-poling-4abbba260/">
                        <ImgLinkButton style={{borderRadius: "50%"}}><img src="src/assets/linkedin.png" alt="LinkedIn" height="50px" width="50px"/>
                        </ImgLinkButton>
                        </a>

                </AboutPane>
            </TopLayout>
            <BottomLayout>
                <ListBox>
                    <SubTitleText>
                        Skills
                    </SubTitleText>
                    <ul>
                        {skills.map((skill) => {
                            return <li><Text>{skill}</Text></li>
                        })}
                    </ul>
                </ListBox>
                <ListBox>
                    <SubTitleText>
                        Soft Skills
                    </SubTitleText>
                    <ul>
                        {softSkills.map((softskill) => {
                            return <li><Text>{softskill}</Text></li>
                        })}
                    </ul>
                </ListBox>
                <ListBox>
                    <SubTitleText>
                        Certifications
                    </SubTitleText>
                    <ul>
                        {certifications.map((cert) => {
                            return <li><Text>{cert}</Text></li>
                        })}
                    </ul>
                </ListBox>
            </BottomLayout>
        </Page>
    )
}
export default HomePage;