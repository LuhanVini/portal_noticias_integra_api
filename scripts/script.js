$(document).ready(function() {
  // faz a requisição para a API
  $.ajax({
    url: 'https://newsapi.org/v2/top-headlines',
    method: 'GET',
    data: {
      country: 'us', // país das notícias
      apiKey: '668c29c057b846dea44b8b39be7304b4' // sua chave de autenticação da API do NewsAPI
    },
    success: function(response) {
      // manipula os dados da resposta
      var articles = response.articles;
      var html = '';
      for (var i = 0; i < articles.length; i++) {
        var article = articles[i];
        html += '<div class="paiImgs">';
        html += '<img id="img" src="' + article.urlToImage + '">';
        html += '<div class="paiDescription">';
        html += '<h1 class="paragrafo">' + article.title + '</h1>';
        html += '<h3 class="paragrafo">' + article.description + '</h3>';
        html += '<h4 class="author">' + article.author + '</h4>';
        html += '<p class="paragrafo">' + article.publishedAt + '</p>';
        html += '</div>';
        html += '</div>';
      }
      // insere os dados na página
      $('#noticias').html(html);
    },
    error: function(error) {
      console.log(error);
    }
  });
});
