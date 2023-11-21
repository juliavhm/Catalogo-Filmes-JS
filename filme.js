
var listaFilmes = []
listaFilmes[0] = 'https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg'
listaFilmes[1] = 'https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
listaFilmes[2] = 'https://upload.wikimedia.org/wikipedia/pt/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg'
listaFilmes[3] = 'https://m.media-amazon.com/images/M/MV5BM2NlZDI0ZDktNTg5OS00ZjQ1LWI4MDEtN2I0MDE5NWRiNzA4XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg'
listaFilmes[4] = 'https://m.media-amazon.com/images/M/MV5BMjZmMWNlZjMtZDFhZC00ZmU5LWIzYTgtOTZjY2E0MzFhOWFiXkEyXkFqcGdeQXVyODA0MjgyNzM@._V1_.jpg'
listaFilmes[5] = 'https://a-static.mlcdn.com.br/450x450/poster-cartaz-oppenheimer-c-pop-arte-poster/poparteskins2/pos-03405-30x45cm/5c48f3fe2d8a43adaa5a3a731b8b9f31.jpeg'
listaFilmes[6] = 'https://www.phenomena-experience.com/galeria/Historico_peliculas/A/aftersun-poster.jpg'


var nomeFilmes = [
    'The Grand Budapest Hotel',
   ' LadyBird',
   'Spider-Man',
    'Banshees Of Inisherin',
    'Perfect Days',
    'Oppenheimer',
    'Aftersun'
]

for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<div style='display: inline-block; margin: 10px;'>");
    document.write("<img src= " + listaFilmes[i] + ">");
    document.write("<p style='color: white'>" + nomeFilmes[i]+ "</p>")
    document.write("</div>")
}
