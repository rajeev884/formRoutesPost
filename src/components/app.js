import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* bLOg POst..... */}
        {this.props.children}
      </div>
    );
  }
}
