import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./screens/About";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Portfolio from "./screens/Portfolio";
import Header from './components/Header'
import Contact from "./screens/Contact";

function App() {
    return (
        <Router>
                <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
