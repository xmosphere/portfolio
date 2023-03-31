import reactLogo from '../assets/react.svg';

function Footer(){
    
    return (
        <footer>
            <h5>Powered by Vite and React</h5>
            <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </footer>
    )
}
export default Footer;