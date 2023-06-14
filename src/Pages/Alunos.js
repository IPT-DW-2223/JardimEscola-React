
import React from 'react';
import Table from 'react-bootstrap/Table';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


// Importar a API.
import {getAlunos, avaliarAluno} from '../Api.js';

/**
 * Classe src/Pages/Alunos.js
 */
class Alunos extends React.Component {

   state = {
      alunos: [],             // Lista de alunos vinda da base de dados via API.
      avaliacao: '',          // Valor selecionado na combobox das avaliações.
      alunoSelecionado: null  // Guarda o Id do aluno que queremos avaliar.
   }

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

   async handleAvaliarAluno(alunoId) {
      try {
         const { avaliacao } = this.state;
         await avaliarAluno(alunoId, avaliacao);
      } catch (error) {
         console.error('Erro ao enviar a avaliação do aluno.', error);
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
               <th>Id</th>
               <th>Nome</th>
               <th>Data de Nascimento</th>
               <th>NIF</th>
               <th>Responsável</th>
               <th>Avaliação</th>
               <th>Opções</th>
            </tr>
         </thead>
      );
      
      // Constrói o body da tabela Alunos.
      this.state.alunos.forEach((aluno)=>{
         tabelaBody.push(
            <tr key={aluno.id}>
               <td>{aluno.id}</td>
               <td>{aluno.nome}</td>
               <td>{aluno.dataNascimento}</td>
               <td>{aluno.nif}</td>
               <td>{aluno.responsavel}</td>
               <td>{aluno.avaliacao}</td>
               <td>
                  <Form.Control as="select"
                  onChange={(e) => this.setState({ avaliacao: e.target.value })}>
                     <option>Não revela progressos</option>
                     <option>Revela progressos</option>
                  </Form.Control>
                  <br></br>
                  <Button variant="primary" onClick={() => this.handleAvaliarAluno(aluno.id)}>
                     Avaliar
                  </Button>
               </td>
            </tr>
         );
      });

      // Constrói a View.
      return(
         <>
         <div className='container mx-auto p-3'>
            
            <h3 style={{ color:"green" }}><strong>LISTA DE ALUNOS</strong></h3>
            <hr style={{ color:"green" }}></hr>
            <InputGroup className="mb-3">
               <InputGroup.Text id="procurarAluno">
                  <Image src="Icons\procurar.png" width={'30px'} rounded />
               </InputGroup.Text>
               <Form.Control
                  placeholder="Procurar por nome do aluno..."
                  aria-label="Procurar por nome do aluno..."
                  aria-describedby="procurarAluno"
               />
            </InputGroup> 
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