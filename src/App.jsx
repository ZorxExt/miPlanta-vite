import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import "./styles/index.css";
import { MainPage } from "./pages/MainPage";
import { Nosotros } from "./pages/Nosotros";
import { Faq } from "./pages/Faq";
import { Comunidad } from "./pages/Comunidad";
import { UserPanel } from "./pages/UserPanel";
import '@fontsource-variable/cairo';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="nosotros" element={<Nosotros />}></Route>
          <Route path="faq" element={<Faq />}></Route>
          <Route path="comunidad" element={<Comunidad />}></Route>
          <Route path="user_panel" element={<UserPanel />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
