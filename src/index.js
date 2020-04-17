import $ from 'jquery';
import './style.scss';

console.log('starting up!');

let num = 0;
function getSeconds() {
  $('#main').html(`You've been on this page for ${num} seconds.`);
  num += 1;
}

setInterval(getSeconds, 1000);
