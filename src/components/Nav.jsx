import React from 'react';
import {NavBar,Nav,Container} from 'react-bootstrap';

const Navigation = () => {
    return (        
        <NavBar bg="Dark" variant="dark" expand ="lg"> 
            <Container>
                <NavBar.Brand>Mi pagina uwu</NavBar.Brand>
                <NavBar.Toggle/>
                <NavBar.collapse className ="">
                    <Nav ClassName="ms-auto">
                        <Nav.Link>Inicio</Nav.Link>
                        <Nav.Link>Galeria</Nav.Link>
                        <Nav.Link>Contacto</Nav.Link>
                    </Nav>
                </NavBar.collapse>
            </Container>
        </NavBar>
    );
};

export default Navigation