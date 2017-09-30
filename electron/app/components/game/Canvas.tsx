import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { subscribe } from '../../game_logic/mainLoop';

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
      canvasWidth: 200,
      canvasHeight: 200,
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
            // render(this._context, state, this.state.scaleFactor); This should be call to external render function to separate logic
            this._render(this._context, state, this.state.scaleFactor);
        });


        // REMOVE THIS
        this._testSprite = new Image();
        this._testSprite.src = 'assets/concept_images/green_body_1.png';
    }

    private test = 10;

    // TODO: Remove this, just for testing. Or at least move to another file
    _render(context: CanvasRenderingContext2D, state: any, scale: number) {
        // TODO

        // THIS IS JUST FOR TESTING
        context.clearRect(0,0,200,200);
        context.save();
        
        context.fillStyle = '#30' + this.test + '' + this.test;
        context.fillRect(0,0,200,200);

        this.test++;

        //let img = new Image();
        //img.src = 'assets/concept_images/green_body_1.png';

        //context.drawImage(img, 50, 50);
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