import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
//importa-se o App do arquivo App.js

const rootElement = document.getElementById("root");
//busca pela div que está no index.html que é chamada de root
ReactDOM.render(
  /*função render do object DOM, que recebe:
  um componente REACT e o segundo parametro é um elemento (DOMnode*)
  */

  //Sintaxe jsx:
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
