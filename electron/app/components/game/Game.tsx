import * as React from 'react';

// let styles = require('./Home.scss');

export default class Game extends React.Component {

componentDidMount() {
    //var canvas = <HTMLCanvasElement>document.getElementById("mycanvas");
    //const context = (HTMLCanvasElement)this.refs.canvas.getContext('2d')
    //this.setState({ context: context });
    //this.startGame();
    requestAnimationFrame(() => {console.log('Frame')});
}

render() {
    return (
        <div>
            <canvas ref="canvas"
                width="500"
                height="500"
            />
        </div>
    );
  }
}
