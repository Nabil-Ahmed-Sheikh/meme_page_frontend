import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
    return (
        <Container className="header">
            <LinkContainer to='/'>
                <div>
                    <h1>Meme Gallery</h1>
                </div>
            </LinkContainer>  
        </Container>
    )
}

export default Header
