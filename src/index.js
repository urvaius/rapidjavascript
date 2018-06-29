/* eslint-env browser */
import _ from 'lodash';
import './style.css';
import Icon from './oneicon.svg';
import runCode from './code';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack', ' ']);
  element.classList.add('hello');
  btn.innerHTML = 'click me an check the console';
  btn.onclick = runCode;

  // add an image to our existing div
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(btn);
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
