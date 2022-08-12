//페이지 상단 스크롤
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

// 오늘 날짜
let today = new Date(),
    year = today.getFullYear(),
    month = today.getMonth() + 1,
    day = today.getDay();

document.querySelector('main > div > p').innerHTML = `${year}년 ${month}월 ${day}일 오늘의 뉴스`;
document.querySelector('footer > p:first-child').innerHTML = year;

// input & button
const question = document.getElementById('question'),
      btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  if (!question.value) {
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

// 날씨

const weaterDiv = document.querySelector('#weather');

const getJSON = (url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
      const status = xhr.status;
      if (status === 200) {
          callback(null, xhr.response);
      } else {
          callback(status, xhr.response);
      }
    };
    xhr.send();
};

let showWeather = document.createElement('div');

getJSON('https://api.openweathermap.org/data/2.5/weather?q=busan&appid=922e829ffec656a7032bc4d27ed4ba3b&units=metric', (err, data) => {

    const weatherIcon = data.weather[0].icon,
          weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    if (err !== null) {
        alert('예상치 못한 오류 발생' + err);
    } else {

      showWeather.innerHTML = 
      `<div class="weatherDiv">
          <div><img src=${weatherIconAdrs}></div>
          <div>현재 <b>부산</b>의 온도는 <b>${data.main.temp}°</b>입니다.</div>
      </div>
      <div class="weatherDiv">
          <div><b>풍속</b> ${data.wind.speed}m/s</div>
          <div><b>습도</b> ${data.main.humidity}%</div>
          <div><b>최고기온</b> ${data.main.temp_max}°</div>
          <div><b>최저기온</b> ${data.main.temp_min}°</div>
      </div>`;
    }
    weaterDiv.append(showWeather);
});


// 뉴스
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
              categoryColorArr = Array.apply(null, categoryColor);

          let categoryLength = categoryColorArr.map((item) => {
            switch (category) {
              case 'general':
                item.innerText = '일반';
                break;
              case 'business':
                item.style.backgroundColor = 'salmon';
                item.innerText = '경제';
                break;
              case 'entertainment':
                item.style.backgroundColor = 'lightpink';
                item.innerText = '엔터';
                break;
              case 'health':
                item.style.backgroundColor = 'mediumaquamarine';
                item.innerText = '건강';
                break;
              case 'science':
                item.style.backgroundColor = '#E7CBEE';
                item.innerText = '과학';
                break;
              case 'sports':
                item.style.backgroundColor = '#219CFA';
                item.innerText = '스포츠';
                break;
              case 'technology':
                item.style.backgroundColor = 'lightgray';
                item.innerText = '기술';
                break;
              default:
                break;
            }
          });
        });
}
showNews();


// 모바일 메뉴
const mobileMenu = document.querySelector('#mobileMenu'),
      mobileAside = document.querySelector('header > ul'),
      mobileMenuClose = document.querySelector('.closeMenu');
  
menu.addEventListener('click', (e) => {
    if (e.target != mobileMenuClose) {
      showNews(e.target.dataset.category);
    }
    hideMenu();
});

mobileMenu.addEventListener('click', () => {
    if (!mobileAside.clientWidth) {
      mobileAside.style.width = '70%';
      mobileAside.style.opacity = '1';
      mobileAside.style.visibility = 'visible';
    }
});

mobileMenuClose.onclick = () => {
    hideMenu();
}

function hideMenu() {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    mobileAside.style.width = '0';
    mobileAside.style.opacity = '0';
    mobileAside.style.visibility = 'hidden';
}

document.querySelector('footer > div').onclick = () => {
  window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
};