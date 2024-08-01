const Hooks = () => {
  return (
    <>
      <h1>Hooks</h1>
      <h2>¿Que son los Hooks?</h2>
      <p>
        Como muy bien dice la palabras en ingles, los hooks son ganchos o garfios que permiten
        atrapar o coger propiedades de los Componentes/Funciones de React, así como los método de
        estado y su ciclo de vida.
      </p>
      <p>
        Por este motivo se ha dejado aparcado el uso de las clases en React como si fueran
        componentes.
      </p>
      <p>Se introdujeron en React a partir de la version 16.8</p>
      <h2>Principales reglas de uso de los Hooks</h2>
      <ul>
        <li>Los ganchos solo se pueden llamar dentro de los componentes de función de React.</li>
        <li>Los ganchos solo se pueden llamar en el nivel superior de un componente.</li>
        <li>Los ganchos no pueden ser condicionales</li>
      </ul>
      <h2>Principales Hooks de React</h2>
      <ul>
        <li>useState</li>
        <li>useEffect</li>
        <li>useContext</li>
        <li>useRef</li>
        <li>useReducer</li>
        <li>useCallback</li>
        <li>useMemo</li>
      </ul>
    </>
  );
};
export default Hooks;
