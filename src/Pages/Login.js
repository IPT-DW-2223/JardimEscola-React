
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

// Importar a API.
import {login} from '../Api.js';

/**
 * Classe src/Pages/Login.js
 */
class Login extends React.Component {

   // Construtor da classe.
   constructor(props) {
      super(props);
      this.state = { 
         email: '', 
         password: '', 
      };
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   // Evento que é executado quando..
   //    o valor do email é alterado.
   handleEmailChange(event) {
      this.setState({ email: event.target.value });
   }

   // Evento que é executado quando..
   //    o valor da password é alterada.
   handlePasswordChange(event) {
      this.setState({ password: event.target.value });
   }

   // Evento que é executado quando..
   //    clicamos no botão de login.
   async handleSubmit(event) {
      event.preventDefault();

      const { email, password } = this.state;
      
      try {
         const resposta = await login(email, password);
         console.log("Resposta: " + resposta);
         window.location = "/Alunos";
      } catch (error) {
         console.error("Erro ao fazer login:", error.menssage);
      }

      // Limpar os campos de email e senha após a submissão.
      this.setState({ email: '', password: '' });
   }

   // Construção da página que será retornada como View.
   render() {

      const { email, password } = this.state;

      return(
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-md-6">
                  <div className="card mt-5">
                     <div className="card-body">
                        <h2 className="card-title text-center mb-4">Entre com a sua conta</h2>
                        <hr></hr>
                        <form onSubmit={this.handleSubmit}>
                           <div className="form-group">
                              <label htmlFor="email">Email:</label>
                              <input
                                 type="email"
                                 id="email"
                                 className="form-control"
                                 value={email}
                                 onChange={this.handleEmailChange}
                                 required
                                 />
                           </div>
                           <div className="form-group">
                              <label htmlFor="password">Senha:</label>
                              <input
                                 type="password"
                                 id="password"
                                 className="form-control"
                                 value={password} 
                                 onChange={this.handlePasswordChange}
                                 required
                                 />
                           </div>
                           <br></br>
                           <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );

   }

} export default Login;