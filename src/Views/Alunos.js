
import React from 'react';

// Função que recebe os dados dos alunos através da API.
async function getAlunos() {
   // Fazer a conexão à API.
   let dadosAlunos = await fetch("api/Alunos");

   // Verificar se os dados foram recebido com sucesso.
   if (!dadosAlunos.ok) {
      throw new Error("Algo correu mal ao tentar aceder aos dados dos alunos. Código HTTP: ", dadosAlunos.state);
   }

   // Retornar os dados colectados em format JSON.
   return await dadosAlunos.json();
}

/**
 * Classe Alunos
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
         console.error("Erro: não foi possível ler os dados dos alunos.", ex)
      }
   }

   // Construção da página que será retornada como View.
   render() {
      let tabela = [];
      this.state.alunos.forEach((aluno)=>{
         tabela.push(<p>{aluno.nome}</p>);
      });

      return(
         <>
            <h2>Página Alunos</h2>
            {tabela}
         </>
      );

   }

} export default Alunos;