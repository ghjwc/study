// let btn = document.getElementsByTagName('button');

// for (let i = 0; i <btn.length; i++) {
//     btn[i].onclick = function(e) {
//         console.log(this); //click 된 자기자신
//         this.classList.toggle('active');

//         let panel = this.nextElementSibling;
//         console.log(panel);
//         console.log(panel.style.maxHeight);
//         console.log(panel.scrollHeight);

//         // if (panel.style.display == 'block') {
//         //     panel.style.display = 'none';
//         // } else {
//         //     panel.style.display = 'block';
//         // }

//         if (panel.style.maxHeight) {
//             panel.style.height = 0;
//         } else {
//             panel.style.height = panel.scrollHeight + 'px';
//             panel.style.maxHeight = panel.scrollHeight + 'px';
//         }

//         let maxBtn = btn.length;

//         for (let j = 0; j < maxBtn; j++) {
//             if (btn[j] == this) {
//                 this.classList.toggle('active');
//                 let panel 
//             }
//         }
//     }

// }


let btn = document.getElementsByTagName("button");
    for (let i = 0; i < btn.length; i++) {
      btn[i].onclick = function (e) {
        let maxBtn = btn.length;

        for (let j = 0; j < maxBtn; j++) {
          if (btn[j] == this) {
            this.classList.toggle('active');
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + 'px';
            }
          } else {
            if (btn[j].classList.contains('active')) {
              btn[j].classList.remove('active');
              btn[j].nextElementSibling.style.maxHeight = null;
            }
            continue;
          }
        }
      }
    }