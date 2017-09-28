import * as React from 'react';
import { Loop, Stage } from 'react-game-kit';

// let styles = require('./Home.scss');

export default class Game extends React.Component {
  render() {
    return (
        <Loop>
            <Stage>
                // Game specific components go here
            </Stage>
        </Loop>
    );
  }
}
