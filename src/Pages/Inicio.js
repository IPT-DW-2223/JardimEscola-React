import React from 'react';

import Image from 'react-bootstrap/Image';

/**
 * Classe src/Pages/Inicio.js
 */
class Inicio extends React.Component {

   // Construção da página que será retornada como View.
   render() {

      return(
         <>
         <div className='container mx-auto p-3'>

            <Image width={500} height={300} src="Icons/ipt-logo.png" />

            <hr style={{ color:"green" }}></hr> 

            <h5 style={{ color:"green" }}><strong>Grupo de alunos:</strong></h5>
            <div className='row'>
               <div className='col'><h4><strong style={{ color:"green" }}>André Sá</strong> (<i>aluno21296@ipt.pt</i>)</h4></div>
               <div className='col'><h4><strong style={{ color:"green" }}>Bárbara Barbosa</strong> (<i>aluno19493@ipt.pt</i>)</h4></div>
            </div>

            <hr style={{ color:"green" }}></hr>

         </div>
         </>
      );

   }

} export default Inicio;