import React from "react";
import "./App.css";
import HomeScreen from "./screen/Home";
import ApplicationMainScreen from "./screen/AppScreen";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// fetch on adding proxy middle ware to bypass cors

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplicationMainScreen />}>
          <Route index element={<HomeScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
