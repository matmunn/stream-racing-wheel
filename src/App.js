import React, { Component } from 'react';

import Wheel from './g920/wheel';
import Pedals from './g920/pedals';

import flatstore from 'flatstore';

let defaultButtons = [];
let defaultAxes = [];
for (let i = 0; i < 20; i++) {
  defaultButtons.push({ pressed: false, touched: false, value: 0 })
  defaultAxes.push(0);
}

flatstore.set("buttons", defaultButtons);
flatstore.set("axes", defaultAxes);
class App extends Component {
  constructor(props) {
    super(props)

    this.gamePads = {};

    this.start = 0;
    this.a = 0;
    this.b = 0;

    this.gamePadIndex = -1;

    this.state = {
      gameLoopStarted: false
    }

    this.gameLoop = this.gameLoop.bind(this);
    this.onGamepadConnected = this.onGamepadConnected.bind(this);
    window.addEventListener("gamepadconnected", this.onGamepadConnected);
  }

  onGamepadConnected(e) {
    var gp = navigator.getGamepads()[e.gamepad.index];
    console.log(
      "Gamepad connected at index %d: %s. %d buttons, %d axes.",
      gp.index, gp.id, gp.buttons.length, gp.axes.length
    );
    this.gamePads[gp.index] = gp;
    this.setState({ gamePads: this.gamePads })
    if (gp.id.toLowerCase().indexOf("wheel") > -1) {
      this.changeGamepad(gp.index);
    }
  }

  onChange(e) {
    this.changeGamepad(e.target.value);

  }

  changeGamepad(id) {
    console.log(id);
    this.gamePadIndex = id;
    this.setState({ gamepadIndex: id, gameLoopStarted: true })
    this.gameLoop();
  }

  render() {
    //let gamepads = navigator.getGamepads();
    //console.log(gamepads)
    var options = Object.values(this.gamePads).map(gp => {

      let isSelected = gp.index === this.gamePadIndex;
      return (<option selected={isSelected} value={gp.index}>{gp.id}</option>)

    }
    );

    return (
      <div style={{ paddingLeft: '50px', backgroundColor: '#133a4d' }}>
        <select name="gamepadSelection" onChange={(e) => { this.onChange(e) }}>
          {options}
        </select>
        <br />
        <div style={{ position: 'relative', top: '20px', }}>
          <Wheel axis={0} />
        </div>
        <div style={{ position: 'relative', top: '-170px', left: "30px", 'marginLeft': '50px' }}>
          <Pedals />
        </div>


      </div>

    )
  }

  buttonPressed(b) {
    if (typeof (b) == "object") {
      return b.pressed;
    }
    return b === 1.0;
  }

  gameLoop() {
    if (this.gamePadIndex === -1)
      return;

    //var gp = this.gamePads[this.gamePadIndex];
    var gp = navigator.getGamepads()[this.gamePadIndex];
    const buttonStates = gp.buttons.map(item => ({
      pressed: gp.buttons[item].pressed,
      touched: gp.buttons[item].touched,
      value: gp.buttons[item].value,
    });
    const axesStates = gp.axes.map(item => gp.axes[item]);

    flatstore.set("buttons", buttonStates);
    flatstore.set("axes", axesStates);

    this.start = requestAnimationFrame(this.gameLoop);
  }
}

export default App;
