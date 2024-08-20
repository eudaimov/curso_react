const GitHubPages = () => {
  const ghpages = `
    npm install gh-pages --save-dev

  `;
  const packageJson = `
    "homepage": "https://&lt;tu-usuario&gt;.github.io/tu-repositorio"
    //Añade los siguientes script:
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d docs"
    }
  `;
  const configuracionVite = `
    export default defineConfig({
      plugins: [react()],
      build: {
        outDir: 'docs', // Cambia 'output' por la carpeta que desees
        emptyOutDir: true, // Limpia la carpeta de salida antes de construir
     },
    })
  `;
  return (
    <>
      <h1>Pasos necesarios para publicar en GitHub Pages</h1>
      <ol>
        <li>Instalar gh-pages</li>
        <pre className="code" dangerouslySetInnerHTML={{ __html: ghpages }}></pre>
        <li>Configura tu package.json</li>
        <pre className="code" dangerouslySetInnerHTML={{ __html: packageJson }}></pre>
        <li>
          Usa HashRouter en lugar de BrowserRouter (Ver RouteComponent de este mismo proyecto)
        </li>
        <li>
          Si estas utilizando vite cambia la configuración de la carpeta de salida añadiendo en el
          archivo vite.config.js:
        </li>
        <pre className="code" dangerouslySetInnerHTML={{ __html: configuracionVite }}></pre>
        <li>Ejecuta los comando <code>npm run predeploy</code> y a continuación <code>npm run deploy</code></li>
        <li>Copia la carpeta dist a la carpeta docs</li>
        <li>Modifica en la página index de la carpeta docs los src y href de los script y los link con un .(punto) delante</li>
        <li>Elimina el modo  &lt;React.StrictMode&gt;</li>
        <li>Guarda los cambios(Commit) y súbelos al repositorio(Push)</li>
        <li>Configura Github Pages para que apunte a la rama correcta y a la ruta docs</li>
      </ol>
    </>
  );
};
export default GitHubPages;
