import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { subscribe } from '../../game_logic/MainLoop';

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
      canvasWidth: null,
      canvasHeight: null,
      styleWidth: null,
      styleMaxHeight: null,
    };
  
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;

    componentDidMount() {
        this._canvas = (ReactDOM.findDOMNode(this) as HTMLCanvasElement);
        this._context = this._canvas.getContext('2d');

        // Subscribe to game loop and render each loop
        subscribe((state) => {
            // render(this._context, state, this.state.scaleFactor); This should be call to external render function to separate logic
            this._render(this._context, state, this.state.scaleFactor);
        });
    }

    // TODO: Remove this, just for testing. Or at least move to another file
    _render(context: CanvasRenderingContext2D, state: any, scale: number) {
        // TODO
        console.log('Rendering! Current tick is: ' + state.tick);
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