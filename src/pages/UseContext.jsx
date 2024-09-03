const UseContext = () => {
  return (
    <>
      <h1>UseContext</h1>
      <h2>Definición</h2>
      <p>
        Es un hook en React que permite acceder a valores de contexto(estados) en componentes funcionales sin
        necesidad de pasar props manualmente a través de cada nivel del árbol de componentes. Esto
        es especialmente útil para compartir datos que necesitan ser accesibles en muchos
        componentes, como el tema de la aplicación, el usuario autenticado,etc...
      </p>
      <h3>El problema</h3>
      <p>El estado debe ser mantenido por el componente padre más alto en la pila que requiere
        acceso al estado.</p>
      <p>Para ilustrarlo, tenemos muchos componentes anidados. Los componentes en la parte superior
        e inferior de la pila necesitan acceso al estado.</p>
      <p>Para hacer esto sin contexto, necesitaremos pasar el estado como "props" a través de cada
        componente anidado. Esto se llama "prop boring".</p>

      <p>Aquí tienes un ejemplo básico para ilustrar cómo funciona useContext:
      </p>
      <ol>
        <li>
          <p>Crear el contexto:</p>
          <p>Usamos createContext para crear un nuevo contexto.</p>
        </li>
        <li>
          <p>Proveer el contexto</p>
          <p>Creamos un componente proveedor (ProveedorDeContexto) que envuelve a los componentes
            hijos y les proporciona el valor del contexto.</p>
        </li>
        <li>
          <p>Consumir el contexto</p>
          <p>Usamos useContext dentro de un componente consumidor (ComponenteConsumidor) para
            acceder al valor del contexto.</p>
        </li>
        <li>
          <p>Usar el proveedor en la aplicación.</p>
          <p>Envolvemos nuestra aplicación o parte de ella con el proveedor para que los componentes
            hijos puedan acceder al contexto.</p>
        </li>
      </ol>
    </>
  );
};
export default UseContext;
