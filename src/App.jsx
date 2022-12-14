// import reactLogo from './assets/react.svg'
import Nav from "./components/Header";
import Main from "./components/Main";
import Foot from "./components/Footer";
import About from "./pages/About";
import Error from "./components/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lang } from "./lang/lang";
import {context}  from "./context/context";
import { useState } from "react";
import Adduser from "./components/Adduser"
import Userlist from "./components/UserList" 
 
const App = () => {
  const [langs, setLangs] = useState(localStorage.getItem("lang") || "eng");

  return (
    <>
      <context.Provider value={{ lang, langs, setLangs }}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/task" element={<Main />} />
            <Route path="/adduser" element={<Adduser />} />
            <Route path="/userlist" element={<Userlist />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Foot />
        </BrowserRouter>
      </context.Provider>
    </>
  );
};

export default App;
