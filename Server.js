//creates server
const http = require('http');
const fs = require ('fs');
//install lodash from npm first
const _ = require('lodash')


//fyi the req.url tells us the path a user went
const server = http.createServer((req, res) => {
//    console.log (req.url, req.method); //replace with lodash
    const num = _.random(0,20);
    console.log(num);
    const greet = _.once(() => {
        console.log('Hello');
    });
    greet();
                    //console.log('Request Made');
                    //set header content type first
                    
                    //this is just for plain text
                    //res.setHeader('Content-Type', 'text/plain');
                    
                    //this is for HTML
     res.setHeader('Content-Type', 'text/html');
                    // res.write('<head><link rel="styleseet" href="#"></head');
                    // res.write('<p>Hello Jess</p>');
                    // res.write('<p>How are you today</p>');
                    // res.end();
                            //there is a cleaner way to do this using fs
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
                    //    fs.readFile('./views/index.html', (err,data) => {
    fs.readFile(path, (err,data) => {
        if  (err) {
            console.log(err);
        } else {
            //res.write(data);
            res.end(data);
        }
    })


});

//listening on localhost port 3000
server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000')
})

;
//ctrl c to cancel out
