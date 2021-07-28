/* Varivel com as imagens das series */
var series = ["https://m.media-amazon.com/images/M/MV5BMGY5NTA0YjQtZTE5NS00M2FiLWIzMmQtOTFiYzc5YWM2OTdiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR4,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzRlNGUzMmEtYTg0Ni00N2U2LTg4YWEtNDdlNmMwYjBlZDQ0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzY1YjIxOGMtOTAyZC00YTcyLWFhMzQtZTJkYTljYzU0MGRlXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_UY268_CR0,0,182,268_AL_.jpg"]

/* Variavel que vai inserir o nome de cada serie na pagina */
var nomeSeries = ["Todo Mundo Odeia o Chris", "Lupin", "Peaky Blinders", "Stranger Things", "Lucifer"]

for (var i = 0; i < series.length; i++) {
        //Comando para imprimir as series
        document.write("<img src=" + series[i] + ">" + "<p>" + nomeSeries[i] + "</p>" + "<a href=" + ">")
}

function adicionarFilme() {
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value
    if (filmeFavorito.endsWith('.jpg')) {
        listarFilmesNaTela(filmeFavorito)
    } else {
        alert("Imagem inválida")
    }
    campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
