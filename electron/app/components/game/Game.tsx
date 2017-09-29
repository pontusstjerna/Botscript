import * as React from 'react';
import * as ReactDOM from 'react-dom';

// let styles = require('./Home.scss');

export default class Game extends React.Component {

    componentDidMount() {
        const canvas = (ReactDOM.findDOMNode(this.refs.canvas) as HTMLCanvasElement);
        const context = canvas.getContext("2d");
        this.setState({ context: context });
        //this.startGame();
        requestAnimationFrame(() => {console.log('Frame')});
    }

    render() {
        return (
            <div>
                <h1>Botscript</h1>
                <canvas ref="canvas"
                    width="500"
                    height="500"
                    style={{background: '#303030'}}
                />
            </div>
        );
    }
}
