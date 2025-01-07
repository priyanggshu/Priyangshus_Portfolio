import { useState } from "react";
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Projects from "./components/Projects"

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? "dark": ""}`}>
    <div className="portfolio bg-slate-100 dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <Home dark={dark} setDark={setDark}/>
      <About />
      <Projects />
      <Contact />
    </div>
    </div>
  )
}

export default App
