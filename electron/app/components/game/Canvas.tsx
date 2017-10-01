import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { subscribe } from '../../game_logic/mainLoop';
import { render } from '../../game_logic/render';

interface Props {
    onClick: (scaledX: number, scaledY: number) => void;
  }

  interface CanvasState {
    scaleFactor: number;
    width: number;
    height: number;
    canvasWidth: number;
    canvasHeight: number;
    styleWidth: string;
    styleMaxHeight: string;
  }

  class Canvas extends React.Component<Props, CanvasState> {
    state: CanvasState = {
      scaleFactor: 1,
      width: null,
      height: null,
      canvasWidth: 1000,
      canvasHeight: 1000,
      styleWidth: null,
      styleMaxHeight: null,
    };
  
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;

    private _testSprite: HTMLImageElement;

    componentDidMount() {
        this._canvas = (ReactDOM.findDOMNode(this) as HTMLCanvasElement);
        this._context = this._canvas.getContext('2d');

        // Subscribe to game loop and render each loop
        subscribe((state) => {
            render(this._context, state, this.state.scaleFactor);
            //this._render(this._context, state, this.state.scaleFactor);
        });

        // REMOVE THIS
        this._testSprite = new Image();
        this._testSprite.src = 'assets/game/sprites/robots/green_body_1.png';
    }

    private testX = 10;
    private testY = 400;
    private testDir = 1;

    // TODO: Remove this, just for testing. Or at least move to another file
    _render(context: CanvasRenderingContext2D, state: any, scale: number) {
        // TODO

        // THIS IS JUST FOR TESTING
        context.clearRect(0,0,1000,1000);
        context.save();
        
        context.fillStyle = '#303030';
        context.fillRect(0,0,1000,1000);

        //context.rotate(90);
        //x,y,w,h
        context.drawImage(this._testSprite, this.testX, this.testY, 50, 50);

        // THIS LOGIC IS JUST FOR TESTING, SHOULD BE REMOVED OR MOVED TO ANOTHER FILE
        if(this.testX > 800 || this.testX < 10) {
            this.testDir = -this.testDir;
        }

        this.testX += this.testDir;
    }

    render() {
        return (
            <canvas
                width={this.state.canvasWidth}
                height={this.state.canvasHeight}
            />
        )
    }

}

export default Canvas;