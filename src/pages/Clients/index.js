import React, { Component } from 'react';
import ListGroupCollapse from './widgets/ListGroupCollapse';
import { Container, Row, Col } from "reactstrap";


const clientes = [{
    nome: "Vanderson",
    sobrenome: "Andrade",
    email: "vanderson@email.com",
    telefone: "(99) 7428-9372",
    cep: "26011-680",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "23/12/1994",
    cpf: "123.456.789-00",
    rendaMensal: "R$ 880,00"
},
{
    nome: "Fernando",
    sobrenome: "Silva",
    email: "fernando@email.com",
    telefone: "(99) 7428-9372",
    cep: "26001-279",
    endereco1: "Rua Argentina, 89",
    endereco2: "Não Informado",
    dataNascimento: "11/09/1982",
    cpf: "123.456.789-00",
    rendaMensal: "R$ 1500,00"
},
{
    nome: "Larissa",
    sobrenome: "Cabral",
    email: "larissa@email.com",
    telefone: "(99) 7428-9372",
    cep: "45900-421",
    endereco1: "Rua Diamantina, 1041, SP",
    endereco2: "Rua Dr. Juliano, apt 401, SP",
    dataNascimento: "20/01/1995",
    cpf: "123.456.789-00",
    rendaMensal: "Não Informado"
},
{
    nome: "Gabriel",
    sobrenome: "Kravwes",
    email: "gabriel@email.com",
    telefone: "(99) 7428-9372",
    cep: "40004-000",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "12/06/1995",
    cpf: "123.456.789-00",
    rendaMensal: "Não Informado"
},
{
    nome: "Sara",
    sobrenome: "Esteves",
    email: "sara@email.com",
    telefone: "(99) 7428-9372",
    cep: "21277-743",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "15/03/1997",
    cpf: "123.456.789-00",
    rendaMensal: "Não Informado"
},
{
    nome: "Amanda",
    sobrenome: "Junqueira",
    email: "amanda@email.com",
    telefone: "(99) 7428-9372",
    cep: "02136-700",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "07/11/1991",
    cpf: "123.456.789-00",
    rendaMensal: "R$ 2670,00"
},
{
    nome: "Rafaela",
    sobrenome: "Eduarda",
    email: "rafaela@email.com",
    telefone: "(99) 7428-9372",
    cep: "02130-006",
    endereco1: "Rua Maracanã, 680",
    endereco2: "Não Informado",
    dataNascimento: "30/12/1985",
    cpf: "123.456.789-00",
    rendaMensal: "R$ 5070,00"
},
{
    nome: "Armando",
    sobrenome: "Gonzales",
    email: "armando@email.com",
    telefone: "(99) 7428-9372",
    cep: "78906-312",
    endereco1: "Rua Patriota, apt 202",
    endereco2: "Não Informado",
    dataNascimento: "01/05/1979",
    cpf: "123.456.789-00",
    rendaMensal: "R$3650,00"
},
{
    nome: "Natália",
    sobrenome: "Pereira",
    email: "natalia@email.com",
    telefone: "(99) 7428-9372",
    cep: "12323-789",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "20/03/1997",
    cpf: "123.456.789-00",
    rendaMensal: "Não Informado"
},
{
    nome: "Helder",
    sobrenome: "Torreira",
    email: "helder@email.com",
    telefone: "(99) 7428-9372",
    cep: "23123-378",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "10/11/2000",
    cpf: "123.456.789-00",
    rendaMensal: "Não Informado"
},
{
    nome: "Tony",
    sobrenome: "Kross",
    email: "tony@email.com",
    telefone: "(99) 7428-9372",
    cep: "12337-890",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "07/07/1990",
    cpf: "123.456.789-00",
    rendaMensal: "R$ 860.000,00"
},
{
    nome: "Fernanda",
    sobrenome: "Brasil",
    email: "fernanda@email.com",
    telefone: "(99) 7428-9372",
    cep: "26120-908",
    endereco1: "Rua Califórnia, 1909",
    endereco2: "Não Informado",
    dataNascimento: "04/12/1992",
    cpf: "123.456.789-00",
    rendaMensal: "Não Informado"
},
{
    nome: "Paula",
    sobrenome: "Fontosa",
    email: "paula@email.com",
    telefone: "(99) 7428-9372",
    cep: "26110-790",
    endereco1: "Rua Professor Alberto, 29",
    endereco2: "Estrada do cantoindo, 58",
    dataNascimento: "21/10/2005",
    cpf: "123.456.789-00",
    rendaMensal: "R$ 680,00"
},
{
    nome: "Elza",
    sobrenome: "Flores",
    email: "elza@email.com",
    telefone: "(99) 7428-9372",
    cep: "39788-350",
    endereco1: "Rua Prefeito Muniz, 455",
    endereco2: "Não Informado",
    dataNascimento: "22/10/1979",
    cpf: "123.456.789-00",
    rendaMensal: "R$ 1600,00"
},
{
    nome: "Andrey",
    sobrenome: "Alexandre",
    email: "andrey@email.com",
    telefone: "(99) 7428-9372",
    cep: "23388-310",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "28/10/1998",
    cpf: "123.456.789-00",
    rendaMensal: "Não Informado"
},
{
    nome: "Felipe",
    sobrenome: "Antonio",
    email: "felipe@email.com",
    telefone: "(99) 7428-9372",
    cep: "09313-399",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "10/03/1990",
    cpf: "123.456.789-00",
    rendaMensal: "Não Informado"
},
{
    nome: "José",
    sobrenome: "Oliveira",
    email: "jose@email.com",
    telefone: "(99) 7428-9372",
    cep: "45321-450",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "27/06/2002",
    cpf: "123.456.789-00",
    rendaMensal: "Não Informado"
},
{
    nome: "Jussara",
    sobrenome: "Liberdade",
    email: "jose@email.com",
    telefone: "(99) 7428-9372",
    cep: "45321-450",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "22/11/1989",
    cpf: "123.456.789-00",
    rendaMensal: "Não Informado"
}]

export default class Clients extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <div className="prettybox ">
                                <div className="text-center">
                                    <div className="header-box">
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
