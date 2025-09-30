import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';

const Gallery = () => {
const imagenes = [
"https://picsum.photos/200/300",
"https://picsum.photos/200/300",
"https://picsum.photos/200/300",
"https://picsum.photos/200/300",
"https://picsum.photos/200/300"
];
    return (
    <section id="gallery" className="py-5">
        <Container>
        <h2 className="text-center mb-4">Galeria</h2>
        <Row>
            {imagenes.map((src, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
                <Card className="shadow-sm">
                <Card.Img variant="top" src={src} alt={`Imagen ${index + 1}`} />
                <Card.Body>
                    <Card.Text>Imagen {index + 1}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        </Container>
    </section>
            );
};

export default Gallery;