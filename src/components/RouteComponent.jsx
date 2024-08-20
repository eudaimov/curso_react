import { HashRouter, Route, Routes } from "react-router-dom";
import Indice from "../pages/Indice.jsx";
import Descripcion from "../pages/Descripccion.jsx";
import NoPage from "../pages/NoPage.jsx";
import InstalaccionesNecesarias from "../pages/InstalacionesNecesarias.jsx";
import FirstApp from "../pages/FirstApp.jsx";
import Babel from "../pages/Babel.jsx";
import JavaScriptModerno from "../pages/JavaScriptModerno.jsx";
import Props from "../pages/Props.jsx";
import PropTypes from "../pages/PropTypes.jsx";
import Hooks from "../pages/Hooks.jsx";
import GitHubPages from "../pages/GithubPages.jsx";
import UseState from "../pages/UseState.jsx";
import UseEffect from "../pages/UseEffect.jsx";
import UseContext from "../pages/UseContext.jsx";
import UseReducer from "../pages/UseReducer.jsx";
import UseRef from "../pages/useRef.jsx";

export default function RouteComponent() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Indice />}>
          <Route index element={<Descripcion />} />
          <Route path="/InstalaccionesNecesarias" element={<InstalaccionesNecesarias />} />
          <Route path="/FirstApp" element={<FirstApp />} />
          <Route path="/Babel" element={<Babel />} />
          <Route path="/JavaScriptModerno" element={<JavaScriptModerno />} />
          <Route path="/Props" element={<Props />} />
          <Route path="/PropTypes" element={<PropTypes />} />
          <Route path="/Hooks" element={<Hooks />} />
          <Route path="/UseState" element={<UseState />} />
          <Route path="/UseEffect" element={<UseEffect />} />
          <Route path="/UseContext" element={<UseContext />} />
          <Route path="/UseReducer" element={<UseReducer />} />
          <Route path="/UseRef" element={<UseRef />} />
          <Route path="/GithubPages" element={<GitHubPages />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
//import { BrowserRouter, Route, Routes } from "react-router-dom";
// Resto de import los omito
// export default function RouteComponent() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Indice />}>
//           <Route index element={<Descripcion />} />
//           <Route path="/InstalaccionesNecesarias" element={<InstalaccionesNecesarias />} />
//           <Route path="/FirstApp" element={<FirstApp />} />
//           <Route path="/Babel" element={<Babel />} />
//           <Route path="/JavaScriptModerno" element={<JavaScriptModerno />} />
//           <Route path="/Props" element={<Props />} />
//           <Route path="/PropTypes" element={<PropTypes />} />
//           <Route path="/Hooks" element={<Hooks />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
