import React, { Component } from 'react'
import Form from './../components/Form'
import { reset } from 'redux-form'
import { connect } from 'react-redux'
import { CadastroEnviado } from './../index'
import { Row, Col } from "reactstrap";

class CadastroCliente extends Component {
  handleSubmit = (values, dispatch) => {
    dispatch(CadastroEnviado(values))
    dispatch(reset('CadastroClienteForm'))
  }

  render() {
    const { data } = this.props
    return (
      <>
        <Form onSubmit={this.handleSubmit} />

        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}> {data ? JSON.stringify(data) : null}</Col>
        </Row>
      </>

    )
  }
}

export default connect(state => state.CadastroCliente)(CadastroCliente)
