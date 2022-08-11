const gauge = document.querySelector('header > div'),
      gaugeTop = gauge.offsetTop;

window.addEventListener('scroll', () => {
    chkReader(gauge, gaugeTop);
})

function chkReader() {
    let color = document.querySelector('header > div > div'),
        doc = document.documentElement,
        winScroll = document.body.scrollTop || doc.scrollTop,
        winHeight = doc.scrollHeight - doc.clientHeight,
        scrolled = (winScroll / winHeight) * 100;

    color.style.width = scrolled + '%';
}

let today = new Date(),
    year = today.getFullYear(),
    month = today.getMonth() + 1,
    day = today.getDay();

document.querySelector('main > div > p').innerHTML = `${year}년 ${month}월 ${day}일 오늘의 뉴스`;
document.querySelector('footer > p:first-child').innerHTML = year;

const question = document.getElementById('question'),
      btn = document.getElementById('btn');

function showNews(category = 'general', question = '') {
    news.innerHTML = '';
    let url = `https://newsapi.org/v2/top-headlines?` 
            + `country=kr&`
            + `q=${question}&`
            + `category=${category}&`
            + `apiKey=0a2cc7deb6c947d0abaa2eac28789ce9`;
  
    let req = new Request(url);
  
    fetch(req)
        .then((response) => {
            // console.log(response);
            return response.json();
        })
        .then(data => {
        //   console.log(data.articles[0]);
  
          for (article of data.articles) {

            // console.log(article);
  
            let divTitle = document.createElement('div');
  
            divTitle.innerHTML = `<a href="${article.url}" target="_blank"><span class="categoryColor">${category}</span> ${article.title}</a>`;


  
            news.append(divTitle);
          }

          let categoryColor = document.querySelectorAll('.categoryColor'),
              menuLength = document.querySelectorAll('#menu > li');

          // let categoryLength = categoryColor.map((item) => {
          //   return item;
          // });
          // console.log(categoryLength);

          for (let i = 0; i < menuLength.length; i++) {
            switch (category) {
              case 'general':
                categoryColor[i].innerText = '일반';
                break;
              case 'business':
                categoryColor[i].style.backgroundColor = 'salmon';
                categoryColor[i].innerText = '경제';
                break;
              case 'entertainment':
                categoryColor[i].style.backgroundColor = 'lightpink';
                categoryColor[i].innerText = '엔터';
                break;
              case 'health':
                categoryColor[i].style.backgroundColor = 'mediumaquamarine';
                categoryColor[i].innerText = '건강';
                break;
              case 'science':
                categoryColor[i].style.backgroundColor = '#E7CBEE';
                categoryColor[i].innerText = '과학';
                break;
              case 'sports':
                categoryColor[i].style.backgroundColor = '#219CFA';
                categoryColor[i].innerText = '스포츠';
                break;
              case 'technology':
                categoryColor[i].style.backgroundColor = 'lightgray';
                categoryColor[i].innerText = '기술';
                break;
              default:
                break;
            }
          }

        });
}
showNews();
  
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

question.addEventListener('keyup', (e) => {
    if (e.keyCode == 13 && question.value != '') {
      showNews('general', question.value);
      question.value = '';
    } else {
      return;
    }
});

document.querySelector('footer > div').onclick = () => {
    window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
};
