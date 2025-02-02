import { HashRouter as Router } from "react-router-dom"; // Ensure this is correctly imported
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <Router>
      {" "}
      {/* Ensures correct routing for GitHub Pages */}
      <div className="bg-[#171d32] h-auto w-full overflow-hidden">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
