import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div className='clock'>
        <div className='clock_num rotate30'>
          <div>፩</div>
        </div>
        <div className='clock_num rotate60'>
          <div>፪</div>
        </div>
        <div className='clock_num rotate90'>
          <div>፫</div>
        </div>
        <div className='clock_num rotate120'>
          <div>፬</div>
        </div>
        <div className='clock_num rotate150'>
          <div>፭</div>
        </div>
        <div className='clock_num rotate180'>
          <div>፮</div>
        </div>
        <div className='clock_num rotate210'>
          <div>፯</div>
        </div>
        <div className='clock_num rotate240'>
          <div>፰</div>
        </div>
        <div className='clock_num rotate270'>
          <div>፱</div>
        </div>
        <div className='clock_num rotate300'>
          <div>፲</div>
        </div>
        <div className='clock_num rotate330'>
          <div>፲፩</div>
        </div>
        <div className='clock_num rotate360'>
          <div>፲፪</div>
        </div>
        <div className='center' id='mil'>
          <div className='mil'></div>
        </div>
        <div className='center' id='sec'>
          <div className='sec'></div>
        </div>
        <div className='center' id='min'>
          <div className='min'></div>
        </div>
        <div className='center' id='hrs'>
          <div className='hrs'></div>
        </div>
      </div>
    )
  }

  updateClock = () => {
    const mil = document.getElementById('mil');
    const sec = document.getElementById('sec');
    const min = document.getElementById('min');
    const hrs = document.getElementById('hrs');

    let curTime = new Date();
    let milDeg = (curTime.getMilliseconds() / 1000) * 360;
    let secDeg = (curTime.getSeconds() / 60) * 360;
    let minDeg = (curTime.getMinutes() / 60) * 360;
    let hrsDeg = (curTime.getHours() / 12) * 360;

    mil.style.transform = `rotate(${milDeg}deg)`;
    sec.style.transform = `rotate(${secDeg}deg)`;
    min.style.transform = `rotate(${minDeg}deg)`;
    hrs.style.transform = `rotate(${hrsDeg}deg)`;
  }

  componentDidMount() {
    setInterval(() => {
      this.updateClock();
    }, 10);
  }
}

export default App
