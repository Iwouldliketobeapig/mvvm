import Vue from '../src/index.js';

let app = new Vue({
  el: 'test',
  data: {
    test: 'test'
  }
});

console.log(app._data.test);
app._data.test = 123;
console.log(app._data.test);
