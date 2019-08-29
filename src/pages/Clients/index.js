import React, { Component } from 'react';
import { Container } from 'reactstrap';
import ListGroupCollapse from './widgets/ListGroupCollapse';


const clientes = [{
    nome: "Vanderson",
    sobrenome: "Andrade",
    email: "vanderson@email.com",
    telefone: "997428372",
    cep: "26011680",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "23121994",
    cpf: "12345678900",
    rendaMensal: "88000"
},
{
    nome: "Fernando",
    sobrenome: "Silva",
    email: "fernando@email.com",
    telefone: "980054478",
    cep: "26001279",
    endereco1: "Rua Argentina, 89",
    endereco2: "Não Informado",
    dataNascimento: "11091982",
    cpf: "99850125976",
    rendaMensal: "150000"
},
{
    nome: "Larissa",
    sobrenome: "Cabral",
    email: "larissa@email.com",
    telefone: "31980115",
    cep: "45900421",
    endereco1: "Rua Diamantina, 1041, SP",
    endereco2: "Rua Dr. Juliano, apt 401, SP",
    dataNascimento: "20011995",
    cpf: "00145699976",
    rendaMensal: "Não Informado"
},
{
    nome: "Gabriel",
    sobrenome: "Kravwes",
    email: "gabriel@email.com",
    telefone: "21987652",
    cep: "40004000",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "12061995",
    cpf: "90014569976",
    rendaMensal: "Não Informado"
},
{
    nome: "Sara",
    sobrenome: "Esteves",
    email: "sara@email.com",
    telefone: "27684578",
    cep: "21277743",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "15031997",
    cpf: "02103405678",
    rendaMensal: "Não Informado"
},
{
    nome: "Amanda",
    sobrenome: "Junqueira",
    email: "amanda@email.com",
    telefone: "976658473",
    cep: "02136700",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "07111991",
    cpf: "05678021034",
    rendaMensal: "267000"
},
{
    nome: "Rafaela",
    sobrenome: "Pinto",
    email: "rafaela@email.com",
    telefone: "45560056",
    cep: "02130006",
    endereco1: "Rua Maracanã, 680",
    endereco2: "Não Informado",
    dataNascimento: "30121985",
    cpf: "05621034780",
    rendaMensal: "507000"
},
{
    nome: "Armando",
    sobrenome: "Gonzales",
    email: "armando@email.com",
    telefone: "30035656",
    cep: "78906312",
    endereco1: "Rua Patriota, apt 202",
    endereco2: "Não Informado",
    dataNascimento: "01051979",
    cpf: "45665401123",
    rendaMensal: "365000"
},
{
    nome: "Natália",
    sobrenome: "Pereira",
    email: "natalia@email.com",
    telefone: "35656300",
    cep: "12323789",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "20031997",
    cpf: "05627801034",
    rendaMensal: "Não Informado"
},
{
    nome: "Helder",
    sobrenome: "Torreira",
    email: "helder@email.com",
    telefone: "63500563",
    cep: "23123378",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "10112000",
    cpf: "05103462780",
    rendaMensal: "Não Informado"
},
{
    nome: "Tony",
    sobrenome: "Kross",
    email: "tony@email.com",
    telefone: "93505630",
    cep: "12337890",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "07071990",
    cpf: "04627805103",
    rendaMensal: "86000000"
},
{
    nome: "Fernanda",
    sobrenome: "Brasil",
    email: "fernanda@email.com",
    telefone: "21338990",
    cep: "26120908",
    endereco1: "Rua Califórnia, 1909",
    endereco2: "Não Informado",
    dataNascimento: "04121992",
    cpf: "44568600289",
    rendaMensal: "Não Informado"
},
{
    nome: "Paula",
    sobrenome: "Fontosa",
    email: "paula@email.com",
    telefone: "89984004",
    cep: "26110790",
    endereco1: "Rua Professor Alberto, 29",
    endereco2: "Estrada do cantoindo, 58",
    dataNascimento: "21102005",
    cpf: "16221529701",
    rendaMensal: "68000"
},
{
    nome: "Elza",
    sobrenome: "Flores",
    email: "elza@email.com",
    telefone: "77018998",
    cep: "39788350",
    endereco1: "Rua Prefeito Muniz, 455",
    endereco2: "Não Informado",
    dataNascimento: "22101979",
    cpf: "52970116221",
    rendaMensal: "160000"
},
{
    nome: "Andrey",
    sobrenome: "Alexandre",
    email: "andrey@email.com",
    telefone: "98897543",
    cep: "23388310",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "28101998",
    cpf: "73312962101",
    rendaMensal: "Não Informado"
},
{
    nome: "Felipe",
    sobrenome: "Toffaneli",
    email: "felipe@email.com",
    telefone: "45459009",
    cep: "09313399",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "10031990",
    cpf: "12362109731",
    rendaMensal: "Não Informado"
},
{
    nome: "José",
    sobrenome: "Oliveira",
    email: "jose@email.com",
    telefone: "80083535",
    cep: "45321450",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "27062002",
    cpf: "12973362101",
    rendaMensal: "Não Informado"
},
{
    nome: "Jussara",
    sobrenome: "Liberdade",
    email: "jose@email.com",
    telefone: "80083535",
    cep: "45321450",
    endereco1: "Não Informado",
    endereco2: "Não Informado",
    dataNascimento: "22111989",
    cpf: "12733621019",
    rendaMensal: "Não Informado"
}]

export default class Clients extends Component {
  render() {
    return (
      <Container className="py-4">
        {Object.keys(clientes).map((key, index) =>
          <ListGroupCollapse key={index} cat={clientes[key]} />
        )}
      </Container>
    );
  }
}
