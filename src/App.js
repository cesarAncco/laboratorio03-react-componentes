import React from "react";
import Productos from "./components/Productos/Productos";

function App() {
  return (
    <div>
      <h2 className="text-center">Popular Dishes</h2>
      <Productos />
      <p className="text-center">Image from <span className="text-decoration-underline">Freepik</span></p>
    </div>
  );
}

export default App;
