// orange
// li 클릭 시 orange 클래스명 움직이기

// 세 개의 li 찾기
const firstli = document.querySelector('.list li:first-child');
const secondli = document.querySelector('.list li:nth-child(2)');
const thirdli = document.querySelector('.list li:last-child');
// show
// 첫번째 li 클릭시 첫번째 div 보여주기
const firstdiv = document.querySelector('.container div:nth-child(2)');
const seconddiv = document.querySelector('.container div:nth-child(3)');
const thirddiv = document.querySelector('.container div:nth-child(4)');

firstli.addEventListener('click', () => {
  // 다른 li 에 orange 클래스명 제거
  // firstli 에 orange 클래스명 추가
  firstli.classList.add('orange');
  secondli.classList.remove('orange');
  thirdli.classList.remove('orange');

  firstdiv.classList.add('show');
  seconddiv.classList.remove('show');
  thirddiv.classList.remove('show');
});
secondli.addEventListener('click', () => {
  firstli.classList.remove('orange');
  secondli.classList.add('orange');
  thirdli.classList.remove('orange');

  firstdiv.classList.remove('show');
  seconddiv.classList.add('show');
  thirddiv.classList.remove('show');
});
thirdli.addEventListener('click', () => {
  firstli.classList.remove('orange');
  secondli.classList.remove('orange');
  thirdli.classList.add('orange');

  firstdiv.classList.remove('show');
  seconddiv.classList.remove('show');
  thirddiv.classList.add('show');
});
