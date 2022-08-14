// Header-top nav
const headerNav = document.querySelectorAll('.nav__item');
// remove activ class
function removeActiveClass() {
    headerNav.forEach((item) => item.classList.remove('nav__item--active'));
}
//  toggle activ class
function toggleActiveClass() {
    for (let item of headerNav) {
        item.addEventListener('click', function () {
            removeActiveClass();
            item.classList.add('nav__item--active');
        });
    }
}

toggleActiveClass();
