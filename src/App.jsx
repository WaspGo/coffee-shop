import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";
import Header from "./header";
import Footer from "./footer";

import LandingPage from "./LandingPage";
import OurCoffee from "./OurCoffee";
import AboutIt from "./aboutit";
import ForYourPleasure from "./foryourpleasure";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="relative bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/ourcoffee" element={<OurCoffee />} />
              <Route path="/abouiit" element={<AboutIt />} />
              <Route
                path="/foryourpleasure"
                element={<ForYourPleasure />}
              ></Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
