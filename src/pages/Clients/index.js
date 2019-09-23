import React, { Component } from 'react';
import ListGroupCollapse from './widgets/ListGroupCollapse';
import { Container, Row, Col } from "reactstrap";



export default class Clients extends Component {
    
    render() {
        const clientes = this.props.clientsList
        console.log(this.props)
        return (
            <>
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <div className="prettybox ">
                                <div className="text-center">
                                    <div className="header-box ml-3">
                                        <h4>Lista de Clientes</h4>
                                    </div>
                                    <div className="content-box">
                                        <p>Aqui você pode visualizar os clientes existentes em seu painel. Clique em cada nome para ver os respectivos dados.</p>
                                    </div>
                                </div>

                                <hr />
                                <div className="scroll-y">
                                    <Container>
                                        {Object.keys(clientes).map((key, index) =>
                                            <ListGroupCollapse key={index} cat={clientes[key]} />
                                        )}
                                    </Container>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>


        );
    }
}
