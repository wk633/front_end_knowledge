var name = 'global name';

function Cat() {
  this.name = 'cat name';
  this.foo = function() {
    console.log('cat.foo', this.name);
  }
  this.bc_foo = this.foo.bind(this);
}


var dog1 = new Dog();
dog1.fun(cat1.foo);
dog1.fun(cat1.bc_foo);
dog1.fun(() => {console.log('arrow func', this.name)})
dog1.fun(function() {console.log('common func', this.name)})

var cat1 = new Cat()

function Dog() {
  this.name = 'Big Dog';
  this.fun = function(f){
    var ff = f;
    ff();
  }
}
