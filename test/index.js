import Index from '../src/index.js';

let app = new Vue({
  el: 'test',
  template: '<span>{{test}}</span>'
  data: {
    test: 'test'
  }
});

console.log(app);
