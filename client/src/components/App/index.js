import React from "react";
import "./index.css";

import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

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
