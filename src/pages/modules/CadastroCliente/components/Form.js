import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const FormCadastro = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const [step, setStep] = useState(0);

  return (
    <Form onSubmit={handleSubmit} className="form">
      {step === 0 && (
        <>
          <Col>
            <FormGroup>
              <Label>Digite seu nome:</Label>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Vinicius"
                className="form-control padding-right"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label> Digite seu Sobrenome:</Label>
              <Field
                name="lastname"
                component="input"
                type="text"
                placeholder="Colares"
                className="form-control"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label> Digite seu E-mail:</Label>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="talentos@viniciuscolares.com"
                className="form-control"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label> Digite seu Telefone:</Label>
              <Field
                name="telefone"
                component="input"
                type="text"
                placeholder="(79) 9 9976 4538"
                className="form-control padding-right"
              />
            </FormGroup>
          </Col>
        </>
      )}
      {step === 1 && (
        <>
          <Col>
            <FormGroup>
              <Label>CEP:</Label>
              <Field
                name="cep"
                component="input"
                type="text"
                placeholder="49048-523"
                className="form-control padding-right"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label> Endereço 01:</Label>
              <Field
                name="address1"
                component="input"
                type="text"
                placeholder="Avenida suvaco da gata, n 171"
                className="form-control"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label> Endereço 02:</Label>
              <Field
                name="address2"
                component="input"
                type="email"
                placeholder="Rua baixada da cachorrinha, n 69"
                className="form-control"
              />
            </FormGroup>
          </Col>
        </>
      )}
      {step === 2 && (
        <>
          <Col>
            <FormGroup>
              <Label>Data de nascimento:</Label>
              <Field
                name="birthday"
                component="input"
                type="text"
                placeholder="16/01/1992"
                className="form-control padding-right"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label> CPF:</Label>
              <Field
                name="cpf"
                component="input"
                type="text"
                placeholder="156.485.598-69"
                className="form-control"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label> Renda Mensal:</Label>
              <Field
                name="income"
                component="input"
                type="email"
                placeholder="R$ 6.000"
                className="form-control"
              />
            </FormGroup>
          </Col>
        </>
      )}
      <Col>
        <button
          type={step < 2 ? "button" : "submit"}
          className="btn btn-primary"
          onClick={() => step < 2 && setStep(step + 1)}
        >
          {step < 2 ? "Próximo" : "Enviar"}
        </button>
      </Col>
    </Form>
  );
};

export default reduxForm({
  form: "CadastroClienteForm"
})(FormCadastro);
