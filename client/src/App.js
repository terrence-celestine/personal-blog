import React from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="wrapper">
          <Header />
          <div className="main-section-wrapper">
            <main id="main-container">{this.props.children}</main>
            <aside id="sidebar">
              <h4>Hi, I'm Terrence</h4>
              <p>
                I'm a self taught software developer. I love learning new
                languages, problem solving, and collaborating with other
                developers to make great products.
              </p>
              <ul>
                <li>Follow Me:</li>
                <li>
                  <a href="https://www.linkedin.com/in/terrence-celestine-803b1193/">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/terrence-celestine">Github</a>
                </li>
              </ul>
            </aside>
          </div>
          <Footer></Footer>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
