// Returning response on request (when someone visit localhost:3000) 
// we are returning html

const ht = require('http');

const serv = ht.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page...</title></head>');
    res.write('<body><h1>Hi this is kartik saxena and this is my node.js page</h1></body>');
    res.write('</html>');
    res.end();

    // process.exit();
    // process.exit() is used to exit from the loop after the first request i.e the node.js code will stop executing once the first request is send
});

serv.listen(3000);


// we have to set one of the predefined headers in node.js check Docs /resourses
// we use .setHeader() to set header
// .write() is used to return html 
// we will learn a much better way to return html using TEMPLATING when we learn Express.js
// .end() tells that the response/html has eneded hence we use .write() after the .end() then it will give us a error
// process.exit() is used to exit from the loop after the first request i.e the node.js code will stop executing once the first request is send