a = 41

var obj1 = {
  a: 39,
  f: function(){
    console.log(this.a);
  }
}
obj1.f();

var out = obj1.f
out()

var obj2 = {
  a: 40,
  f: function(callback) {
    a = callback.bind(this);
    a();
  }
}

obj2.f(obj1.f)
