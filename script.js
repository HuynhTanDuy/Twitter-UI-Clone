const loginPage = document.querySelector('.login-page');
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
const logInBtn2 = document.querySelector('#login-btn-2');
logInBtn2.addEventListener('click', goToFeedsPage);


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


function goToFeedsPage() {
    loginPage.style.display = 'none';
    mainPage.style.display = 'none';
    feedsPage.style.display = 'grid';
}

const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-post-wrapper')
const modalPost = document.querySelector('.modal-post')
const modalXBtn = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header button');
const modalPlusBtn = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-body input');

postBtn.addEventListener('click', () => {
    modalPost.style.display = 'block';
    modalWrapper.classList.add('modal-post-wrapper-appearance');
})

modalXBtn.addEventListener('click', () => {
    modalPost.style.display = 'none';
    modalWrapper.classList.remove('modal-post-wrapper-appearance');
    modalInput.value = '';
    updateOpacity(0.5);
})

const updateOpacity = x => {
    modalPostBtn.style.opacity = x;
    modalPlusBtn.style.opacity = x;
}

modalInput.addEventListener('keypress', (e) => {
    if (e.target.value !== '') {
        updateOpacity(1);
    }
})

modalInput.addEventListener('blur', e => {
    if (e.target.value === '') {
        updateOpacity(0.5);
    }
})

