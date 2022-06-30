menu.onclick = function(event) {
    if (event.target.nodeName != 'A') return;
  
    let href = event.target.getAttribute('href');
    alert( href );
  
    return false; 
  };

  window.addEventListener('scroll', function(e) {
    console.log(e);
    e.preventDefault();
  }, {passive: false});