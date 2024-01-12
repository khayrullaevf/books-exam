import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import SingleArticle from "./components/SingleArticle.jsx/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleArticle />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about/:id" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
