import React from 'react'
import {Field, reduxForm} from 'redux-form'

const Form = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit} className="CadastroCliente-form">
      <div className="form-group col-md-6 no-padding ">

        <Field
          name="name"
          component="input"
          type="text"
          placeholder="Nome"
          className="form-control padding-right"
        />
      </div>
      <div className="form-group col-md-6 no-padding">

        <Field
          name="lastname"
          component="input"
          type="text"
          placeholder="Sobrenome"
          className="form-control"
        />
      </div>
      <div className="form-group col-md-6 no-padding ">

        <Field
          name="subject"
          component="input"
          type="text"
          placeholder="Assunto"
          className="form-control  padding-right"
        />
      </div>
      <div className="form-group col-md-6 no-padding">

        <Field
          name="email"
          component="input"
          type="email"
          placeholder="E-mail"
          className="form-control"
        />
      </div>
      <div className="form-group col-md-12 no-padding ">

        <Field name="texto" component="textarea" className="form-control" placeholder="Texto" />
      </div>
      <div className="clearfix"></div>
      <div className="form-group pull-right">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={pristine || submitting}>
          Enviar
        </button>{' '}
        <button
          type="button"
          className="btn btn-default"
          disabled={pristine || submitting}
          onClick={reset}>
          Resetar
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'CadastroClienteForm'
})(Form)
