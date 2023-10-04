import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "../components/HomeComponent/HomeComponent";
import QuizComponent from "../components/QuizComponent/QuizComponent";
import ResultComponent from "../components/ResultComponent/ResultComponent";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/HomeComponent" element={<HomeComponent />} />
        <Route path="/ResultComponent" element={<ResultComponent />} />
        <Route path="/QuizComponent" element={<QuizComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
