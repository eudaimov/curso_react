const JavaScriptModerno = () => {
  const templateString = `
		const nombre= 'Felix';
		const apellidos = 'García Sánchez';
		const nombreCompleto = \`\${nombre} \${apellidos}\`;
		console.info(nombreCompleto)
	`;
  const objetosLiterales = `
		const persona = {
			nombre: 'Felix',
			edad:49,
		}
		const juan = persona;
		juan.nombre= 'Juan';
		console.info('Persona')
		console.info(persona)
		console.info('Juan')
		console.info(juan)
	`;
  const objetosLiteralesCorrecto = `
		const persona = {
			nombre: 'Felix',
			edad:49,
		}
		const juan = {...persona};
		juan.nombre= 'Juan';
		console.info('Persona')
		console.info(persona)
		console.info('Juan')
		console.info(juan)
	`;
  const arrayEjemplo = `
	const array = new Array();
	const array2 = new Array(100);
	const array3 = []; \\\\La manera que se recomienda
	`;
  const addElementarray = `
		let arrayNuevo = [1,2,3,4];
		arrayNuevo.push(5);
		arrayNuevo=[...arrayNuevo,5]; \\\\ La manera que se recomienda, a mi no me convence.
	`;
  const funciones = `
		function saludar(nombre){
			console.info(\`Hola \${nombre}\`)
		}
		////Segunda manera
		const saludar = function(nombre){
			console.info(\`Hola \${nombre}\`)
		}
		////Tercera forma
		const saludar = (nombre)=>{
			console.info(\`Hola \${nombre}\`)
		}
	`;
  const objetoImplicito = `
		const getUsuarioActivo = (nombre)=>({
			uuid:'1111-0000-0000-00000',
			nombre: nombre
		})
		console.info(getUsuarioActivo('Félix'));
	`;
  const desestructuracion = `
		const persona= {
			nombre: 'Felix',
			edad: 20,
			fechaNacimiento: '06/24/1981'
			};
		const {nombre, edad} = persona;
	`;
  const desestructuracionCompleja = `
		const persona= {
			nombre: 'Felix',
			edad: 20,
			fechaNacimiento: '06/24/1981',
			direccion:{
				calle:'Polvoranca',
				numero:70,
				planta: 'Baja',
			}
		};
		const {nombre, edad, direccion, direccion:{calle, numero}} = persona;
		console.info( nombre+" Numero: "+numero);
		console.info(direccion);
	`;
  const desestructuracionArray = `
		const alfabeto= ['Alfa','Bravo', 'Charlie', 'Delta'];
		const [p1, , p3] = alfabeto;
		console.info(p3);
	`;
  let exportacion = `
		export nameObject;
		export default nameObject;
		export { object1, objet2};
		export { object1, objet2 as default};
		import {nameObject} from "./archivo.js";
		import NameObject from "./archivo.js"
		import {...} from "./archivo.js"
		import object2, {object1} from "./arhivos.js";
	`;
  return (
    <>
      <h1>JavaScript Moderno</h1>
      <h2>Variables y constantes</h2>
      <section>
        <p>
          Esta desaconsejado el uso de var para declarar variables se aconseja
          el uso de let y const
        </p>
        <p>
          let se utiliza para declarar variables mutables cuyo valor queda
          restringido a su scope o ámbito.
        </p>
        <p>
          El ámbito de una variable queda restringida al bloque donde se
          declaro. Su declaración esta determinado por la llaves en la se
          encuentra declarada.
        </p>
        <p>
          Si el valor de la variable se piensa mutar utiliza let sino se va
          mutar dentro de su ámbito utiliza const.
        </p>
        <p>
          Las variables const inmutables tienen una ventaja sobre let que es que
          los recursos en memoria utilizados son mucho menores.
        </p>
      </section>
      <h2>Template String</h2>
      <section>
        <p>Se uso está aconsejado para la insercción dinámica de variables.</p>
        <p>Por ejemplo</p>
        <pre
          className="code"
          dangerouslySetInnerHTML={{ __html: templateString }}
        ></pre>
      </section>
      <h2>Objetos Literales</h2>
      <section>
        <p>
          Un objeto litera es un objeto inicializado a traves de unas llaves.
        </p>
        <p>Las propiedades de un objeto se muestra por orden alfabéticos</p>
        <p>
          Un problema que nos encontramos es cuando a una nueva variable le
          asignamos el valor de otra variable que fue creado a traves de un
          objeto literal. Eso no se debe de hacer porque lo único que estamos
          creando una referencia en memoria pero las dos variables se utilizan
          como si fuera uno sólo.
        </p>
        <p>Lo que se recomienda el operador spread ...</p>
        <p>Ejemplo para darse cuenta del error:</p>
        <pre
          className="code"
          dangerouslySetInnerHTML={{ __html: objetosLiterales }}
        ></pre>
        <p>Ejemplo correcto:</p>
        <pre
          className="code"
          dangerouslySetInnerHTML={{ __html: objetosLiteralesCorrecto }}
        ></pre>
      </section>
      <h2>Array</h2>
      <section>
        <p>Existen varias formas de declarar un array:</p>
        <pre
          className="code"
          dangerouslySetInnerHTML={{ __html: arrayEjemplo }}
        ></pre>
        <p>Al igual existen varias formas de añadir un elemento a un array:</p>
        <pre
          className="code"
          dangerouslySetInnerHTML={{ __html: addElementarray }}
        ></pre>
      </section>
      <h2>Funciones</h2>
      <section>
        <p>Hay dos maneras de crear funciones.</p>
        <pre
          className="code"
          dangerouslySetInnerHTML={{ __html: funciones }}
        ></pre>
        <p>
          Para no sobreescribir por equivocación no se recomienda la primera
          manera de declarar una función.
        </p>
        <p>
          Hay una manera de retornar objetos implícitos mediante funciones
          flecha:
        </p>
        <pre
          className="code"
          dangerouslySetInnerHTML={{ __html: objetoImplicito }}
        ></pre>
      </section>
      <h2>Desestructuración de Objetos y de Array </h2>
      <section>
        <p>
          Es la manera que tenemos en Javascript de que la propiedades de un
          objetos las podámos extraer de manera automática en una variable.
        </p>
        <p>Por ejemplo</p>
        <pre
          className="code"
          dangerouslySetInnerHTML={{ __html: desestructuracion }}
        ></pre>
        <p>También podría ser mas complejo de la siguiente manera:</p>
        <pre
          className="code"
          dangerouslySetInnerHTML={{ __html: desestructuracionCompleja }}
        ></pre>
        <h2>Desestructuración de Array.</h2>
        <section>
          <p>
            En lugar de hacer con llaves se realiza con corchetes. Por ejemplo:
          </p>
          <pre
            className="code"
            dangerouslySetInnerHTML={{ __html: desestructuracionArray }}
          ></pre>
        </section>
      </section>
      <h2>Exportacion de funciones</h2>
      <section>
        <p>Se tiene que hacer un export de lo que queremos que se exporte</p>
        <p>Se tiene que hacer un import con lo que queremos importar</p>
        <pre
          className="code"
          dangerouslySetInnerHTML={{ __html: exportacion }}
        ></pre>
      </section>
    </>
  );
};
export default JavaScriptModerno;
