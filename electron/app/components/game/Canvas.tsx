import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { subscribe } from '../../actions/game/mainLoop';
import render from '../../game_logic/render';

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
      scaleFactor: 0.4,
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