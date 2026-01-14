import About from "./About";
import AppContent from "./components/AppContent";
import Contact from "./Contact";
import CounterApplication from "./counter-application";

const App = () => {
  return (
    <div className="flex  gap-10">
     {/* <CounterApplication/> */}
    <About/>
    <Contact/>
    </div>
  );
};

export default App;
