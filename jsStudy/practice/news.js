const gauge = document.querySelector('header > div'),
    gaugeTop = gauge.offsetTop;

window.addEventListener('scroll', () => {
    chkReader(gauge, gaugeTop);
})

function chkReader() {
    let color = document.querySelector('header > div > div'),
        doc = document.documentElement,
        winScroll = document.body.scroollTop || doc.scrollTop,
        winHeight = doc.scrollHeight - doc.clientHeight,
        scrolled = (winScroll / winHeight) * 100;

    color.style.width = scrolled + '%';
}



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
  
            divTitle.innerHTML = `<h3><a href="${article.url}" target="_blank">${article.title}</a></h3>`;
  
            // console.log(article.author);
            // console.log(article.title);
            // console.log(article.url);
            // console.log(article.urlToImage);
            news.append(divTitle);
          }
        });
  }
  
  showNews();
  
  //   menu.chil.foreach(function (val, index) {
  //     console.log(val);
  //   });
  
  menu.addEventListener('click', (e) => {
    showNews(e.target.dataset.category);
  });
  
  btn.addEventListener('click', () => {
    if (!question.value) {
        console.log('null');
        return;
    }
    showNews('general', question.value); 
  })