
/**
 * Função que recebe os dados dos alunos através da API.
 * @returns Lista de alunos.
 */
export async function getAlunos() {
   // Fazer a conexão à API.
   let dadosAlunos = await fetch("api/Alunos/Lista");

   // Verificar se os dados foram recebidos com sucesso.
   if (!dadosAlunos.ok) {
      throw new Error("Algo correu mal ao tentar aceder aos dados dos alunos. Código HTTP: ", dadosAlunos.state);
   }

   // Retornar os dados coletados em formato JSON.
   return await dadosAlunos.json();
}

/**
 * Função que recebe os dados dos responsáveis através da API.
 * @returns Lista de responsáveis.
 */
export async function getResponsaveis() {
   // Fazer a conexão à API.
   let dadosResponsaveis = await fetch("api/Responsaveis/Lista");
   
   // Verificar se os dados foram recebidos com sucesso.
   if (!dadosResponsaveis) {
      throw new Error("Algo correu mal ao tentar aceder aos dados dos responsáveis. Código HTTP: ", dadosResponsaveis.state);
   }

   // Retornar os dados coletados em formato JSON.
   return await dadosResponsaveis.json();
}

