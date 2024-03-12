// 폼에 submit 이 일어나면 submit 중지
// required
// 각각 input의 value 가 들어 있는 지 확인

// value 가 어떤 특정 조건을 만족하는지 확인

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const userId = document.querySelector('#userid');
  const password = document.querySelector('#password');
  const confirm = document.querySelector('#confirm-password');

  const regId = /(?=^[A-Za-z])(?=.+\d)[A-Za-z\d]{6,12}$/;
  const regPwd = /(?=^[A-Za-z])(?=.+\d)(?=.+[!@$%])[A-Za-z\d!@$%]{8,15}$/;

  // true 자료 : 0을 제외한 숫자, '문자', [], {}
  // false 자료 : 0, '', null, undefined, NaN

  //   if(userId.value == '')
  //   if(userId.value.lenght == 0)

  if (!userId.value || !regId.test(userId.value)) {
    userId.nextElementSibling.classList.add('show');
  } else {
    userId.nextElementSibling.classList.remove('show');
  }

  if (!password.value || !regPwd.test(password.value)) {
    password.nextElementSibling.classList.add('show');
  } else {
    password.nextElementSibling.classList.remove('show');
  }
  if (!confirm.value || !regPwd.test(confirm.value)) {
    confirm.nextElementSibling.classList.add('show');
  } else {
    password.nextElementSibling.classList.remove('show');
  }

  // passwod == confirm-password
  // 이전 비밀번호와 다릅니다.
  if (confirm.value != password.value) {
    confirm.nextElementSibling.textContent = '이전 비밀번호와 다릅니다.';
    confirm.nextElementSibling.classList.add('show');
  } else if (confirm.value == '' && password.value == '') {
    // password, confirm 둘다 입력안된 경우 값이 동일하기 때문에 이 코드가 실행됨
    password.nextElementSibling.classList.add('show');
  } else {
    confirm.nextElementSibling.classList.remove('show');
  }
});
