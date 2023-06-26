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