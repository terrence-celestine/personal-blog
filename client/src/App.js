import React from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="wrapper">
          <Header />
          <div className="main-section-wrapper">
            <main id="main-container">{this.props.children}</main>
            <Sidebar />
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
