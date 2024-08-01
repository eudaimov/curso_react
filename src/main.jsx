import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import RouteComponent from "./components/RouteComponent.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouteComponent/>
  </React.StrictMode>,
)
