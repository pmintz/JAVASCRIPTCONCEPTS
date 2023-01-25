//"use strict";

//let promise = asyncFunction();

//let promise2 = promise.then(function(val){
    //console.log("Yeah!! " + val);
    //return asyncFunction2();
//});

//promise2.then(function(val){
    //console.log("Second promise " + val);
//});

//chaining

//asyncFunction()
//.then(function(val){
    //console.log("Yeah!! " + val);
    //return asyncFunction2();
//})
//.then(function(val){
    //console.log("Second promise " + val);
//});

//console.log("the code is asynchronous");

let wordnikWords = "https://api.wordnik.com/v4/words.json/",
    wordnikWord = "http://api.wordnik.com/v4/word.json/",
    apiKey = "?api_key=gn7l93m1aneuvhfjtuvi6bns332jhqpnzj26bo7qnot8q8jqq",
    wordObj;

fetch(wordnikWords + "randomWord" + apiKey)
.then(function(response){
    wordObj = response;
    //console.log("printing...");
    //console.log(response.json.word)
    return response.json();
})
.then(function(data){
    //console.log(data);
    console.log(data.word);
    return fetch(wordnikWord + data.word + "/definitions" + apiKey);
})
.then(function(def){
    return def.json();
})
.then(function(def){
    console.log(def);
})
.catch(function(err){
    console.log(err);
});

console.log("async code is running...");