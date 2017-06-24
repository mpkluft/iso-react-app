import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import './header.css';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.clickMenuItem = this.clickMenuItem.bind(this);
  }

  clickMenuItem(e) {
    var curElement = e.target,
        allA = document.getElementsByClassName('menu')[0]
                       .getElementsByTagName('a');

    for(var i = 0; i < allA.length; i++) {
      allA[i].className = 'menu__a';
      allA[i].parentNode.className = 'menu__li';
    }

    curElement.className = 'menu__a_active';
    curElement.parentNode.className = 'menu__li_active';
  }

  render() {

    return (
      <header className = 'header'>
        <Grid>
          <div className ='row'>
            <div className = 'col-md-1'>
            LOGO
            </div>
            <div className = 'col-md-11'>
              <div className = 'menu'>
                <ul className = 'menu__ul'>
                  <li className = 'menu__li_active'>
                    <a onClick = {this.clickMenuItem} 
                       className = 'menu__a_active'
                       href = '#Main'>
                       Главная
                    </a>
                  </li>
                  <li className = 'menu__li'>
                    <a onClick = {this.clickMenuItem}
                       className = 'menu__a'
                       href = '#Portfolio'>
                       Портфолио
                    </a>
                  </li>
                  <li className = 'menu__li'>
                    <a onClick = {this.clickMenuItem}
                       className = 'menu__a'
                       href = '#AboutMe'>
                       Обо мне
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Grid>
      </header>
    );
  }
}
