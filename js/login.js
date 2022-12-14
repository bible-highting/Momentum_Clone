// 입력시 창 사라지고 hello옆에 이름 들어감
// localstorage에 이름 저장

const userName = document.querySelector("h1 .user_name");
const loginForm = document.querySelector(".login_form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(e) {
  e.preventDefault();
  userName.innerText = loginInput.value;
  loginForm.classList.add("hidden");
  console.log(loginInput.value);
}

loginForm.addEventListener("submit",onLoginSubmit);


