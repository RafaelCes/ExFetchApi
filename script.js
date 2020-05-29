var receita = {
    titulo: "chocolate",
    porçoes:  2,
    ingredientes: ["cacau","leite","manteiga"],
}
console.log(receita.titulo);
console.log(receita.porçoes);
for(i=0;i<receita.ingredientes.length;i++){
    console.log(receita.ingredientes[i]);
}

var livros = [
     {
         titulo: "Jogos vorazes",
         autor: "Suzane Colins",
         bool: true,
    },
    {
        titulo: "Alice isn't dead",
        autor: "Joshep Fink",
        bool: false,
    },
    {
        titulo: "Sherlock Holmes",
        autor: "Conan Doyle",
        bool: true,
    },
    {
        titulo: "Guia dos mochileiros das galaxias",
        autor: "Douglas Adams",
        bool: true,
    }
]
for(i=0;i<livros.length;i++){
    console.log(livros[i].titulo);
    console.log(livros[i].autor);
    if(livros[i].bool == true) {console.log("Você já leu este livro -"+livros[i].titulo+"-"+livros[i].autor)}
    else {console.log("Você não leu este livro -" +livros[i].titulo+"-"+livros[i].autor)}
}
