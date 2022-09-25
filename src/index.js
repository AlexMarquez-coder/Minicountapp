//Import React
import React from "react";
//Importern React DOM
import ReactDOM from "react-dom/client";
//Importeer App
import App from "./App/App";
//Variabelen aan die we koppelen aan het html element root
const root = ReactDOM.createRoot(document.getElementById('root'));
//Renderen we die variabele
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);