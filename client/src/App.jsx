import React from "react";
import { Button } from "./components/ui/button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { RouteIndex, RouteSignIn, RouteSignUp } from "./helpers/RouteName";
import Index from "./pages/Index";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteIndex} element={<Layout />}>
          <Route index element={<Index />} />
        </Route>
        <Route path={RouteSignIn} element={<Signin />}/>
        <Route path={RouteSignUp} element={<Signup />}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
