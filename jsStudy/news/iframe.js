//iframe

let oneHour = 1000 * 60 * 60;
let timer = null;

function getNews() {

    fetch("https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a2cc7deb6c947d0abaa2eac28789ce9")
        .then(response => response.json())
        .then(data => {
            const objForm = document.createElement("form");
            const inputData = document.createElement("input");
            const sender = document.getElementById("sender");

            objForm.action = "http://return.woobi.co.kr/news/test.php";
            objForm.method = "POST";
            objForm.target = "sender";
            inputData.type = "text";
            inputData.name = "news";
            inputData.value = JSON.stringify(data.articles);
            objForm.append(inputData);
            document.body.append(objForm);
            objForm.submit();
        })
        .catch(err => console.log(err));
    timer = setTimeout(getNews, oneHour);
}
getNews();