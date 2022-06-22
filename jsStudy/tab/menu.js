let bugger = document.getElementsByClassName('bugger');
bugger[0].addEventListener('click', function() {
    document.body.classList.toggle('active');
    this.classList.toggle('active');
})