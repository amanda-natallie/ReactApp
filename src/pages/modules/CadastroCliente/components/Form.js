import React from 'react'
import {Field, reduxForm} from 'redux-form'
import { Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';

const FormCadastro = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <Form onSubmit={handleSubmit} className="form">
      <Col>
      <FormGroup>
      <Label>Digite seu nome:</Label>
      <Field 
          name="name"
          component="input"
          type="text"
          placeholder="Nome"
          className="form-control padding-right"
        />
      </FormGroup>
      </Col>
      <Col>
        <FormGroup>
        <Label> Digite seu Sobrenome</Label>
        <Field
          name="lastname"
          component="input"
          type="text"
          placeholder="Sobrenome"
          className="form-control"
        />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
        <Label> Digite seu </Label>
        <Field
          name="subject"
          component="input"
          type="text"
          placeholder="Assunto"
          className="form-control padding-right"
        />
       </FormGroup>
      </Col>
      <Col>
        <FormGroup>
        <Label> Digite seu Sobrenome</Label>
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="E-mail"
          className="form-control"
        />
      </FormGroup>
      </Col>
      <Col>
        <FormGroup>
        <Label> Digite seu Sobrenome</Label>
        <Field name="texto" component="textarea" className="form-control" placeholder="Texto" />
        </FormGroup>
      </Col>
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
    </Form>
  )
}

export default reduxForm({
  form: 'CadastroClienteForm'
})(FormCadastro)
