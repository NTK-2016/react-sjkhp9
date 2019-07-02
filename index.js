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
        content: "Content from state...",
        data :[]
    };
     this.setStateHandler = this.setStateHandler.bind(this);
  };
 setStateHandler() {
      var item = "setState..."
      var myArray = this.state.data.slice();
	  myArray.push(item);
      this.setState({data: myArray})
   };
  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
           <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
          <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
              <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
             <h3>Array: {this.props.propArray}</h3>
              <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc(3)}</h3>
            <h3>Number: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>
            <h3>Object: {this.props.propObject.objectName1}</h3>
            <h3>Object: {this.props.propObject.objectName2}</h3>
            <h3>Object: {this.props.propObject.objectName3}</h3>
        </p>
      </div>
    );
  }
}
App.propTypes = {
   propArray: React.PropTypes,
     propBool: React.PropTypes,
   propFunc: React.PropTypes,
   propNumber: React.PropTypes,
   propString: React.PropTypes,
   propObject: React.PropTypes
}
App.defaultProps = {
   propArray: [1,2,3,4,5],
    propBool: true,
   propFunc: function(e){return e},
   propNumber: 1,
   propString: "String value...",
   
   propObject: {
      objectName1:"objeeectValue1",
      objectName2: "objewrqrctValue2",
      objectName3: "objectdsffValue3"
   }
}
render(<App headerProp = "Header from props..." contentProp = "Content from props..."/>, document.getElementById('root'));
