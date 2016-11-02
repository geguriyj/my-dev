//require("../css/style.css");
var Vue = require("./vue.js");

var removeItem = function(key){
  appList.todos = appList.todos.filter(function(val){
    if(val.key !== key) return val;
  });
};

Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li><button v-on:click="remove(todo.key)"> X </button> {{ todo.value }}</li>',
  methods: {
    remove: function (key) {
      removeItem(key);
    }
  }
});


var appList = new Vue({
  el: '#app-list',
  data: {
    todos: [
//                    { value: 'Learn JavaScript' },
//                    { value: 'Learn Vue' },
//                    { value: 'Build something awesome' }
      { key : "key_0", value: 'Learn JavaScript' },
      { key : "key_1", value: 'Learn Vue' },
      { key : "key_2", value: 'Build something awesome' }
    ]
  },
  methods: {
    remove: function (key) {
      removeItem(key);
    }
  }
});

var appInput = new Vue({
  el: '#app-input',
  data: {
    item : ""
  },
  methods: {
    add: function () {
      appList.todos.push({"key" : "key_"+appList.todos.length, "value" : this.item});
      this.item = "";
    },
    remove: function (key) {
      removeItem(key);
    }
  }
});