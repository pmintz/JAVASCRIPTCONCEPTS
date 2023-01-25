var objProto = {
    greet: function(){
        console.log(this.greeting + " World!");
    }
};

var Greeting = function(term){
        this.greeting = term;
};

Greeting.prototype = objProto;

window.obj = new Greeting("Howdy");

console.log(obj.greet());

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
    // document is ready. Do your stuff here
    window.obj = new Greeting("Howdy");
    console.log("hello")
  }

  var ready = function ready(callback) {
    if (document.readyState != "loading") callback();else document.addEventListener("DOMContentLoaded", callback);
  };
}