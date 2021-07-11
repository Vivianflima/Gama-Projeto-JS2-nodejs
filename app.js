


//pegar o input
// sefor sim, mostra as categorias disponíveis, pergunta qual categoria ela escolhe// se não, mostra todos os livros em ordem crescente pela quantidade de paginas 

const livros = require('./database')
const readline = require("readline-sync")

const entradaInicial = readline.question('Deseja buscar um livro?S/N')
if (entradaInicial.toLocaleUpperCase()==="S"){
  console.log("Essas são as categorias disponíveis:")
  console.log("Produtividade", "/Parentalidade", "/Aventura")

  const entradaCategoria = readline.question("Qual Categoria você escolhe?")

  const retorno = livros.filter(livro =>livro.categoria=== entradaCategoria )

  console.table(retorno)
} else{
   const livrosOrdenados = livros.sort((a,b)=>a.paginas-b.paginas)
  console.log("Essas são todos os livros disponíveis:")
  console.table(livrosOrdenados)
}