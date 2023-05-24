
//import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Alunos from './Views/Alunos';
import Inicio from './Views/Inicio';
import Responsaveis from './Views/Responsaveis';

class App extends React.Component {
   
   state = {pagina: 0,}

   // Construção da página que será retornada como View.
   render() {
      const {pagina} = this.state;

      if (pagina === 0) {
         return (
            <body>
               <header>
                  <Navbar bg="primary" variant="dark">
                     <Container>
                        <Navbar.Brand onClick={ ()=>this.setState({ pagina : 0 }) }>Jardim Escola</Navbar.Brand>
                        <Nav className="me-auto">
                           <Nav.Link onClick={ ()=>this.setState({ pagina : 1 }) }>Alunos</Nav.Link>
                           <Nav.Link onClick={ ()=>this.setState({ pagina : 2 }) }>Responsaveis</Nav.Link>
                        </Nav>
                     </Container>
                  </Navbar>
               </header>

               <div classname="Container">
                   <Inicio />
               </div>

               <footer>
                  <div className='border-top text-center p-2 fixed-bottom'>
                     <p>
                        Projeto desenvolvido no âmbito da U.C. de Desenvolvimento Web de Licenciatura em Engenharia Informática. Ano letivo 2022-23
                     </p>
                  </div>
               </footer>
            </body>
         )
      } else if (pagina === 1) {
         return (
            <body>
               <header>
                  <Navbar bg="primary" variant="dark">
                     <Container>
                        <Navbar.Brand onClick={ ()=>this.setState({ pagina : 0 }) }>Jardim Escola</Navbar.Brand>
                        <Nav className="me-auto">
                           <Nav.Link onClick={ ()=>this.setState({ pagina : 1 }) }>Alunos</Nav.Link>
                           <Nav.Link onClick={ ()=>this.setState({ pagina : 2 }) }>Responsaveis</Nav.Link>
                        </Nav>
                     </Container>
                  </Navbar>
               </header>

               <div classname="Container">
                  <Alunos />
               </div>

               <footer>
                  <div className='border-top text-center p-2 fixed-bottom'>
                     <p>
                        Projeto desenvolvido no âmbito da U.C. de Desenvolvimento Web de Licenciatura em Engenharia Informática. Ano letivo 2022-23
                     </p>
                  </div>
               </footer>
            </body>
         )
      } else if (pagina === 2) {
         return (
            <body>
               <header>
                  <Navbar bg="primary" variant="dark">
                     <Container>
                        <Navbar.Brand onClick={ ()=>this.setState({ pagina : 0 }) }>Jardim Escola</Navbar.Brand>
                        <Nav className="me-auto">
                           <Nav.Link onClick={ ()=>this.setState({ pagina : 1 }) }>Alunos</Nav.Link>
                           <Nav.Link onClick={ ()=>this.setState({ pagina : 2 }) }>Responsaveis</Nav.Link>
                        </Nav>
                     </Container>
                  </Navbar>
               </header>

               <div classname="Container">
                  <Responsaveis />
               </div>

               <footer>
                  <div className='border-top text-center p-2 fixed-bottom'>
                     <p>
                        Projeto desenvolvido no âmbito da U.C. de Desenvolvimento Web de Licenciatura em Engenharia Informática. Ano letivo 2022-23
                     </p>
                  </div>
               </footer>
            </body>
         )
      }
   }

}

export default App;
