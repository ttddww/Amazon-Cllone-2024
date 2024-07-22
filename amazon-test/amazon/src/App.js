import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Routing from "./Router";
import Header from "./components/Header/Header";
import Auth from "./pages/Auth/Auth";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
      {location.pathname !== "/auth" && (
        <div>
          <Header />
          <Routing />
        </div>
      )}
    </>
  );
}

export default App;
