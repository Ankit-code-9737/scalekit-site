import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Navbar and Footar
// import Navbar from "./Components/Navbar/Navbar";
import Nav from "./Components/Navbar/Nav";
import Footer from "./Components/Footer/Footer";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import BusinessFunding from "./Pages/BusinessFunding";
import CreateRepair from "./Pages/CreateRepair";
import Testimonials from "./Pages/Testimonials";
import ContactUs from "./Pages/ContactUs";

// Animation
import Aos from "aos";
import "../node_modules/aos/dist/aos.css";

// Page link
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Router>
        {/* <Navbar /> */}

        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/businessfunding" component={BusinessFunding} />
          <Route path="/createrepair" component={CreateRepair} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
