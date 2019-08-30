import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class HomePage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <div className="prettybox">
                            <div className="header-box">
                               <h4 className="text-center">Esta é a página inicial</h4>
                            </div>
                            <div className="content-box">
                            <p>Use os botões de navegação ao lado para ir à pagina desejada!</p>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
