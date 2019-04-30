var obj = {
  prop: 'this is a property',
  something: 256,
  method: function() {
    console.log('you have invoked a method');
  },
};

for (var key in obj) {
  console.log(typeof obj[key]);

  console.log(key);
}

obj;
