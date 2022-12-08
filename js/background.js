const images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 자바스크립트로 요소 추가하기
// createElement() : 요소를 만드는 메서드
// <img></img> 코드가 생성됨
const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`;

// 선택한 요소 안에 자식요소를 추가한다.
// bgImage를 body 내부에 추가
document.body.appendChild(bgImage);
