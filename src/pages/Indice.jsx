import { Outlet, Link } from "react-router-dom";
import {useState} from "react";


const Indice = () => {
  
  const [myRuta, setMyRuta] = useState('Descripcion')
  
  const changeTitulo = (route) => {
    setMyRuta(route)
    abrirMenu()
  };
  
  const abrirMenu= () =>{
    document.getElementById("listaMenu").classList.toggle("d-flex");
    document.getElementById("listaMenu").classList.toggle("d-none");
  }
  
  return (
    <>
      <nav className="menuNavegacion">
        <div id="botonMenu" onClick={abrirMenu}>
          <i className="fa-solid fa-house fa-xl"></i>
        </div>
        <ul id="listaMenu" className="d-none flex-column no-decoration-list">
          <li>
            <Link to="/" onClick={() => changeTitulo("Descripción")}>
              Historia y descripción
            </Link>
          </li>
          <li>
            <Link
              to="/InstalaccionesNecesarias"
              onClick={() => changeTitulo("Instalaciones Necesarias")}
            >
              Instalaciones Necesarias
            </Link>
          </li>
          <li>
            <Link to="/FirstApp" onClick={() => changeTitulo("Primera Aplicación")}>
              Primera Aplicación
            </Link>
          </li>
          <li>
            <Link to="/Babel" onClick={() => changeTitulo("Primera Aplicación")}>
              ¿Qué es Babel?
            </Link>
          </li>
          <li>
            <Link to="/JavaScriptModerno" onClick={() => changeTitulo("JavaScript Moderno")}>
              JavaScript Moderno
            </Link>
          </li>
          <li>
            <Link to="/Props" onClick={() => changeTitulo("Props")}>
              Props
            </Link>
          </li>
          <li>
            <Link to="/PropTypes" onClick={() => changeTitulo("PropTypes")}>
              PropTypes
            </Link>
          </li>
          <li>
            <Link to="/Hooks" onClick={() => changeTitulo("Hooks")}>
              Hooks
            </Link>
          </li>
        </ul>
        <div className="w-100 text-center">{myRuta}</div>
      </nav>
      <div id="contenidoPrincipal" className="my-5 mx-5">
        <Outlet />
      </div>
    </>
  );
};

export default Indice;
