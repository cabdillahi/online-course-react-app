import About from "./About";
import AppContent from "./components/AppContent";
import Contact from "./Contact";
import Home from "./Home";
import CounterApplication from "./counter-application";

const App = () => {
  return (
    <div className="flex  gap-10">
     {/* <CounterApplication/> */}
    <About/>
    <Contact/>
    <Home/>
    </div>
  );
};

export default App;
