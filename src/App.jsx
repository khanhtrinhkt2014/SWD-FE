import React from "react";
import Home from "./pages/home/home.page";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "./routes/main.route";

function App() {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  );
}

export default App;
