var n = 1;

function f1() {
  var n = 2;
  function f2(){
    console.log(n);
  }
  return f2;
}

console.log(n);
var f3 = f1();
f3();
