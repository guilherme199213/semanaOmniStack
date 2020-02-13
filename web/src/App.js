import React, { useEffect, useState } from "react";
import api from "./services/api";

import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";
import Cabecalho from "./components/Cabecalho";

import "./Global.css";
import "./App.css";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");

      setDevs(response.data);
    }

    loadDevs();
  }, [devs]);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <navbar ClassName="navbar navbar-expand-lg navbar-light bg-light">
        <Cabecalho />
      </navbar>

      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;