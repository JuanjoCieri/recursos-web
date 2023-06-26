import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Resource from "./pages/resource/Resource";
import NotFound from "./pages/notfound/NotFound";
import Search from "./pages/search/Search";

function App() {
  console.log("Have a nice day 😄")
  console.log("Linkedin: https://www.linkedin.com/in/juan-jose-cieri")
  console.log("Github: https://www.github.com/JuanjoCieri")
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/:name"} element={<Resource />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path={"/search/:name"} element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
