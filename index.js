import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'TOG',
       header: "Header from state...",
        content: "Content from state..."
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
              <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
        </p>
      </div>
    );
  }
}

render(<App headerProp = "Header from props..." contentProp = "Content from props..."/>, document.getElementById('root'));
