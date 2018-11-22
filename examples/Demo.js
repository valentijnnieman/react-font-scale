import React from "react";
import { ScaleFont } from "../dist/react-font-scaler";
import "./Demo.css";

class App extends React.Component {
  render() {
    return (
      <ScaleFont base={16} scale={1.5}>
      <div>
        <h1>A H1 header, perfectly scaled</h1>
        <h2>A H2 header, perfectly scaled</h2>
        <h3>A H3 header, perfectly scaled</h3>
        <h4>A H4 header, perfectly scaled</h4>
        <p>Some text, in a paragraph, perfectly scaled</p>
        <div>
          <div>
            <p>Nested content, <small>small text</small></p>
          </div>
          <div>I want nothing to do with this</div>
        </div>
      </div>
      </ScaleFont>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
        <App />
    );
  }
}

export { Example };
