window.onload = function() {
    let btnArea = document.querySelector('.btn-area');
    let btns = btnArea.children;
    let ctnArea = document.querySelector('.contents');
    let ctns = ctnArea.children;

    for (let i = 0; i < btns.length; i++) {
        btns[i].onclick = function() {
            // console.log(this.innerText);
            
            for (let j = 0; j < btns.length; j++) {
                btns[j].classList.remove('active');
                ctns[j].classList.remove('active');
            }
            btns[i].classList.add('active');
            ctns[i].classList.add('active');
        }
    }
}

function openCity(cityName, elmnt, color) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tapcontent');
    
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablink');

    for (i = 0; i < tablinks; i++) {
        tablinks[i].style.backgroundColor = '';
    }

    document.getElementById(cityName).style.display = 'block';

    elmnt.style.backgroundColor = color;
}

document.getElementById('defaultOpen').click();