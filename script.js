const loginPage= document.querySelector('.login-page');
const mainPage = document.querySelector('.main-page');
const feedsPage = document.querySelector('.feeds-page');

function goToLoginPage() {
    loginPage.style.display = "grid";
    mainPage.style.display = "none";
}

const middleContent = document.querySelector('.middle-content');
middleContent.addEventListener('click', e => {
    console.log(e.target);
    goToLoginPage();
});

const logInBtn = document.querySelector('.log-in-btn');
logInBtn.addEventListener('click', () => {
  const username = document.querySelector('.username-input');
  const password = document.querySelector('.password-input');
  console.log('Username is ' + username + ". Password is " + password);
  if (username.value !== '' && password.value !== '') {
      console.log('Go to feeds page')
      mainPage.style.display = 'none';
      feedsPage.style.display = 'grid';
  } else {
      goToLoginPage();
  }
});