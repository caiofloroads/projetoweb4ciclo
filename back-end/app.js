var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database')
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME

db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.bx6mz.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`)

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const teste = require('./routes/teste')
app.use('/teste', teste)

//ROTA PARA FUNCIONARIO
const funcionario = require('./routes/funcionario')
app.use('/funcionario', funcionario)

//ROTA PARA PRODUTO
const produto = require('./routes/produto')
app.use('/produto', produto)

//ROTA PARA FICHA
const ficha = require('./routes/ficha')
app.use('/ficha', ficha)

//ROTA PARA VENDA
const venda = require('./routes/venda')
app.use('/venda', venda)


//ROTA PARA PAGAMENTO
const pagamendo = require('./routes/pagamento')
app.use('/venda', pagamento)

module.exports = app;
