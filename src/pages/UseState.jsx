import {useState} from "react";

const UseState = () => {
  let useStateImport = `
    import {useState} from "react";
    
    const UseHook=()=>{
      const [color, setColor] = useState("");
      let claseColor ='bg-white';
      switch (color){
        case 'rojo':
          claseColor='bg-red';
          break;
        case 'verde':
          claseColor='bg-green';
          break;
      }
      const seleccionarColor = (colorElejido)=>{
        setColor(colorElejido);
      }
      return (
        <>
            <p>¿Cual es tu color favorito?</p>
            <div>
          <button className="bg-green" onClick={() => {
            seleccionarColor("verde")
          }}>Verde</button>
          <button className="bg-red" onClick={() => {
            seleccionarColor("rojo")
          }}>Rojo</button>
            </div>
            <p className={claseColor}>Mi color favorito es: {color} </p>
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
          Es el Hook más básico. Nos permite hacer un seguimiento sobre el estado de un Functional
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
