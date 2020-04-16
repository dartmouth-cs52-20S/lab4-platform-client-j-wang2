import $ from 'jquery';
console.log('starting up!');

let num = 0;
function getSeconds(){
    $('#main').html(`You've been on this page for ${num} seconds.`);
    num++;

}

setInterval(getSeconds, 1000);