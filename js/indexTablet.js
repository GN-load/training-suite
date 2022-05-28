const tabletA = document.querySelectorAll('.nav-link');
console.log(tabletA)

tabletA.forEach(el => {
    el.addEventListener('click', () => {

        el.classList.add('hovered-a_tablet')

        el.addEventListener('mouseout', () => {
            el.classList.remove('hovered-a_tablet')
        })
    })
});

document.querySelector('.menu__btn', (event) => event.preventDefault());
document.querySelector('#menu__toggle', (event) => event.preventDefault());