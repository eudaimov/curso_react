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

  let changeAttribeObject= `
      import { useState } from "react";
      import ReactDOM from "react-dom/client";
      
      function Car() {
        const [car, setCar] = useState({
          brand: "Ford",
          model: "Mustang",
          year: "1964",
          color: "red"
        });
      
        const updateColor = () => {
          setCar(previousState => {
            return { ...previousState, color: "blue" }
          });
        }
      
        return (
          &lt;&gt;
            &lt;h1&gt;My {car.brand}&lt;/h1&gt;
            &lt;p&gt;
              It is a {car.color} {car.model} from {car.year}.
            &lt;/p&gt;
            &lt;button
              type="button"
              onClick={updateColor}
            &gt;Blue&lt;/button&gt;
          &lt;/&gt;
        )
      }
      
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<Car />);
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
          En este contexto estado es entendido como a las propiedad y funciones de un
          componente.</p>
      </section>
      <h2>Uso e Inicialización</h2>
      <section>
        <p>Para utilizar un useState es necesario importarlo:</p>
        <pre className="code" dangerouslySetInnerHTML={{__html: useStateImport}}></pre>
        <p>Una vez importado, para crear y tener controlada cualquier propiedad necesitamos llamar
          al método useState()</p>
        <pre className="code" dangerouslySetInnerHTML={{__html: useStateUso}}></pre>
        <p>Tenga presente el proceso de iniciación, lectura y actualización</p>
      </section>
      <h2>¿Qué puede guardar UseState?</h2>
      <section>
        <p>Use State puede guardar multitud de información: cadenas, números, valores booleanos,
          matrices, objetos y cualquier combinación de estos.</p>
      </section>
      <h2>Actualización de Objetos y matrices</h2>
      <p>Cuando se actualiza el estado, se sobrescribe todo el estado.</p>
      <p> ¿Qué pasa si sólo queremos actualizar el color de nuestro coche?</p>
      <p> Si solo llamáramos setCar(&#123;color: "blue"&#125;), esto eliminaría la marca, el modelo y el año
        de nuestro estado.</p>
      <p> Podemos utilizar el operador de propagación de JavaScript para ayudarnos.</p>
      <pre className="code" dangerouslySetInnerHTML={{__html: changeAttribeObject}}></pre>

    </>
  );
};
export default UseState;
