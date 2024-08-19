import {useState} from "react";

const UseState = () => {
  let useStateImport = `
    import { useState } from "react";
  `;
  const useStateUso= `
      import {useState} from "react";
      const UseHook=()=>{
      const [color, setColor] = useState("rojo");
      
      const seleccionarColor = (colorElejido)=>{
        setColor(colorElejido)
      }
      return (
      <>
              <p>¿Cual es tu color favorito?</p>
              <div>
                <button className="bg-green" onClick={() => {
                  seleccionarColor("Verde")
                }}>Verde</button>
                <button className="bg-red" onClick={() => {
                seleccionarColor("Rojo")
                }}>Rojo</button>
              </div>
              <p className={color==="Rojo"? 'bg-red':'bg-green'}>Mi color favorito es:{color} </p>
            </>
        )
      }
      export default UseHook;
  `;
  return (
    <>
      <h1>UseState</h1>
      <h2>Introducción</h2>
      <section>
        <p>
          Es el Hook más básico. Nos permite hacer un seguimiento sobre el estado de un Funtional
          Component de React.</p>
        <p>
          En este contexto estado es entendido como a las propiedad y funciones de un componente. Para
          utilizar un useState es necesario importarlo:
        </p>
         <pre className="code" dangerouslySetInnerHTML={{ __html: useStateImport }}></pre>
      </section>
      <h2>Uso e Inicialización</h2>
      <section>
        <p>Una vez importado, para crear y tener controlada cualquier propiedad necesitamos llamar al método useState()</p>
         <pre className="code" dangerouslySetInnerHTML={{ __html: useStateUso }}></pre>
      </section>
    </>
  );
};
export default UseState;
