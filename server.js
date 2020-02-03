var express = require("express");
var app = express(); // create an app


app.get('/',(req,res) => { 
    console.log("Someone wants the root page");
    res.send("Hello my friend!");
});

app.get('/contact',(req,res) => {
    res.send("This will be the contact page, people working over here!!!");
});

app.get('/aboutme',(req,res) => {
    res.send("<h1 style='color:blue;'> Xiaochen Liu <h1>");
});

app.get('/exc/:message',(req,res) => {
    console.log("Message from client: ", req.params.message);
    
    var msj = req.params.message;
    var vowels = '';
    var allVowels = ['a','e','i','o','u'];
    
    

    // 1 travel the msj string and print on the console each letter
    for (var i=0;i<msj.length;i++){
        var letter = msj[i];
        console.log(letter);
    // 2 check if each letter is a vowel
        if (allVowels.indexOf(letter.toLowerCase()) != -1){
            //  if it is, add the vowel to vowels string

            // 3 return each vowel ONLY ONCE
            // hello -> eo
            // this is a test => iae

            // DECIDE
                /* if (vowels.indexOf(letter.toLowerCase())= -1) {
                    vowels += letter;
                } */
                vowels += letter;  
        }

    };



    res.status(202);
    res.send(vowels);
});


//HOMEWORK

app.get('/forexample',(req,res) => {
    res.send("<h1 style='color:blue;'> Here will be examples. <h1>");
});
app.get('/about',(req,res) => {
    res.send("<h1 style='color:blue;'> About what... <h1>");
});

app.listen(8080,function(){
    console.log("Server running at http://localhost:8080");
    console.log("Press Ctrl+C to kill it");
});