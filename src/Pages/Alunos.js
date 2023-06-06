
import React from 'react';
import Table from 'react-bootstrap/Table';

// Importar a API.
import {getAlunos} from '../Api.js';

/**
 * Classe src/Pages/Alunos.js
 */
class Alunos extends React.Component {

   state = {alunos: [],}
   
   // Função que é executada quando este componente é iniciado.
   componentDidMount() {
      this.carregarDadosAlunos();
   }

   // Função para carregar os dados dos alunos através da API.
   async carregarDadosAlunos() {
      try {
         // Pedir os dados dos alunos à API.
         let alunosAPI = await getAlunos();
         // Guardar na variável de state, os dados recebidos.
         this.setState({ alunos: alunosAPI })
      } catch(ex) {
         // Mensagem de erro.
         console.error("Erro: não foi possível ler os dados dos alunos.", ex);
      }
   }

   // Construção da página que será retornada como View.
   render() {

      let tabelaHeader = [];     // Variável que contém conteúdo HTML para construir o header da tabela Alunos.
      let tabelaBody = [];       // Variável que contém conteúdo HTML para construir o body da tabela Alunos.

      // Constrói o header da tabela Alunos.
      tabelaHeader.push(
         <thead>
            <tr>
               <th>Nome</th>
               <th>Data de Nascimento</th>
               <th>NIF</th>
               <th>Responsável</th>
            </tr>
         </thead>
      );
      
      // Constrói o body da tabela Alunos.
      this.state.alunos.forEach((aluno)=>{
         tabelaBody.push(
            <tr key={aluno.id}>
               <td>{aluno.nome}</td>
               <td>{aluno.dataNascimento}</td>
               <td>{aluno.nif}</td>
               <td>{aluno.responsavel}</td>
            </tr>
         );
      });

      // Constrói a View.
      return(
         <>
         <div className='container mx-auto p-3'>
            
            <h3>LISTA DE ALUNOS</h3>
            <hr style={{ color:"green" }}></hr> 
            <Table striped bordered hover>
               {tabelaHeader}
               <tbody>
                  {tabelaBody}
               </tbody>
            </Table>
            <hr style={{ color:"green" }}></hr>

         </div>
         </>
      );
   }

} export default Alunos;