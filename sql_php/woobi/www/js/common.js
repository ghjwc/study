//한글만입력
function onlyKorean(val) {
    let patten = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    return val.replace(patten, '');
  }
  //이름체크
