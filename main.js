const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const {engine} = require('express-handlebars')

    app.engine('handlebars', engine());
    app.set('view engine', 'handlebars');
    app.set('views', './views');
    
app.get('/', (req, res) => {
    res.render('Index');
});






//ROTAS
app.get('/Cadastrar', function(req, res){
    res.render('./layouts/Form')
})

/*app.post('/Cadastro', function(req, res) => {
    Post.create({
        titulo: req.body.title,
        conteudo: req.body.content
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("houve um erro"+erro)
    })
})

app.get('/aaaaaa', function(req, res){
    Post.findAll({order: [['id', 'ASC']]}).then(function(posts){
        console.log(posts),
        res.render('home', {posts: posts})
    })
})
*/

/* Conexão ao "POST" banco de dados
const Post = require('./models/Post')
    //Config
    //Template
    // app.engine('handlebars', handlebars({'main'}))
    app.engine('handlebars', engine());
    app.set('view engine', 'handlebars');
    app.set("views", "./views");
*/

const bodyParser = require('body-parser')

    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json)


app.listen(7870, function(){
console.log('Servidor rodando na URL http://localhost:7870');
});
//localhost:7870