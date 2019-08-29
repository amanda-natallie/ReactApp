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
      <div>
        <div className="row">
          <Form onSubmit={this.handleSubmit} />
      </div>
      <div className="row">
        <div> {data ? JSON.stringify(data) : null}</div>
      </div>
      </div>
      
    )
  }
}

export default connect(state => state.CadastroCliente)(CadastroCliente)
