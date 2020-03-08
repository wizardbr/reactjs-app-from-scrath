import React, { Component } from 'react';

class TechList extends Component {
  state = {
    techList: [
      'react',
      'react native',
      'nodejs'
    ]
  };

  render() {
    return (
      <ul>
        <li>React</li>
        <li>React Native</li>
        <li>Nodejs</li>
      </ul>
    );
  }
}

export default TechList;