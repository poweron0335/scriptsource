// orange

// 세 개의 li 찾기
const firstLi = document.querySelector('list li:first-child');
const secondLi = document.querySelector('list li:nth-child(2)');
const thirdLi = document.querySelector('list li:last-child');

// 세 개의 div 찾기
const firstDiv = document.querySelector('.container div:nth-child(2)');
const secondDiv = document.querySelector('.container div:nth-child(3)');
const thirdDiv = document.querySelector('.container div:nth-child(4)');

// li 클릭 시 orange 클래스명 움직이기
firstLi.addEventListener('click', () => {
  firstLi.classList.add('orange');
  secondLi.classList.remove('orange');
  thirdLi.classList.remove('orange');

  firstDiv.classList.add('show');
  secondDiv.classList.remove('show');
  thirdDiv.classList.remove('show');
});
secondLi.addEventListener('click', () => {
  firstLi.classList.remove('orange');
  secondLi.classList.add('orange');
  thirdLi.classList.remove('orange');

  firstDiv.classList.remove('show');
  secondDiv.classList.add('show');
  thirdDiv.classList.remove('show');
});
thirdLi.addEventListener('click', () => {
  firstLi.classList.remove('orange');
  secondLi.classList.remove('orange');
  thirdLi.classList.add('orange');

  firstDiv.classList.remove('show');
  secondDiv.classList.remove('show');
  thirdDiv.classList.add('show');
});
// show

// 첫번째 li 클릭시 첫번째 div 보여주기
