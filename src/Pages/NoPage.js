import React from 'react';
import Alert from 'react-bootstrap/Alert';

/**
 * Classe src/Pages/NoPage.js
 */
class NoPage extends React.Component {

   // Construção da página que será retornada como View.
   render() {

      return(
         <div className='container mx-auto p-3'>
            <Alert variant="danger">
               <Alert.Heading>ERRO</Alert.Heading>
               <p>A página não foi encontrada.</p>
            </Alert>
         </div>
      );

   }

} export default NoPage;