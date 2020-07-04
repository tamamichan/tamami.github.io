function toggleNav() {
    const body = document.body;
    const hamberger = document.getElementById('js-ham');
    const blackBg = document.getElementById('js-black-bg');

    hamberger.addEventListener('click', function() {
        body.classList.toggle('nav-open');
    });
    hamberger.addEventListener('touchstart', function() {
        body.classList.toggle('nav-open');
    });
    blackBg.addEventListener('click', function() {
        body.classList.remove('nav-open');
    });
}
toggleNav();
