import React from 'react';
import './custom.css';


function Hi() {
  return <div>
    <strong>Hello, Muhammad Arslan Bashir {10+50}</strong>
    <br /><br /><br />
    <div id="div2">Unordered List With Style Types</div>
      <ul id="ulcircle">
        <li>Karachi</li>
        <li>Lahore</li>
        <li>Faisalabad</li>
        <li>Islamabad</li>
      </ul>

      <ul id="ulsquare">
      <li>Karachi</li>
        <li>Lahore</li>
        <li>Faisalabad</li>
        <li>Islamabad</li>
      </ul>

      <ul id="ulbullet">
        <li>Karachi</li>
        <li>Lahore</li>
        <li>Faisalabad</li>
        <li>Islamabad</li>
      </ul>
      <div id="div2">Ordered List With Style Types</div>
      <ol type="A">
        <li>Karachi</li>
        <li>Lahore</li>
        <li>Faisalabad</li>
        <li>Islamabad</li>
      </ol>
      <ol type="a">
        <li>Karachi</li>
        <li>Lahore</li>
        <li>Faisalabad</li>
        <li>Islamabad</li>
      </ol>
      <ol type="i">
        <li>Karachi</li>
        <li>Lahore</li>
        <li>Faisalabad</li>
        <li>Islamabad</li>
      </ol>
      <ol type="I">
        <li>Karachi</li>
        <li>Lahore</li>
        <li>Faisalabad</li>
        <li>Islamabad</li>
      </ol>
  </div>
}

export default Hi;