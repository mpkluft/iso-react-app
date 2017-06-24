import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import './footer.css';

export default class Header extends Component {

//  constructor(props) {
//    super(props);
//  }

  render() {

    return (
      <footer className = 'footer'>
        <Grid>
          <div className = 'row'>
            <div className = 'col-md-12'>
              <div className = 'footer-wrap'>
              </div>
            </div>
          </div>
        </Grid>
      </footer>
    );
  }
}