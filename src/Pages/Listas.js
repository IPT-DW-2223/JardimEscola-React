import React from 'react';

// Importar a API.
import {getProfessores, getResponsaveis} from '../Api.js';
import { Table } from 'react-bootstrap';

/**
 * Classe src/Pages/Listas.js
 */
class Listas extends React.Component {

   state = {
      professores: [],     // Guarda a lista de professores.
      responsaveis: []     // Guarda a lista de responsáveis.
   }

   // Função que é executada quando este componente é iniciado.
   componentDidMount() {
      this.carregarDadosProfessores();
      this.carregarDadosResponsaveis();
   }

   // Função para carregar os dados dos professores através da API.
   async carregarDadosProfessores() {
      try {
         // Pedir os dados dos professores à API.
         let professoresAPI = await getProfessores();
         // Guardar na variável de state, os dados recebidos.
         this.setState({ professores: professoresAPI })
      } catch(ex) {
         // Mensagem de erro.
         console.error("Erro: não foi possível ler os dados dos professores.", ex);
      }
   }

   // Função para carregar os dados dos responsáveis através da API.
   async carregarDadosResponsaveis() {
      try {
         // Pedir os dados dos responsáveis à API.
         let responsaveisAPI = await getResponsaveis();
         // Guardar na variável de state, os dados recebidos.
         this.setState({ responsaveis: responsaveisAPI })
      } catch(ex) {
         // Mensagem de erro.
         console.error("Erro: não foi possível ler os dados dos responsáveis.", ex);
      }
   }

   // Construção da página que será retornada como View.
   render() {
      
      // Declarar variável para o header das tabelas:
      let tabelaHeader = [];

      // Declarar variável para a tabela dos Professores:
      let tabelaProfessoresBody     = [];

      // Declarar variável para a tabela dos Responsáveis:
      let tabelaResponsaveisBody    = [];

      // Constrói o header das tabelas (que é comum nas duas tabelas):
      tabelaHeader.push(
         <thead>
            <tr>
               <th>Id</th>
               <th>Nome</th>
            </tr>
         </thead>
      );

      // Constrói o body da tabela dos professores:
      this.state.professores.forEach((professor) => {
         tabelaProfessoresBody.push(
            <tr key={professor.id}>
               <td>{professor.id}</td>
               <td>{professor.nome}</td>
            </tr>
         );
      });

      // Constrói o body da tabela dos responsáveis:
      this.state.responsaveis.forEach((responsavel) => {
         tabelaResponsaveisBody.push(
            <tr key={responsavel.id}>
               <td>{responsavel.id}</td>
               <td>{responsavel.nome}</td>
            </tr>
         );
      });

      // Constrói a página.
      return(
         <>
            <div className='container mx-auto p-3'>
               <h5 style={{ color:"green" }}>Lista de <strong>Professores</strong>:</h5>
               <Table striped bordered hover>
                  {tabelaHeader}
                  <tbody>
                     {tabelaProfessoresBody}
                  </tbody>
               </Table>
               <hr style={{ color:"green" }}></hr>
               <h5 style={{ color:"green" }}>Lista de <strong>Encarregados de Educação</strong>:</h5>
               <Table striped bordered hover>
                  {tabelaHeader}
                  <tbody>
                     {tabelaResponsaveisBody}
                  </tbody>
               </Table>
            </div>
         </>
      );

   }

} export default Listas;