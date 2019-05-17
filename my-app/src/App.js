import React from 'react';
import { SignUpScene } from './Scenes/SignUpScene';
import { LoginScene } from './Scenes/LoginScene';

import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scene: ''
    };
  }

  changeScene(scene) {
    this.setState({ scene });
  }

  render() {
    return (
      <div>
        <h3>hello world</h3>

        <div id="button">
          <button onClick={() => this.changeScene('login-scene')}>log in</button>
          <button onClick={() => this.changeScene('signup-scene')}>sign up</button>
        </div>

        <br />

        {this.state.scene === 'login-scene' && (<LoginScene />)}
        {this.state.scene === 'signup-scene' && (<SignUpScene />)}
      </div>
    );
  }
}


export default App;
