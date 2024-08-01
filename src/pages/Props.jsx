const Props = () => {
  let propsEjemplo = `
  function Header(props) {
    return (
      &lt;div>
        &lt;h1>{props.title}&lt;/h1>
      &lt;/div>
    );
    //Manera actual
    function Header({title}) {
    return (
      &lt;div>
        &lt;h1>{title}&lt;/h1>
      &lt;/div>
    );
    
    &lt;Header title="Hola Mundo"/>
    
  `;
  let propsByDefault = `
    const ReactComponent = ({mipropiedad})=>{
      return(
        &lt;p> {mipropiedad} &lt;/p>
        );
      }
    export default ReactComponent;
    //Inserción del componente.
    import ReactComponent from 'ReactComponent.jsx';
    &lt;ReactComponent/>
  `;
  let propsByDefaultApart = `
    const ReactComponent = ({mipropiedad})=>{
      return(
        &lt;p> {mipropiedad} &lt;/p>
        );
      }
    ReactComponent.defaultProps = {
      mipropiedad: 'valor por defecto',
      segundaPropiedad: 'valor por defecto'
    }
    export default ReactComponent;
    //Inserción del componente.
    import ReactComponent from 'ReactComponent.jsx';
    &lt;ReactComponent/>
  `;
  return (
    <>
      <h1>Props</h1>
      <p>
        En React, “props” es la abreviatura de propiedades. Los props son una forma de pasar datos
        de un componente principal a un componente secundario en una aplicación React. Son
        esenciales para la comunicación entre componentes y permiten que los componentes sean
        reutilizables y modulares12.
      </p>
      <h2>¿Cómo funcionan los Props?</h2>
      <ol>
        <li>
          Paso de Datos: Los props se pasan como atributos a los componentes de React y pueden
          contener varios tipos de datos, como cadenas, números, booleanos, objetos o incluso
          funciones1.
        </li>
        <li>
          Acceso a Props: Una vez que un componente recibe un prop, puede acceder y usar los datos
          dentro de ellos. Los props son de solo lectura, lo que significa que el componente
          secundario no puede modificar los props que recibe directamente1.
        </li>
        <li>
          Uso en Componentes: Aquí tienes un ejemplo básico de cómo usar props en un componente:
        </li>
      </ol>
      <p>Ejemplo</p>
      <pre className="code" dangerouslySetInnerHTML={{ __html: propsEjemplo }}></pre>
      <h2>Ventajas de Usar Props</h2>
      <ul>
        <li>
          Reutilización de Componentes: Permiten crear componentes reutilizables y configurables.
        </li>
        <li>
          Modularidad: Facilitan la creación de componentes modulares que pueden ser fácilmente
          integrados en diferentes partes de la aplicación.
        </li>
        <li>
          Flujo de Datos Unidireccional: Mantienen un flujo de datos unidireccional, lo que ayuda a
          mantener la lógica de la aplicación clara y predecible12.
        </li>
      </ul>
      <h2>Props por defecto</h2>
      <p>Se pueden crear Props con un valor por defecto. Por ejemplo:</p>
      <pre className="code" dangerouslySetInnerHTML={{ __html: propsByDefault }}></pre>
      <p>
        También podemos crear nuestros valores por defecto fuera de nuestro componente, por ejemplo:
      </p>
       <pre className="code" dangerouslySetInnerHTML={{ __html: propsByDefaultApart }}></pre>
    </>
  );
};
export default Props;
