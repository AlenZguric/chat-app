import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "../css/body.css";


function App() {
  return (
   <React.Fragment>
    <NavBar/>
    <main>
      <h1>FRONT-END DEVELOPER</h1>
      <h3>završni rad</h3>
    </main>
    <Footer/>
   </React.Fragment>
  );
}

export default App;
