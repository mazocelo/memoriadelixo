import React, { useState, useEffect } from "react";
import { Router,Route, Link } from "wouter";

// Import and apply CSS stylesheet
//import "./styles/styles.css";

// Where all of our pages come from
//import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";

// The component that adds our Meta tags to the page
//import Seo from './components/seo.jsx';
import Jogo from "./pages/jogo.jsx";

export default function Home() {
  return <Route path="" component={Jogo}></Route>;
}
