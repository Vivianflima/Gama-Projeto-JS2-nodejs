Projeto feito no node.js que traz uma tabela de livros de acordo com a categoria ou todos os livros disponíveis odenados por numero de paginas

1 - criar pasta para o projeto e criar arquivos app.js e database.js

dentro do arquivo database.js feito a array de livros com

const livros = [
id:   ,
nome:    ,
autor:   ,
categoria:   ,
paginas:    ,
recomenda:true/false,
leu:true/false
]
 no final criado comando para exportar arquivo:

module.exports = livros

2 - Iniciar projeto node 
dentro da pasta do projeto digitar no node ou no "shell" do replit:
npm init -y
 
 Esse comando que vai criar o arquivo  package.json

 entrar no arquivo package.json
 e na linha 7 de scripts trocar o que está na linha (teste) por 
 "start" : "node app.js"

 abrir o arquivo app.js e criar a dependência/ biblioteca para adiquirir entrada de usuário:

 colocar comando no node:
npm i readline-sync

verificar que no arquivo package.json foi criada dependencia nas linhas 12 e 13

retorna para o app.js 
importar o arquivo criado na database

const livros = require('./database')
