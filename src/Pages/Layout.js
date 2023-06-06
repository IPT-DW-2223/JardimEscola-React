
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';

import { Outlet, Link } from "react-router-dom";

const Layout = () => {

   return(
      <>
      <header>
         <Navbar bg="primary" variant="dark">
            <Container>
               <Navbar.Brand><Link to="/" style={{ color:"white" }}>Jardim Escola</Link></Navbar.Brand>
               <Nav className="me-auto">
                  <Nav.Link>
                     <Button variant="outline-primary">
                        <Link to="/Alunos" style={{ color:"white" }}>Alunos</Link>
                     </Button>
                  </Nav.Link>
                  <Nav.Link>
                     <Button variant="outline-primary">
                        <Link to="/Responsaveis" style={{ color:"white" }}>Responsaveis</Link>
                     </Button>
                  </Nav.Link>
               </Nav>
            </Container>
         </Navbar>
      </header>

      <Outlet />

      <footer>
         <div className='border-top text-center p-2 fixed-bottom'>
            <p>
               Projeto desenvolvido no âmbito da U.C. de Desenvolvimento Web de Licenciatura em Engenharia Informática. Ano letivo 2022-23
            </p>
         </div>
      </footer>
      </>
   )

};

export default Layout;
