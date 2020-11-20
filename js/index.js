window.addEventListener('DOMContentLoaded', () => {
    const dropDown = document.querySelectorAll('.footer__content'),
          chevron = document.querySelectorAll('.right'),
          list = document.querySelectorAll('.footer__list'),
          hamburger = document.querySelector('.hamburger'),
          sidePanel = document.querySelector('.sidepanel'),
          searchOpen = document.querySelector('.search-btn i'),
          searchClose = document.querySelector('.search-btn .close');


    hamburger.addEventListener('click', () => {
        sidePanel.classList.add('sidepanel-active');
        document.body.style.overflow = 'hidden';
    });

    sidePanel.addEventListener('click', (e) => {        
        if (e.target === document.querySelector('.navigation__logo')){
            sidePanel.classList.remove('sidepanel-active');
            document.body.style.overflow = '';
        }
    });

    function show(i) {
        chevron[i].classList.toggle('right-active');
        list[i].classList.toggle('footer__list-active');
    }

    dropDown.forEach((drop, i) => {
        drop.addEventListener('click', () => {
            show(i);
        })
    })

    function makeBlack() {
        document.querySelector('.header .navigation').classList.add('navigation-active');
        document.querySelector('.header .navigation__logo').style.color = '#000000';
        document.querySelectorAll('.stick').forEach(stick => {
            stick.style.cssText = 'background-color: #000000';
        })
        document.querySelectorAll('.header .navigation__info').forEach(stick => {
            stick.style.cssText = 'color: #000000';
        })
        document.querySelectorAll('.header .navigation__links a').forEach(link => {
            link.style.cssText = 'color: #000000';
        })
        document.querySelector('.navigation__searchbar').style.opacity = 'inherit'
        document.querySelectorAll('i').forEach(icon => {
            icon.style.cssText = 'color: #000000';
        })
        document.querySelectorAll('.close span').forEach(span => {
            span.style.cssText = 'background-color: #000000';
        })
        document.querySelector('.navigation__search-mobile input').style.opacity = 'inherit';
    }

    function makeWhite() {
        document.querySelector('.header .navigation').classList.remove('navigation-active');
        document.querySelector('.header .navigation__logo').style.color = '#ffffff';
        document.querySelectorAll('.stick').forEach(stick => {
            stick.style.cssText = 'background-color: #ffffff';
        })
        document.querySelectorAll('.header .navigation__links a').forEach(link => {
            link.style.cssText = 'color: #ffffff';
        })
        document.querySelectorAll('.header .navigation__info').forEach(stick => {
            stick.style.cssText = 'color: #ffffff';
        })
        document.querySelector('.navigation__searchbar').style.opacity = '';
        document.querySelectorAll('i').forEach(icon => {
            icon.style.cssText = 'color: #ffffff';
            if (searchOpen) {
                console.log('true');
            }
        });
        document.querySelectorAll('.close span').forEach(span => {
            span.style.cssText = 'background-color: #ffffff';
        })
        document.querySelector('.navigation__search-mobile input').style.opacity = '';
    }

    function changeNavByScrollToBlack() {
        if (window.pageYOffset > 300) {
            makeBlack();
        } else {
            makeWhite();
        }
    }


    document.querySelector('.search-btn').addEventListener('click', () => {
        document.querySelector('.header .navigation__search-mobile').classList.toggle('show');
    })
    
    let imgArray = ['images/bg/mainbg.png', 'images/bg/mainbg2.png'], 
        main = document.querySelector('.main'),
        i = 1;


    function switchBg() {
        if(i > (imgArray.length - 1)) {
            i = 1;
            main.style.background = `url(${imgArray[0]}) center center/cover no-repeat`
            makeWhite();
        } else {
            main.style.background = `url(${imgArray[i]}) center center/cover no-repeat`
            i++;
            makeBlack();
        }
    }

    setInterval(switchBg, 2000)
    window.addEventListener('scroll', changeNavByScrollToBlack)
})