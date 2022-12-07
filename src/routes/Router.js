import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import CreateRecipePage from "../pages/CreateRecipePage/CreateRecipePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

function Router() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/recipe/recipe:id" element={<DetailsPage/>}/>
            <Route path="/recipe/new" element={<CreateRecipePage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;
  