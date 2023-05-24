
//import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Alunos from './Views/Alunos';
import Inicio from './Views/Inicio';
import Responsaveis from './Views/Responsaveis';

class App extends React.Component {
   
   state = {variavel: 0,}

   render() {
      const {variavel} = this.state;

      if (variavel === 0) {
         return (
            <body>
               <header>
                  <Navbar bg="primary" variant="dark">
                     <Container>
                        <Navbar.Brand onClick={ ()=>this.setState({ variavel : 0 }) }>Jardim Escola</Navbar.Brand>
                        <Nav className="me-auto">
                           <Nav.Link onClick={ ()=>this.setState({ variavel : 1 }) }>Alunos</Nav.Link>
                           <Nav.Link onClick={ ()=>this.setState({ variavel : 2 }) }>Responsaveis</Nav.Link>
                        </Nav>
                     </Container>
                  </Navbar>
               </header>

               <div classname="Container">
                  <Inicio />
               </div>

               <footer>
                  <div className='text-center p-2 fixed-bottom'>
                     <p>
                        Projeto desenvolvido no âmbito da U.C. de Desenvolvimento Web de Licenciatura em Engenharia Informática. Ano letivo 2022-23
                     </p>
                  </div>
               </footer>
            </body>
         )
      } else if (variavel === 1) {
         return (
            <body>
               <header>
                  <Navbar bg="primary" variant="dark">
                     <Container>
                        <Navbar.Brand onClick={ ()=>this.setState({ variavel : 0 }) }>Jardim Escola</Navbar.Brand>
                        <Nav className="me-auto">
                           <Nav.Link onClick={ ()=>this.setState({ variavel : 1 }) }>Alunos</Nav.Link>
                           <Nav.Link onClick={ ()=>this.setState({ variavel : 2 }) }>Responsaveis</Nav.Link>
                        </Nav>
                     </Container>
                  </Navbar>
               </header>

               <div classname="Container">
                  <Alunos />
               </div>

               <footer>
                  <div className='text-center p-2 fixed-bottom'>
                     <p>
                        Projeto desenvolvido no âmbito da U.C. de Desenvolvimento Web de Licenciatura em Engenharia Informática. Ano letivo 2022-23
                     </p>
                  </div>
               </footer>
            </body>
         )
      } else if (variavel === 2) {
         return (
            <body>
               <header>
                  <Navbar bg="primary" variant="dark">
                     <Container>
                        <Navbar.Brand onClick={ ()=>this.setState({ variavel : 0 }) }>Jardim Escola</Navbar.Brand>
                        <Nav className="me-auto">
                           <Nav.Link onClick={ ()=>this.setState({ variavel : 1 }) }>Alunos</Nav.Link>
                           <Nav.Link onClick={ ()=>this.setState({ variavel : 2 }) }>Responsaveis</Nav.Link>
                        </Nav>
                     </Container>
                  </Navbar>
               </header>

               <div classname="Container">
                  <Responsaveis />
               </div>

               <footer>
                  <div className='text-center p-2 fixed-bottom'>
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
