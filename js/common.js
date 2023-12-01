// 햄버거 바 

const $barsIcon = document.querySelector('.fa-bars');
const $menu = document.querySelector('.menu');
const $exit = document.querySelector('.exit');

$barsIcon.addEventListener('click', function () {
    $menu.classList.add('on');
    $exit.classList.add('on');
});

$exit.addEventListener('click', function () {
    $menu.classList.remove('on');
    $exit.classList.remove('on');
});

// 지점안내 

const $branch = document.querySelector('.branch');
const $office = $branch.querySelector('.branch>ul');

$branch.addEventListener('click', function () {
    $office.classList.toggle('on');
});