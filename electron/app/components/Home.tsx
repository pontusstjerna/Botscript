import * as React from 'react';

let styles = require('./Home.scss');

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h3>I Like Juiiiiiiice!</h3>
        </div>
      </div>
    );
  }
}
