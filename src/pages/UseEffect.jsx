const UseEffect = () => {
  return (
    <>
      <h1>UseEffect</h1>
      <p>
        es un hook en React que te permite realizar efectos secundarios en componentes funcionales.
        Aquí tienes una explicación básica:
      </p>
      <p>Se utiliza para manejar efectos secundarios en componentes de React, como:</p>
      <ul>
        <li>Fetching de datos desde una API.</li>
        <li>Suscripciones a servicios o eventos.</li>
        <li>Manipulación directa del DOM.</li>
        <li>Limpieza de recursos cuando un componente se desmonta.</li>
      </ul>
      <h2>Dependencias</h2>
      <ul>
        <li>
          Sin dependencias ([]): El efecto se ejecuta solo una vez, después del primer renderizado.
        </li>
        <li>
          Con dependencias ([dep1, dep2]): El efecto se ejecuta después del primer renderizado y
          cada vez que alguna de las dependencias cambia.
        </li>
        <li>Sin array de dependencias: El efecto se ejecuta después de cada renderizado.</li>
      </ul>
    </>
  );
};
export default UseEffect;
