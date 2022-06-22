let target = document.querySelector('body > div:nth-of-type(3)');


window.onscroll = function(e) {
    console.log(window.scrollY);
    

    let ani = document.querySelector('#ani');
    ani.style.transition = '1s';
    ani.style.height = '0';
    ani.style.background = 'transparent';

    console.log(target.offsetTop);

    if ((target.offsetTop - 100) <= window.scrollY) {
        console.log('test');
        ani.style.height = '100px';
        ani.style.background = 'red';
    } else {
        ani.style.height = '0';
        ani.style.background = 'transparent';
    }


    
};


let firstDiv = document.querySelector('body > div:first-of-type');
console.log(firstDiv);


firstDiv.onClick = function() {
    window.scrollTo({left:0, top:target.offsetTop, behavior:'smooth'});
}

