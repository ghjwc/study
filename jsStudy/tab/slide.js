window.onload = function() {
    let wrap = document.querySelector('.wrap');
    let open = document.querySelector('.wrap > div');
    let slide = document.querySelector('.side-menu');
    let close = document.querySelector('.side-menu > div');
    let cover = document.querySelector(".cover");
    let flag = 0;
    open.addEventListener('click', function() {
      //slide-menu 넓이
      //토글 flag
      //클래스 사용
      console.log(slide.clientWidth);
      console.log(slide.offsetWidth);
      if (!slide.clientWidth) {
        cover.style.opacity = "0.7";
        cover.style.visibility = "visible";
        slide.style.width = "100%";
        slide.style.padding = "15px";
        wrap.style.width = "0";
        open.innerText = "Close";
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
      } else {
        hideMenu();
        open.innerText = "Open";
      }
      // slide.style.left = "0";
    });
    close.addEventListener('click', function() {
       hideMenu();
    });
    cover.addEventListener('click', function() {
        hideMenu();
    });
    function hideMenu() {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      wrap.style.width = "100%";
      slide.style.width = "0";
      slide.style.padding = "0";
      cover.style.opacity = "0";
      cover.style.visibility = "hidden";
    }
  }