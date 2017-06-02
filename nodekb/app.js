const express = require('express');
const path = require('path');

//init app
const app = express();

//load view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug')

//home route
app.get('/', function(req, res){
  let articles = [
    {
      id:1,
      title:'Article 1',
      author:'Dan Vela',
      body:'This is Article one'
    },
    {
      id:2,
      title:'Article 2',
      author:'Mysael Vela',
      body:'This is Article two'
    },
    {
      id:3,
      title:'Article 3',
      author:'Dan Vela',
      body:'This is Article three'
    }
  ];
  res.render('index', {
    title:'Articles',
    articles: articles
  });
});

//Add route
app.get('/articles/add', function(req, res){
  res.render('add_article', {
    title: 'Add Article'
  });
});


//start server
app.listen(3000, function(){
  console.log('Server started on 3000');
});
