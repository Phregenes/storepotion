import React from "react";
import "./App.css";

import Header from "./components/Header";
import Menubar from "./components/Menubar";
import Main from "./components/Main";

function App() {
 return (
  <div className="App">
   <Header />
   <Menubar />
   <Main />
  </div>
 );
}

export default App;
