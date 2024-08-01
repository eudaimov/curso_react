const GitHubPages= ()=>{
  const ghpages= `
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
  const configuracionVite=`
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
            <li>Usa HashRouter en lugar de BrowserRouter (Ver RouteComponent de este mismo proyecto)</li>
            <li>Si estas utilizando vite cambia la configuración de la carpeta de salida añadiendo en el archivo vite.config.js:</li>
               <pre className="code" dangerouslySetInnerHTML={{ __html: configuracionVite }}></pre>
            <li>Ejecuta los comando npm run predeploy y a continuación npm run deploy</li>
            <li>Copia la carpeta dist a la carpeta docs</li>
            <li>Comitea los cambios y subelos al repositorio</li>
            <li>Configura Github Pages para que apunte  a la rama correcta y a la ruta docs</li>

          </ol>
        </>
    )
}
export default GitHubPages;
