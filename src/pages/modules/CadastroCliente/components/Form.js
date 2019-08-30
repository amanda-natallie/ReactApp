import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { Container, Row, Col, Form, FormGroup, Label } from "reactstrap";

const FormCadastro = props => {
  const { handleSubmit } = props;
  const [step, setStep] = useState(0);

  return (
    <>
      <Container>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <div className="prettybox ">
              <div className="text-center">
                <div className="header-box">
                  <h4>Cadastro de Clientes</h4>
                </div>
                <div className="content-box">
                  <p>Preencha o formulário para cadastrar um novo cliente.</p>
                </div>
              </div>

              <hr />
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
                        <Label> Endereço Linha 01:</Label>
                        <Field
                          name="address1"
                          component="input"
                          type="text"
                          placeholder="Rua dos Atleticanos, 360"
                          className="form-control"
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label> Endereço Linha 02:</Label>
                        <Field
                          name="address2"
                          component="input"
                          type="email"
                          placeholder="Milionários, Barreiro - BH/MG"
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
                  <div className="buttonGroup">
                    <button type="button" disabled={step === 0}
                      className="btn btn-info pull-left"
                      onClick={() => setStep(step - 1)}
                    >
                      Voltar
                  </button>
                    <button
                      type={step < 2 ? "button" : "submit"}
                      className="btn btn-info pull-right"
                      onClick={() => step < 2 && setStep(step + 1)}
                    >
                      {step < 2 ? "Próximo" : "Enviar"}
                    </button>
                  </div>

                </Col>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>

  );
};

export default reduxForm({
  form: "CadastroClienteForm"
})(FormCadastro);
