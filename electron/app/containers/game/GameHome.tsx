import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Game from '../../components/game/Game';

import { Loop, Stage } from 'react-game-kit';

export class GameHome extends React.Component<RouteComponentProps<any>, void> {
  render() {
    return (
      <Game />
    );
  }
}

export default (GameHome as any as React.StatelessComponent<RouteComponentProps<any>>);
