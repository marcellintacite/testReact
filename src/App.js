import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import UserContext from "./userContex";

function App() {
  const [user, setUser] = useState({
    nom: "Aksanti",
    prenom: "tacote",
    age: 10,
    admin: false,
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Home />
        <span>
          {user.nom} {user.prenom}
        </span>
      </div>
    </UserContext.Provider>
  );
}

export default App;
