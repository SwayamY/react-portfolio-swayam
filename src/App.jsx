import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Techonologies from './components/Techonologies';
import Targs from './components/Targ';
import Projects from './components/Projects';
import Contact from './components/Contact';
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="w-full h-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen bg-slate-950">
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Techonologies/>
          <Targs/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    </div>
  );
};

export default App;
