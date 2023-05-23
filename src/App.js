
//import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
   return (
      <body>

         <header>
            <Navbar bg="primary" variant="dark">
               <Container>
                  <Navbar.Brand href="#home">Jardim Escola</Navbar.Brand>
                  <Nav className="me-auto">
                     <Nav.Link href="#home">Início</Nav.Link>
                     <Nav.Link href="#creditos">Créditos</Nav.Link>
                  </Nav>
               </Container>
            </Navbar>
         </header>

         <div classname="Container">
            
         </div>

         <footer>
            <div className='text-center p-2 fixed-bottom'>
               <p>
                  Projeto desenvolvido no âmbito da U.C. de Desenvolvimento Web de Licenciatura em Engenharia Informática. Ano letivo 2022-23
               </p>
            </div>
         </footer>

      </body>
   );
}

export default App;
