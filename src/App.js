
//import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Alunos from './Pages/Alunos';

import Layout from './Pages/Layout';
import NoPage from './Pages/NoPage';
import Listas from './Pages/Listas';
import Login from './Pages/Login';
import Inicio from './Pages/Inicio';

export default function App() {
   return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Login />} />
           <Route path="inicio" element={<Inicio />} />
           <Route path="alunos" element={<Alunos />} />
           <Route path="listas" element={<Listas />} />
           <Route path="login" element={<Login />} />
           <Route path="*" element={<NoPage />} />
         </Route>
       </Routes>
     </BrowserRouter>
   );
 }
 
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App />);
