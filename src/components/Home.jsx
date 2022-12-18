import React, { useContext, useState } from "react";
import UserContext from "../userContex";
function Home(props) {
  const userdata = useContext(UserContext);
  console.log(userdata);
  return (
    <div>
      <input
        type="text"
        name="nom"
        id=""
        value={userdata.nom}
        onChange={(e) =>
          userdata.setUser({ ...userdata.user, nom: e.target.value })
        }
        style={{ padding: 5, outline: "none" }}
      />
    </div>
  );
}

export default Home;
