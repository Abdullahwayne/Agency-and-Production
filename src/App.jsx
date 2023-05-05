import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./global.styles.scss";
import Footer from "./Components/Footer";
import MainPage from "./Pages/mainPage";
import StateHome from "./Pages/stateHome";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/State" Component={StateHome}/>
      </Routes>

      {/* 
      {/* <Footer/> 
     <StateHome/>
     */}
    </div>
  );
}

export default App;
