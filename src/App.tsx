import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Loading,
  Projects,
  Services,
  Showcase,
  TopButton,
} from "./components";
import AnimatedCursor from "react-animated-cursor";
import { AppLayout } from "./layout";

function App() {
  const [countdown, setCountDown] = useState(0);

  return (
    <>
      <div className="fixed top-0 left-0 z-[100000] ">
        <AnimatePresence>
          {countdown < 10 && (
            <motion.div
              className="bg-[#242424] "
              initial={{ translateX: 0 }}
              animate={{ translateX: 0 }}
              exit={{ translateX: "100%" }}
              transition={{ duration: 1.5 }}
            >
              <Loading countdown={countdown} setCountDown={setCountDown} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AppLayout>
        <Header />
        <Showcase />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Contact />
        {/* <Music /> */}
        <Footer />
        {/* <section className="h-screen"></section> */}
        <AnimatedCursor showSystemCursor />
        <TopButton />
      </AppLayout>
    </>
  );
}

export default App;
