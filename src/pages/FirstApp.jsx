const FirstApp = () => {
  const codigoEjemplo1 = `
            &lt;!DOCTYPE html&gt;
                &lt;html&gt;
                  &lt;head&gt;
                    &lt;script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin&gt;&lt;/script&gt;
                    &lt;script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin&gt;&lt;/script&gt;
                    &lt;script src="https://unpkg.com/@babel/standalone/babel.min.js"&gt;&lt;/script&gt;
                  &lt;/head&gt;
                  &lt;body&gt;
                
                    &lt;div id="mydiv"&gt;&lt;/div&gt;
                
                    &lt;script type="text/babel"&gt;
                      function Hello() &#123;
                        return &lt;h1&gt;Hello World!&lt;/h1&gt;;
                    &#125;
                        const container = document.getElementById('mydiv');
                        const root = ReactDOM.createRoot(container);
                        root.render(&lt;Hello /&gt;)
                    &lt;/script&gt;
                
                  &lt;/body&gt;
                &lt;/html&gt;
                `;
  const codigoEjemplo2 = `
        //Dentro de la etiqueta &lt;head
        &lt;script src="https://unpkg.com/@babel/standalone/babel.min.js">&lt;/script>
        const elementContainReact = document.querySelector('#root');
        const nombre= "Felix"
        const tag = '&lt;h1>Hola que tal estas {nombre}&lt;/h1>'
        ReactDOM.render(tag,elementContainerReact)
    `;
  return (
    <>
      <h1>Nuestra primera aplicación:</h1>
      <p>Cree una página html con el siguiente código:</p>
      <pre className="code" dangerouslySetInnerHTML={{ __html: codigoEjemplo1 }}></pre>
      <p>Algunas otras alternativas, manteniendo el cdn y la estructura general del html.</p>
      <pre className="code" dangerouslySetInnerHTML={{ __html: codigoEjemplo2 }}></pre>
      <p>
        Hay que tener en cuenta que esto dará error y esto se utiliza en la version anterior en React 17 ReactDOM ya no se
        utilizar sino createRoot sobre ReactDOM.
      </p>
    </>
  );
};

export default FirstApp;
