import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "../css/body.css";
import FaReactIcons from "./Components/FaReactIcons";


function App() {
  return (
   <React.Fragment>
    <NavBar/>
    <main>
      <section>
        <div className="title">
        <h1>FRONT-END DEVELOPER</h1>
        <h3>završni rad</h3>
        </div>
        <div className="files">
          <h4>App Dostupan na:</h4>
          <FaReactIcons/>
        </div>        
      </section>
    </main>
    <Footer/>
   </React.Fragment>
  );
}

export default App;
