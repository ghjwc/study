let elem = document.getElementById("coords-show-mark");

function createMessageUnder(elem, html, x, y) {

    let message = document.createElement('div');
    
    message.style.cssText = "position:fixed; color: red";
    
    let coords = elem.getBoundingClientRect();

    message.style.left = x + "px";
    message.style.top = y + "px";

    message.innerHTML = html;

    return message;
}


document.body.onclick = function(e) {
    console.log(e);
    let message = createMessageUnder(elem, '독도는 우리 땅!', e.pageX, e.pageY);
    document.body.append(message);
    setTimeout(() => message.remove(), 5000);
}


function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    
    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

let coordsShowMark = document.getElementById('coords-show-mark');
document.body.append(createMessageUnder2(coordsShowMark, 'hello world'));



function createMessageUnder2(elem, html) {
    let msg = document.createElement('div');

    msg.style.cssText = "position:absolute; color: blue";

    let coords = getCoords(elem);

    msg.style.left = coords.left + "px";
    msg.style.top = coords.bottom + "px";

    msg.innerHTML = html;

    return msg;
}