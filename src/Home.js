import React, {useState} from 'react'

import api from "./services/api";
import { logout } from "./services/auth";

const errorCSS = {
  color: 'red'  
};

export default function Home(props) {

  const [valorPublico, setValorPublico] = useState();
  const [valorAutenticado, setValorAutenticado] = useState();
  const [valorAutenticadoAdmin, setValorAutenticadoAdmin] = useState();
  const [errorMessage, setErrorMessage] = useState();

function autenticado(){
  
  api.get("/autenticado").then(res=>{    
    setErrorMessage("")
    console.log(res.data)
    setValorAutenticado(JSON.stringify(res.data))
  }).catch(error=>{
    setErrorMessage("Nao Autenticado")
    console.log(error)
  })    
}

function autenticadoAdmin(){
  
  api.get("/admin/teste").then(res=>{    
    setErrorMessage("")
    console.log(res.data)
    setValorAutenticadoAdmin(JSON.stringify(res.data))
  }).catch(error=>{
    setErrorMessage("SÛ para ADMIN")
    console.log(error)
  })    
}

function publico(){
  api.get("/publico/teste").then(res=>{
    setErrorMessage("")
    console.log("teste")  
    console.log(res.data)
    setValorPublico(res.data)
  }).catch(error=>{
    setErrorMessage("Erro ao acessar pagina publica")
    console.log(error)
  })    
}

function sair(){
  console.log("sair")
  props.history.push("/");
  logout();
}

    return (
      <div>
        <h1 style={errorCSS}>{errorMessage?errorMessage:""}</h1>
        <button onClick={()=>sair()}>Sair</button>
        <button onClick={()=>publico()}>Publico</button>
        <h1>Valor Pblico: {valorPublico}</h1>
        <button onClick={()=>autenticado()}>Autenticado</button>
        <h1>Valor Autenticado: {valorAutenticado}</h1>
        <button onClick={()=>autenticadoAdmin()}>Autenticado Admin</button>
        <h1>Valor Autenticado Admin: {valorAutenticadoAdmin}</h1>
      </div>
    )
 
}
