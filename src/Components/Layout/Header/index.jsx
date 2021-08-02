import { Navbar, Container } from "react-bootstrap"

const Header = () => {
    return (
        <Navbar style={{background: '#7aad85ad',fontSize:'2rem', fontWeight:'bold'}}>
            <Container>
                <Navbar.Brand href="#home">
                    Ezyschooling - Test task
                </Navbar.Brand>
            </Container>
        </Navbar>

    )
}

export default Header
