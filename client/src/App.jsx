import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Upload from "./components/Upload";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(import.meta.env.VITE_APP_SERVER_URL)
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
