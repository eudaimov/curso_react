const Descripcion = () => {
  return (
    <>
      <h1>Historia y principales características</h1>
      <h2>Historia</h2>
      <section>
        <p>Es una librería de JavaScript.</p>
        <p>
          Fue creada en Facebook, por el ingeniero de software Jordan Walke, quien liberó un primer
          prototipo de React llamado &ldquo;FaxJS&ldquo;.
        </p>
        <p>
          Este fue influenciado por XHP de HTML una librería de componentes para PHP. Este fue usado
          por primera vez en el Feed de Noticias de Facebook en 2011 y después en Instagram en 2012.
        </p>
        <p>Se volvió código abierto en la JSConf US en mayo de 2013.</p>
        <p>
          React Native, permitió el desarrollo nativo para Android, iOS y UWP con React, esto fue
          anunciado por Facebook en la React Conf en febrero de 2015 y se volvió de código abierto
          en marzo de 2015.
        </p>
        <p>
          El 18 de abril de 2017, Facebook anuncio React Fiber, un nuevo conjunto de algoritmos
          internos para la renderización, esto es opuesto al viejo algoritmos de renderizado de
          React.
        </p>
        <p>
          React Fiber se convertiría en la base de cualquier mejora futura y desarrollo de funciones
          de la biblioteca React. La sintaxis actual para la programación con React no ha cambiado;
          solo ha cambiado la forma en que se ejecuta la sintaxis. El viejo sistema de renderizado
          de React, Stack, se desarrolló en un momento en que no se entendía el enfoque del sistema
          en el cambio dinámico. Stack fue lento para dibujar animaciones complejas, por ejemplo,
          tratando de lograrlo todo en un solo fragmento. Fiber divide la animación en segmentos que
          se pueden distribuir en varios fotogramas. Asimismo, la estructura de una página se puede
          dividir en segmentos que se pueden mantenerse y actualizar por separado. Las funciones de
          JavaScript y el objeto del DOM virtual son llamados "fibers" y cada uno se puede operar y
          actualizar por separado, lo que permite una representación en pantalla más suave.
        </p>
      </section>
      <h2>Descripción y principales características:</h2>
      <ul>
        <li>Crea interfaces de usuario a partir de componentes</li>
        <p>
          React te permite construir interfaces de usuario a partir de piezas individuales llamadas
          componentes. Crea tus propios componentes de React como Thumbnail, LikeButton, y Video.
          Luego combínalos para formar pantallas, páginas y aplicaciones.
        </p>
        <p>
          Sin importar si trabajas por tu cuenta o con otros miles de desarrolladores, utilizar
          React se siente igual. Está diseñado para permitirte combinar a la perfección componentes
          escritos por personas, equipos y organizaciones de forma independiente.
        </p>
        <li>Escribe componentes con código y marcado</li>
        <p>
          Los componentes de React son funciones de JavaScript. ¿Quieres mostrar algún contenido
          condicionalmente? Utiliza una sentencia if. ¿Mostrar una lista? Prueba la función map() de
          un array. Aprender React es aprender a programar.
        </p>
        <p>
          Esta sintaxis de marcado se llama JSX. Es una extensión de la sintaxis de JavaScript
          popularizada por React. Al poner marcado JSX cerca de la lógica de renderizado relacionada
          hace que los componentes de React sean fáciles de crear, mantener y eliminar.
        </p>
        <li>Añade interactividad dondequiera que la necesites</li>
        <p>
          {" "}
          Los componentes de React reciben datos y devuelven lo que debe aparecer en la pantalla.
          Puedes pasarles nuevos datos en respuesta a una interacción, como cuando el usuario
          escribe en un campo de texto. React actualizará entonces la pantalla para que se
          corresponda con los nuevos datos.
        </p>
        <p>
          No tienes que construir toda tu página con React. Añade React a tu página HTML existente y
          renderiza componentes interactivos de React en cualquier lugar de ella.
        </p>
        <li>Cubre todo el stack con un framework</li>
        <p>
          React es una biblioteca. Te permite agrupar componentes, pero no prescribe cómo hacer el
          enrutamiento y la obtención de datos. Para construir una aplicación completa en React,
          recomendamos un framework full-stack de React como Next.js o Remix.
        </p>
        <p>
          React también es una arquitectura. Los frameworks que la implementan te permiten obtener
          datos en componentes asíncronos que se ejecutan en el servidor o incluso durante la
          compilación. Lee datos de un archivo o una base de datos y pásalos hacia abajo a tus
          componentes interactivos.
        </p>
        <li>Utiliza lo mejor de cada plataforma</li>
        <p>
          {" "}
          A las personas les encantan las aplicaciones web y nativas por razones diferentes. React
          te permite construir tanto aplicaciones web como nativas utilizando las mismas
          habilidades. Se apoya en las fortalezas únicas de cada plataforma para permitir que tus
          interfaces se sientan naturales en cada una de ellas.
        </p>
        <p>
          Manténte fiel a la web. Las personas esperan que las páginas de las aplicaciones web
          carguen rápidamente. En el servidor, React te permite servir HTML bajo demanda mientras
          aún estás cargando datos, rellenando progresivamente el contendido faltante antes de que
          cargue ningún código de JavaScript. En el cliente, React puede usar APIs web estándares
          para mantener tu interfaz de usuario responsiva incluso en medio del renderizado.
        </p>
        <p>
          Logra una UI realmente nativa. Las personas esperan que las aplicaciones nativas se vean y
          se sientan como su plataforma. React Native y Expo te permiten construir aplicaciones en
          React para Android, iOS y más. Lucen y se sienten como nativas porque sus UIs son
          realmente nativas. No es una vista web: tus componentes de React renderizan vistas reales
          de Android e iOS provistas por la plataforma.
        </p>
        <p>
          Con React, puedes ser un desarrollador web y de aplicaciones nativas. Tu equipo puede
          producir para muchas plataformas sin sacrificar la experiencia de usuario. Tu organización
          puede tender puentes para romper el aislamiento entre plataformas y formar equipos que
          estén a cargo de funcionalidades completas de extremo a extremo.
        </p>
        <li>Actualiza cuando el futuro esté listo</li>
        <p>
          React atiende los cambios con cuidado. Cada commit de React se prueba en escenarios
          críticos para el negocio con más de mil millones de usuarios. Más de 100 000 componentes
          de React en Meta ayudan a validar cada estrategia de migración.
        </p>
        <p>
          El equipo de React siempre está investigando como mejorar React. Algunas investigaciones
          toman años en arrojar resultados. React tiene el listón alto para llevar una idea de
          investigación a producción. Solo enfoques probados se vuelven parte de React.
        </p>
      </ul>
    </>
  );
};
export default Descripcion;
