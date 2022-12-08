// h2 #clock 가져오기
const clock = document.querySelector('h2#clock');

// 시간을 받아서 h2의 innerText에 업데이트
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}`;
}

// 1초마다 getClock() 실행
getClock();
setInterval(getClock, 1000);
