const UseState = () => {
  let useStateImport = `
    import {useState} from "react";
    `
  let useStateUso = `
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
        &lt;&gt;
            &lt;p&gt;¿Cual es tu color favorito?&lt;/p&gt;
            &lt;div&gt;
          &lt;button className="bg-green" onClick={() =&gt; {
            seleccionarColor("verde")
          }}&gt;Verde&lt;/button&gt;
          &lt;button className="bg-red" onClick={() =&gt; {
            seleccionarColor("rojo")
          }}&gt;Rojo&lt;/button&gt;
            &lt;/div&gt;
            &lt;p className={claseColor}&gt;Mi color favorito es: {color} &lt;/p&gt;
          &lt;/&gt;
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
