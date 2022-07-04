

  let btn = document.querySelector('#btn');

  btn.onclick = function() {
    title.innerText = '로딩 중...';

    fetch(`https://jsonplaceholder.typicode.com/todos/${post.value}`)
    .then(response => response.json())
    .then(data => {
    console.log(data);
    title.innerText = data.title;
  });
  }