import * as React from 'react';
import { Link } from 'react-router-dom';

let styles = require('./Home.scss');

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h1>Botscript</h1>
          <p>I promise not to create any html tables :3</p>
          <Link to="/game"> Play the game</Link>
        </div>
      </div>
    );
  }
}
