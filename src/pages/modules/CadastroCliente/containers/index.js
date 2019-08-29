import React, {Component} from 'react'
import Form from './../components/Form'
import {reset} from 'redux-form'
import {connect} from 'react-redux'
import {CadastroEnviado} from './../index'

class CadastroCliente extends Component {
  handleSubmit = (values, dispatch) => {
    dispatch(CadastroEnviado(values))
    dispatch(reset('CadastroClienteForm'))
  }

  render() {
    const {data} = this.props

    return (
      <div className="row">

          <Form onSubmit={this.handleSubmit} />
          <div className="clearfix"></div>
          <div>Dados do Formulário: {data ? JSON.stringify(data) : null}</div>

      </div>
    )
  }
}

export default connect(state => state.CadastroCliente)(CadastroCliente)
