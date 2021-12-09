import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; Beeusable
                    </Col>

                </Row>
                    <Col className='text-right py-3' >
                        For Support: 9090909090 
                    </Col>
            </Container>
        </footer>
    )
}

export default Footer
