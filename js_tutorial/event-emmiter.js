// ex 1
var events = require('events').EventEmitter;
var emitter = new events.EventEmitter();

emitter.on('newEvent', function(user){
    console.log(user);
});

emitter.emit('newEvent', "new event 1");
emitter.emit('newEvent', "new event 2");
// ex 2

var EventEmitter = require('events').EventEmitter;

var util = require('util');

var User = function(username){
    this.username = username;
}
util.inherits(User, EventEmitter);
var user = new User('alpap');
user.on('nuevent', function(props){
    console.log(props); // output =>
});
user.emit('nuevent', 'dancing');
user.emit('nuevent', 'and');
user.emit('nuevent', 'partying');

// ex 3

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', (text) => {
  console.log('an event occurred: '+ text);
});

myEmitter.emit('event',"I fired an event");
myEmitter.emit('event',"and a second one");