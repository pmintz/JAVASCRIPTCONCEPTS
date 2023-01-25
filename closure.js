// A closure is the local vairables for a function - kept alive after the function has returned

//A closure is a function having access to the parent scope, even after the parent function has closed

var funct = function funct(){
    var a = 2, b=3;

    var funct2 = function funct2(){
        console.log(a+b);
    }

    //funct2();
    setTimeout(funct2, 1000);
};

funct();

//var funct3 = function funct3(){
   // console.log(a+b);
//};

//funct();

//funct3();

(function counter(){
    var cnt = 0,
        item1 = document.querySelector("#item1"),
        item2 = document.querySelector("#item2");
    
    var print = function print(){
        console.log(cnt);
    };

    item1.addEventListener("click", function count1(){
        cnt++
        print();
    });

    item2.addEventListener("click", function count2(){
        cnt++;
        print();
    });
})();



