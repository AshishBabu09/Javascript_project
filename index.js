// var express = require("express");

// var app = express()

// app.get('/greeting', function(req,resp){
//     resp.send("Hello from API");
// });
// app.get('/time', function(req,resp){
//     var time = new Date().toLocaleTimeString();
//     resp.send(`Time is: ${time}`);
// })
// app.get('/date', function(req,resp){
//     var date = new Date().toLocaleTimeString();
//     resp.send(`Date is: ${date}`);
// })


// app.get('/wishes/:name', function(req, resp) {
//     var name = req.params.name;
//     resp.send(`Hello ${name}`);
// });

var express = require("express");
var app = express();

app.use(express.json());

let users = [
    { 
        id: 1, name: "Ali", age:25 
    },
    { id: 2, name: "sara", age:22

    }
];

app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    users.push(newUser);
    res.send(newUser);
});

app.get



// app.get('/', function(req, resp) {
//     resp.send("Hello from API");
// });


// app.get('/square/:n', function(req, resp) {
//     var n = Number(req.params.n);
//     resp.send(`Square of ${n} is: ${n * n}`);
// });


// app.get('/addition/:a/:b', function(req, resp) {
//     var a = Number(req.params.a);
//     var b = Number(req.params.b);
//     var c = a + b;
//     resp.send(`Add of ${a} and ${b} is: ${c}`);
// });

app.listen(9000, ()=>console.log("API start listening..."));