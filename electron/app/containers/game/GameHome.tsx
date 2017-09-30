import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Canvas from '../../components/game/Canvas';
import RunLoop from '../../game_logic/RunLoop';
import { runLoopCallBack } from '../../game_logic/mainLoop';

export class GameHome extends React.Component<RouteComponentProps<any>, void> {

  componentWillMount() {
    this.init();
  }

  init() {
    //const store = createStore
    const runLoop = new RunLoop();

    runLoop.onTick((dt) => {
      // TODO: Find out what store argument is
      runLoopCallBack(dt, null);
    });
  
    // Start the main game loop
    console.log('Initializing game loop');
    runLoop.start();
  }

  render() {
    return (
      <div>
        <Canvas onClick={(x,y) => console.log('Click on canvas with coords (' + x + ',' + y + ')!')}/>
      </div>
    );
  }
}

export default (GameHome as any as React.StatelessComponent<RouteComponentProps<any>>);
