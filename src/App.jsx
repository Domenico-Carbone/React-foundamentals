

import Header from './components/Header/Header.jsx';
import { Fragment } from "react";  //come importare un fragment che sostituisce il div padre
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from './components/Examples.jsx';

function App() {

  return (
    <>
      <Header />
      <main>
       <CoreConcepts />
       <Examples />
      </main>
    </>
  );
}

export default App;
