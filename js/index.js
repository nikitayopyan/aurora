window.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.footer__wrapper'),
      dropDown = document.querySelectorAll('.footer__content'),
      chevron = document.querySelectorAll('.chevron-right'),
      list = document.querySelectorAll('.footer__list');

    function show(i) {
        chevron[i].classList.toggle('chevron-right-active');
        list[i].classList.toggle('footer__list-active');
    }

    dropDown.forEach((drop, i) => {
        drop.addEventListener('click', (e) => {
            show(i);
        })
    })

    function changeNavByScroll() {
        if (window.pageYOffset > 500) {
            document.querySelector('.navigation').classList.add('navigation-active');
            document.querySelector('.navigation__logo').style.color = '#000000';
            document.querySelectorAll('.stick').forEach(stick => {
                stick.style.cssText = 'background-color: #000000';
            })
        } else {
            document.querySelector('.navigation').classList.remove('navigation-active');
            document.querySelector('.navigation__logo').style.color = '#ffffff';
            document.querySelectorAll('.stick').forEach(stick => {
                stick.style.cssText = 'background-color: #ffffff';
            })
        }
    }
    
    window.addEventListener('scroll', changeNavByScroll);
    
})