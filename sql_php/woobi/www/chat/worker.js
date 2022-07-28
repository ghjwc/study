
function readChat() {
  const xmlhttp = new XMLHttpRequest();

  xmlhttp.onload = function() {
    postMessage(this.responseText);
  }

  xmlhttp.open('GET', 'readChat.php');
  xmlhttp.send();

  setTimeout(readChat, 1500);
}

readChat();