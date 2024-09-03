import Indice from "./Indice.jsx";

const ReactRouter= ()=>{
  const codigoEjemplo1 = `
    import React from "react";
  `;
  const codigoEjemplo2=  `
  ReactDOM.createRoot(document.getElementById('root')).render(
    &gt;React.StrictMode&gt;
      &lt;RouteComponent/&gt;
    &lt;/React.StrictMode&gt;,
  )
  `;
  const codigoEjemplo3= `
   &lt;BrowserRouter&gt;
     &lt;Routes&gt;
          &lt;Route path="/" element={&lt;Indice /&gt;}&gt;
     &lt;/Routes&gt;
   &lt;/BrowserRouter&gt;
  `;
    return (
      <>
        <h1>Rutas Navegación y Portales.</h1>
        <h2>Introducción</h2>
        El Router en una SPA es un enlace que simula la navegación entre páginas. Su objetivo
        principal es actuar como switch cuya función será la de ocultar y mostrar componentes. Su
        objetivo secundarío será la conservación de parámetros e historial de navegación.

        <h2>React Router</h2>
        <p>Es el componente más popular de React para llevar a cabo estas funciones.</p>
        <p>El switch es el núcleo principal del enrutamiento. Las rutas coinciden con las rutas
          URLs</p>
        <p>Los parámetros de ruta se marcan con dos puntos :id</p>
        <p>Hay un estrictos orden de prioridad que irá desde el menos específico al mas específico. </p>
        <p>Para su uso es necesario la importación de la librería necesaria:</p>
        <pre className="code" dangerouslySetInnerHTML={{__html: codigoEjemplo1}}></pre>

        <h2>Ejemplo de utilización:</h2>
        <pre className="code" dangerouslySetInnerHTML={{__html: codigoEjemplo2}}></pre>
        <pre className="code" dangerouslySetInnerHTML={{__html: codigoEjemplo3}}></pre>
        <h2>Diferencias entre BrowserRouter y HashRouter</h2>
        <section>
          <h3>HashRouter</h3>
          <p>Uso del hash en la URL: Utiliza el símbolo # en la URL para gestionar las rutas. Por
            ejemplo, una URL podría verse así: example.com/#/ruta.</p>
          <p>Compatibilidad: Es compatible con navegadores más antiguos y no requiere configuración
            especial del servidor.</p>
          <p>Funcionamiento: El enrutamiento se maneja completamente en el lado del cliente. El
            servidor no recibe información sobre la ruta específica, lo que simplifica la
            configuración.</p>
          <p>Casos de uso: Ideal para aplicaciones donde no se tiene control sobre el servidor o
            cuando se necesita compatibilidad con navegadores antiguos.</p>
          <h3>BrowserRouter</h3>
          <p>Uso de la API de historial de HTML5: Utiliza la API de historial para gestionar las
            rutas, lo que permite URLs más limpias sin el símbolo #. Por ejemplo, una URL podría
            verse así: example.com/ruta.</p>
          <p>Compatibilidad: Requiere navegadores modernos y configuración del servidor para manejar
            las rutas correctamente.</p>
          <p>Funcionamiento: El servidor debe estar configurado para devolver la misma página HTML
            para todas las rutas, permitiendo que el enrutador del lado del cliente maneje la
            navegación.</p>
          <p>Casos de uso: Ideal para aplicaciones donde se tiene control sobre el servidor y se
            desea una mejor experiencia de usuario con URLs más limpias.</p>
        </section>
      </>
    )
}
export default ReactRouter;
