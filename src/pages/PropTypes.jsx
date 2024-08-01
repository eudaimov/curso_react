const PropTypes = () => {
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
  let propTypeEjemplo = `
    import PropTypes from 'prop-types';
    function Greeting(props) {
      return &lt;h1>Hello, {props.name}&lt;/h1>;
    }
    Greeting.propTypes = {
      name: PropTypes.string.isRequired,
    };
   `;


  let propTypeCustom = `
    import PropTypes from 'prop-types';
    function NumberComponent({title}) {
     return &lt;div>{title}&lt;/div>;
    }

    NumberComponent.propTypes = {
      title: function(props, propName, componentName) {
        if (props[propName] < 1 || props[propName] > 100) {
          return new Error( \\\`Invalid prop \\\`\${propName}\\\` supplied to \\\`\${componentName} 
            \\\`. Value should be between 1 and 100.\\\`  );
        }
      },
    };
      `;
  return (
    <>
      <h1>PropTypes</h1>
      <p>
        PropTypes es una biblioteca en React que se utiliza para verificar los tipos de las props
        que se pasan a los componentes. Esto ayuda a asegurar que los componentes reciban los datos
        en el formato esperado, lo que puede prevenir errores y hacer que el código sea más robusto
        y fácil de mantener.
      </p>
      <h2>¿Cómo usar PropTypes?</h2>
      <ol>
        <li>
          <strong>Instalación:</strong> Primero, necesitas instalar la biblioteca prop-types si aún
          no lo has hecho:
        </li>
        <p className="code">npm install prop-type -e</p>
        <li>
          <strong>Importación y Uso:</strong> Luego, puedes importar PropTypes y definir los tipos
          de las props en tu componente. Aquí tienes un ejemplo básico:
        </li>
        <pre className="code" dangerouslySetInnerHTML={{ __html: propTypeEjemplo }}></pre>
      </ol>
      <h2>Tipos de Validadores</h2>
      <section>
        <p>PropTypes ofrece una variedad de validadores para diferentes tipos de datos:</p>
        <ul>
          <li>PropTypes.array: Verifica que la prop sea un array.</li>
          <li>PropTypes.bool: Verifica que la prop sea un booleano.</li>
          <li>PropTypes.func: Verifica que la prop sea una función.</li>
          <li>PropTypes.number: Verifica que la prop sea un número.</li>
          <li>PropTypes.object: Verifica que la prop sea un objeto.</li>
          <li>PropTypes.string: Verifica que la prop sea una cadena de texto.</li>
          <li>
            PropTypes.node: Verifica que la prop sea cualquier cosa que se pueda renderizar (números,
            cadenas, elementos, etc.).
          </li>
          <li>PropTypes.element: Verifica que la prop sea un elemento de React.</li>
          <li>
            PropTypes.instanceOf: Verifica que la prop sea una instancia de una clase específica.
          </li>
          <li>
            PropTypes.oneOf: Verifica que la prop sea uno de los valores especificados (similar a un
            enum).
          </li>
          <li>PropTypes.oneOfType: Verifica que la prop sea uno de los tipos especificados.</li>
          <li>PropTypes.arrayOf: Verifica que la prop sea un array de un tipo específico.</li>
          <li>
            PropTypes.objectOf: Verifica que la prop sea un objeto con valores de un tipo específico.
          </li>
          <li>PropTypes.shape: Verifica que la prop sea un objeto con una forma específica.</li>
          <li>
            PropTypes.exact: Verifica que la prop sea un objeto con una forma específica y sin
            propiedades adicionales.
          </li>
        </ul>
      </section>
      <h2>PropTypes Personalizados</h2>
      <p>Existe la posibilidad de cre crear PropTypes personalizados como por ejemplo:</p>
       <pre className="code" dangerouslySetInnerHTML={{ __html: propTypeCustom }}></pre>
    </>
  );
};
export default PropTypes;
