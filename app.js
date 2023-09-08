const express = require('express');

const app = express ();

//sets the view engine as EJS
app.set('view engine', 'ejs');


//listen for requests

app.listen(3000);

//listen to root or domain
app.get('/', (req,res)=> {
    //res.send('<p>Home page</p>');
    //res.sendFile('./views/index.html', {root: __dirname});
    res.render('index', { TitleProperty: 'Home' });
});

app.get('/about', (req,res)=> {
    //res.send('<p>About page</p>');
    //res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', { TitleProperty: 'About' });
});

//     app.get('/about-us',(req,res) => {
//     res.redirect('about');
// })
// });

app.get('/blogs/create',(req,res) => {
    res.render('create', { TitleProperty: 'Create' });
})

app.use((req,res) => {
    //res.status(404).sendFile('./views/404.html', {root: __dirname})
    res.status(404).render('404', { TitleProperty: '404' });
})


