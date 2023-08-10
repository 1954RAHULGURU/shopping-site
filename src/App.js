import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./shopping main/ShopPage";
import LogIn from "./shopping main/LogIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn></LogIn>}></Route>
        <Route path="/ShopPage" element={<ShopPage></ShopPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
