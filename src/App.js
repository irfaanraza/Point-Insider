import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TrendingNews from "./components/TrendingNews";
import BusinessNews from "./components/BusinessNews";

function App() {
      return (
            <>
                  <Router>
                        <Navbar />

                        <Routes>
                              <Route path='/' exact element={<Home />} />
                              <Route
                                    path='/trendingnews'
                                    element={<TrendingNews />}
                              />
                              <Route
                                    path='/businessnews'
                                    element={<BusinessNews />}
                              />
                        </Routes>
                        <Footer />
                  </Router>
            </>
      );
}

export default App;
