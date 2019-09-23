import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faAddressCard, faAddressBook, faBirthdayCake, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';*/
import { TextField, Typography, Button, Grid } from '@material-ui/core';
import './Form.css';
import { FormErrors } from '../../Utils/FormValidation';



class FormSemRedux extends Component {

  constructor(props) {
    super(props)

    this.state = {
      nome_pessoa: "",
      sobrenome_pessoa: "",
      email_pessoa: "",
      telefone_pessoa: "",
      cep_pessoa: "",
      endereco1_pessoa: "",
      endereco2_pessoa: "",
      datanasc_pessoa: "",
      cpf_pessoa: "",
      renda_pessoa: "",
      formErrors: {
        Nome: "",
        Sobrenome: "",
        Email: "",
        Telefone: "",
        CEP: "",
        Endereco1: "",
        Endereco2: "",
        Data_Nascimento: "",
        CPF: "",
        Renda: "",
      },
      nomeValid: false,
      sobrenomeValid: false,
      emailValid: false,
      telefoneValid: false,
      cepValid: false,
      endereco1Valid: false,
      endereco2Valid: false,
      datanascValid: false,
      cpfValid: false,
      rendaValid: false,
      step0Valid: false,
      step1Valid: false,
      step2Valid: false,
      show: false,
      step: 0,
    }
  }



  setStep = (step) => {
    if (step <= 2) {
      this.setState({ step })
    } else {
      this.setState({ show: true })
    }
  }

  handleNextButton = (currentStep) => {
    this.setStep(currentStep)
  }

  validateField(fieldName, value, step) {
    let fieldValidationErrors = this.state.formErrors;

    let nomeValid = this.state.nomeValid;
    let sobrenomeValid = this.state.sobrenomeValid;
    let emailValid = this.state.emailValid;
    let telefoneValid = this.state.telefoneValid;
    let cepValid = this.state.cepValid;
    let endereco1Valid = this.state.endereco1Valid;
    let endereco2Valid = this.state.endereco2Valid;
    let datanascValid = this.state.datanascValid;
    let cpfValid = this.state.cpfValid;
    let rendaValid = this.state.rendaValid;


    switch (fieldName) {
      case 'nome_pessoa':
        nomeValid = value.length >= 2;
        fieldValidationErrors.Nome = nomeValid ? '' : ' é inválido. Tente novamente.';
        break;
      case 'sobrenome_pessoa':
        sobrenomeValid = value.length >= 2;
        fieldValidationErrors.Sobrenome = sobrenomeValid ? '' : ' é inválido. Tente novamente.';
        break;
      case 'email_pessoa':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.Email = emailValid ? '' : ' é inválido. Tente novamente.';
        break;
      case 'telefone_pessoa':
        telefoneValid = value.length >= 10 && value.length <= 11;
        fieldValidationErrors.Telefone = telefoneValid ? '' : ' é inválido. Tente novamente. O telefone pode ter no máximo 11 digitos com o ddd';
        break;
      case 'cep_pessoa':
        cepValid = value.length === 8;
        fieldValidationErrors.CEP = cepValid ? '' : ' é inválido. Tente novamente. o cep precisa ter 8 digitos';
        break;
      case 'endereco1_pessoa':
        endereco1Valid = value.length >= 5;
        fieldValidationErrors.Endereco1 = endereco1Valid ? '' : ' está muito curto. Tem certeza de que está correto?';
        break;
      case 'endereco2_pessoa':
        endereco2Valid = value.length >= 11;
        fieldValidationErrors.Endereco2 = endereco2Valid ? '' : ' está muito curto. Tem certeza de que está correto?';
        break;
      case 'datanasc_pessoa':
        datanascValid = value.length > 0;
        fieldValidationErrors.Data_Nascimento = datanascValid ? '' : ' é inválido. Tente novamente.';
        break;
      case 'cpf_pessoa':
        cpfValid = value.length === 11;
        fieldValidationErrors.CPF = cpfValid ? '' : ' é inválido. O cpf precisa ter 11 digitos';
        break;
      case 'renda_pessoa':
        rendaValid = value.length != 0;
        fieldValidationErrors.Renda = rendaValid ? '' : ' é inválido. Se não recebe nada por mês, digite "Não informado"';
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      nomeValid: nomeValid,
      emailValid: emailValid,
      telefoneValid: telefoneValid,
      sobrenomeValid: sobrenomeValid,
      cepValid: cepValid,
      endereco1Valid: endereco1Valid,
      endereco2Valid: endereco2Valid,
      datanascValid: datanascValid,
      cpfValid: cpfValid,
      rendaValid: rendaValid,
    }, this.validateForm);
  }

  validateForm() {
    (this.state.nomeValid && this.state.sobrenomeValid && this.state.emailValid && this.state.telefoneValid) ? this.setState({ step0Valid: true }) : this.setState({ step0Valid: false });
    (this.state.cepValid && this.state.endereco1Valid && this.state.endereco2Valid) ? this.setState({ step1Valid: true }) : this.setState({ step1Valid: false });
    (this.state.datanascValid && this.state.cpfValid && this.state.rendaValid) ? this.setState({ step2Valid: true }) : this.setState({ step2Valid: false });
  }


  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
    this.validateField(name, value)
  }


  render() {
    console.log(this.props)
    return (
      <>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={8} className="prettybox">
            <div className="text-center">
              <div className="header-box">
                <h4>Cadastro de Clientes</h4>
              </div>
              <div className="content-box">
                <p>Preencha o formulário para cadastrar um novo cliente.</p>
              </div>
            </div>
            <hr />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormErrors formErrors={this.state.formErrors} />
              </Grid>
            </Grid>
            {this.state.step === 0 && (

              <Grid container spacing={2} >
                <Grid item xs={6}>
                  <TextField variant="outlined" fullWidth
                    value={this.state.nome_pessoa}
                    onChange={(event) => this.handleUserInput(event)}
                    onClick={() => this.setState({ show: false })}
                    label="Digite seu nome"
                    placeholder="Amanda Natallie"
                    type="text"

                    autoComplete="new-password"
                    name="nome_pessoa" />
                </Grid>
                <Grid item xs={6}>
                  <TextField variant="outlined" fullWidth
                    value={this.state.sobrenome_pessoa}
                    onChange={(event) => this.handleUserInput(event)}
                    onClick={() => this.setState({ show: false })}
                    label="Digite seu sobrenome"
                    placeholder="de Oliveira"
                    type="text"
                    autoComplete="new-password"
                    name="sobrenome_pessoa" />
                </Grid>
                <Grid item xs={12} >
                  <TextField variant="outlined" fullWidth
                    value={this.state.email_pessoa}
                    onChange={(event) => this.handleUserInput(event)}
                    onClick={() => this.setState({ show: false })}
                    label="Digite seu E-mail"
                    autoComplete="new-password"
                    placeholder="amanda.natallie.2@gmail.com"
                    type="email"
                    name="email_pessoa" />
                </Grid>
                <Grid item xs={12} >
                  <TextField variant="outlined" fullWidth
                    value={this.state.telefone_pessoa}
                    onChange={(event) => this.handleUserInput(event)}
                    onClick={() => this.setState({ show: false })}
                    label="Digite seu Telefone"
                    autoComplete="new-password"
                    placeholder="(31) 99270-4989"
                    type="number"
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 11)
                    }}
                    min={10}
                    name="telefone_pessoa" />
                </Grid>
              </Grid>


            )}
            {this.state.step === 1 && (
              <Grid container spacing={2} >
                <Grid item xs={12} >
                  <TextField variant="outlined" fullWidth
                    value={this.state.cep_pessoa}
                    onChange={(event) => this.handleUserInput(event)}
                    onClick={() => this.setState({ show: false })}
                    label="Digite seu CEP"
                    placeholder="30240-620"
                    type="number"
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 8)
                    }}
                    min={8}
                    autoComplete="new-password"
                    name="cep_pessoa" />
                </Grid>
                <Grid item xs={12} >
                  <TextField variant="outlined" fullWidth
                    value={this.state.endereco1_pessoa}
                    onChange={(event) => this.handleUserInput(event)}
                    onClick={() => this.setState({ show: false })}
                    label="Endereço Linha 1"
                    placeholder="Rua Desiree Contier, 39, Jardim Petrópolis"
                    type="text"
                    autoComplete="new-password"
                    name="endereco1_pessoa" />
                </Grid>
                <Grid item xs={12} >
                  <TextField variant="outlined" fullWidth
                    value={this.state.endereco2_pessoa}
                    onChange={(event) => this.handleUserInput(event)}
                    onClick={() => this.setState({ show: false })}
                    label="Endereço Linha 2"
                    autoComplete="new-password"
                    placeholder="Santo Amaro, São Paulo/SP - Brasil"
                    type="text"
                    name="endereco2_pessoa" />
                </Grid>

              </Grid>
            )}
            {this.state.step === 2 && (

              <Grid container spacing={2} >
                <Grid item xs={12} >
                  <TextField variant="outlined" fullWidth
                    value={this.state.datanasc_pessoa}
                    onChange={(event) => this.handleUserInput(event)}
                    onClick={() => this.setState({ show: false })}
                    label="Data de Nascimento"
                    placeholder="24/12/1994"
                    type="date"
                    autoComplete="new-password"
                    name="datanasc_pessoa" />
                </Grid>
                <Grid item xs={6}>
                  <TextField variant="outlined" fullWidth
                    value={this.state.cpf_pessoa}
                    onChange={(event) => this.handleUserInput(event)}
                    onClick={() => this.setState({ show: false })}
                    label="Seu CPF"
                    placeholder="112.145.156-98"
                    type="number"
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 11)
                    }}
                    min={11}
                    autoComplete="new-password"
                    name="cpf_pessoa" />
                </Grid>
                <Grid item xs={6}>
                  <TextField variant="outlined" fullWidth
                    value={this.state.renda_pessoa}
                    onChange={(event) => this.handleUserInput(event)}
                    onClick={() => this.setState({ show: false })}
                    label="Renda Mensal"
                    autoComplete="new-password"
                    placeholder="R$6920,00 por mês"
                    type="text"
                    name="renda_pessoa" />
                </Grid>
              </Grid>
            )}
            <Grid container justify="space-between" alignItems="center" className="mt-3">
              <Button disabled={this.state.step === 0} variant="outlined" color="primary" onClick={() => this.setState({ step: this.state.step - 1 })}>
                Anterior
                  </Button>
              <Button variant="outlined"
                disabled={(this.state.step === 0 && !this.state.step0Valid)
                  || (this.state.step === 1 && !this.state.step1Valid)
                  || (this.state.step === 2 && !this.state.step2Valid)}
                color="primary"
                onClick={(this.state.step === 2) ? () => this.props.submitForm(this.state, this.props.history) : () => this.handleNextButton(this.state.step + 1)} >
                {(this.state.step === 2) ? "Finalizar" : "Próximo"}
              </Button>
            </Grid>


            <Grid container justify="center" alignItems="flex-start" className="mt-3">
              <br />
              {this.state.show && (
                <>
                  <Grid item xs={12}>
                    <Typography ><b>Nome:</b> {this.state.nome_pessoa}</Typography>
                    <Typography><b>Sobrenome:</b> {this.state.sobrenome_pessoa}</Typography>
                    <Typography><b>E-mail:</b> {this.state.email_pessoa}</Typography>
                    <Typography><b>Telefone:</b> {this.state.telefone_pessoa}</Typography>
                    <Typography><b>CEP:</b> {this.state.cep_pessoa}</Typography>
                    <Typography><b>Endereço Linha 1: </b>{this.state.endereco1_pessoa}</Typography>
                    <Typography><b>Endereço Linha 2:</b> {this.state.endereco2_pessoa}</Typography>
                    <Typography><b>Data de Nascimento: </b>{this.state.datanasc_pessoa}</Typography>
                    <Typography><b>CPF: </b>{this.state.cpf_pessoa}</Typography>
                    <Typography><b>Renda Mensal:</b> {this.state.renda_pessoa}</Typography>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>


        </Grid>



      </>
    )
  }
}


export default withRouter(FormSemRedux)