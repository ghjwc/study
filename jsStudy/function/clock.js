    /*
        AM, PM
        12시간제
        모든 자리는 두자리로 표시
        버튼을 등록 후 멈춤 STOP
        멈춤이 되면 버튼은 RUN
        STOP = 다시 시계가 작동하도록

        토글(Toggle) - 같은 버튼을 누를 때 마다 값을 변경하는 행위
        // 상태를 체크
        // 플래그 생성 a = 0,  a = 1

        //그대로 만들어보기
    */

(function() {
    let clock = { //객체 생성자 함수
        btn: document.createElement("button"),
        div: document.createElement('div'),
        //timer: null,
        init: function(target) {
            let link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://fonts.googleapis.com/css2?family=Fascinate&display=swap';
            document.head.appendChild(link);

            //btn.innerText = 'STOP';
            let txt = document.createTextNode('STOP');
            this.btn.appendChild(txt);
            //이벤트는 등록 개념 - 사용자(시간)가 실행
            // console.dir(this.btn);
            // this.btn.onclick = function () {
            //     alert('멈춤');
            // };

            //this.div.id = "clock";
            target.appendChild(this.div);
            target.appendChild(this.btn);
            this.style();
            this.run();
        },
        run: function() {
            let self = this;
            let timer = this.start();
            // console.log(timer);
            this.btn.onclick = function () {
                // console.log(timer);
                //console.log(this.innerText);
                if (this.innerText == 'STOP') {
                    clearInterval(timer);
                    this.innerText = 'RUN';
                } else {
                    //실행
                    timer = self.start();
                    this.innerText = 'STOP';
                }
            };
        },
        style: function() {
            this.div.style.fontSize = '5vw';
            this.div.style.color = 'red';
            this.div.style.fontWeight = 'bold';
            this.div.style.fontFamily = 'Fascinate';
        }, 
        setDigit: function(num) {
            return num > 9 ? num : '0' + num;
        },
        start: function() {
            let self = this;
            let timer = setInterval(function() { //this
                let now = new Date();
                //now.getHours() 0 - 23
                let hour = now.getHours();
                let strHour = hour > 12 ? `PM ${hour - 12}` : `AM ${self.setDigit(hour)}`;

                self.div.innerText = strHour + ":" + self.setDigit(now.getMinutes()) + ":" + self.setDigit(now.getSeconds());
            }, 1000);

            return timer;
        }
    };

    clock.init(document.body);
})();