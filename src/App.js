import React, { useState } from "react";
import Header from "./componentes/Header/Header";
import Main from "./componentes/Main/Main";
import Sidebar from "./componentes/Sidebar/Sidebar";
import Footer from "./componentes/Footer/Footer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); 

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} /> 
      <Sidebar />
      <Main searchTerm={searchTerm || ""} /> 
      <Footer />
    </div>
  );
};

export default App;

