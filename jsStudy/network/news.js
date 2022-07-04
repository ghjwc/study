function showNews(category = 'general', question = '') {
    news.innerHTML = '';
    let url = `https://newsapi.org/v2/top-headlines?` 
            + `country=kr&`
            + `q=${question}&`
            + `category=${category}&`
            + `apiKey=0a2cc7deb6c947d0abaa2eac28789ce9`;

    let req = new Request(url);

    fetch(req)
        .then(function(response) {
            // console.log(response);
            return response.json();
        })
        .then(data => {
        //   console.log(data.articles[0]);

          for (article of data.articles) {

            let divTitle = document.createElement('div');
            let imgUrl = document.createElement('img');

            divTitle.innerHTML = `<h3><a href="${article.url}" target="_blank">${article.title}</a></h3>`;

            imgUrl.src = article.urlToImage;
            imgUrl.alt = article.title;
            imgUrl.width = 100;

            // console.log(article.author);
            // console.log(article.title);
            // console.log(article.url);
            // console.log(article.urlToImage);
            news.append(divTitle);
            news.append(imgUrl);
          }
        });
  }
  
  showNews();

//   menu.chil.foreach(function (val, index) {
//     console.log(val);
//   });

menu.addEventListener('click', function(e) {
    showNews(e.target.dataset.category);
});

btn.addEventListener('click', function() {
    if (!question.value) {
        console.log('null');
        return;
    }
    showNews('general', question.value); 
})