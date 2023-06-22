
/**
 * Função que recebe os dados dos alunos através da API.
 * @returns Lista de alunos.
 */
export async function getAlunos() {
   // Fazer a conexão à API.
   let dadosAlunos = await fetch("api/Alunos/Lista", {credentials: "include"});

   // Verificar se os dados foram recebidos com sucesso.
   if (!dadosAlunos.ok) {
      throw new Error("Algo correu mal ao tentar aceder aos dados dos alunos. Código HTTP: ", dadosAlunos.state);
   }

   // Retornar os dados coletados em formato JSON.
   return await dadosAlunos.json();
}

/**
 * Função que recebe os dados dos professores através da API.
 * @returns Lista de professores.
 */
export async function getProfessores() {
   // Fazer a conexão à API.
   let dadosProfessores = await fetch("api/Professores/Lista", {credentials: "include"});

   // Verificar se os dados foram recebidos com sucesso.
   if (!dadosProfessores.ok) {
      throw new Error("Algo correu mal ao tentar aceder aos dados dos professores. Código HTTP: ", dadosProfessores.state);
   }

   // Retornar os dados coletados em formato JSON.
   return await dadosProfessores.json();
}

/**
 * Função que recebe os dados dos responsáveis através da API.
 * @returns Lista de responsáveis.
 */
export async function getResponsaveis() {
   // Fazer a conexão à API.
   let dadosResponsaveis = await fetch("api/Responsaveis/Lista", {credentials: "include"});

   // Verificar se os dados foram recebidos com sucesso.
   if (!dadosResponsaveis.ok) {
      throw new Error("Algo correu mal ao tentar aceder aos dados dos responsáveis. Código HTTP: ", dadosResponsaveis.state);
   }

   // Retornar os dados coletados em formato JSON.
   return await dadosResponsaveis.json();
}

/**
 * Função que envia a avaliação de um aluno para a API.
 * @param {*} alunoId 
 * @param {*} avaliacao 
 */
export async function avaliarAluno(alunoId, avaliacao) {
   try {
      let resposta = await fetch(`api/Alunos/Avaliar?alunoId=${alunoId}`, {
         method: "POST",
         headers: {
            'Content-Type': 'application/json'
         },
         credentials: "include",
         body: JSON.stringify(avaliacao)
      });
      console.log("aluno: " + alunoId + " // avaliacao: " + avaliacao);
   } catch (erro) {
      console.log("Erro ao enviar a avaliação.");
   }
}

/**
 * Função para validar o login no servidor através da API.
 */
export async function login(username, password) {

   try {
      let resposta = await fetch("api/Login", {
         method: "POST",
         headers: {
            'Content-Type': 'application/json'
         },
         credentials: "include",
         body: JSON.stringify({
            username: username,
            password: password
         })
      });
      let token = resposta.data;
      console.log(token);
   } catch (error) {
      console.log("Erro ao validar login.");
   }

}
