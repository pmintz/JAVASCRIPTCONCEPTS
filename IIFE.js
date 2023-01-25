let product = function(){
    console.log(5*5);
}(); //add these paranthesis  and comment out product function call and this will run automatically

//product();

//IIFE
//Here we are not assigning the function to a variable
//We have to enclose the function within parathesis otherwise an error will occur
//This error occurs because we are not naming the function.  The javascript engine is expecting a function declaration.

(function(){
    console.log(5*6);
}());

//this also works

(function(){
    console.log(6*6);
})();

//this also works

(() =>{
    console.log(6*7);
})();