    const dropDown = document.querySelectorAll('.footer__content'),
          chevron = document.querySelectorAll('.right'),
          list = document.querySelectorAll('.footer__list'),
          hamburger = document.querySelector('.hamburger'),
          sidePanel = document.querySelector('.sidepanel'),
          notRegisteredContainer = document.querySelector('.notRegistered'),
          notRegistered = document.querySelectorAll('.notRegistered a'),
          registered = document.querySelector('.isRegistered'),
          cart = document.querySelector('.navigation__cart');

// HAMBURGER EVENT ON CLICK TO OPEN A SIDEPANEL 

    hamburger.addEventListener('click', () => {                              
        sidePanel.classList.add('sidepanel-active');
        document.body.style.overflow = 'hidden';
    });

// CLOSING SIDEPANEL BY CLICKING ON LOGO 
    
    sidePanel.addEventListener('click', (e) => {                                     
        if (e.target === document.querySelector('.sidepanel .navigation__logo')){                          
            sidePanel.classList.remove('sidepanel-active');
            document.body.style.overflow = '';
        }
    });

// BY CLICKING ON REGISTER OR SIGN IN LINK - THESE TWO BUTTONS WILL BE REMOVED, THEN HI ANGELS AND AMOUNT OF STUFF IN YOUR CART SHOULD POP UP

    notRegistered.forEach(link => {
        link.addEventListener('click', () => {
            notRegisteredContainer.style.display = 'none';
            registered.style.display = 'block';
            cart.style.display = 'block'
        })
    })


    function show(i) {
        chevron[i].classList.toggle('right-active');
        list[i].classList.toggle('footer__list-active');
    }

// EACH TAB IS CLICKABLE AND EACH ONE HAS ITS OWN INFO

    dropDown.forEach((drop, i) => {
        drop.addEventListener('click', () => {
            show(i);
        })
    })


// MAKING STUFF GO BLACK (STRINGS/ICONS)

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

// MAKING STUFF GO WHITE (STRINGS/ICONS)

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
        });
        document.querySelectorAll('.close span').forEach(span => {
            span.style.cssText = 'background-color: #ffffff';
        })
        document.querySelector('.navigation__search-mobile input').style.opacity = '';
    }

// CHANGING NAVBAR BY SCROLLING DOWN USING TWO FUNCTIONS UPWARDS TO CHANGE COLORS ON STRINGS/ICONS 

    function changeNavByScrollToBlack() {
        if (window.pageYOffset > 300) {
            makeBlack();
        } else {
            makeWhite();
        }
    }

// MOBILE SEARCH INPUT POP

    document.querySelector('.search-btn').addEventListener('click', () => {
        document.querySelector('.header .navigation__search-mobile').classList.toggle('show');
    })
    
// CHANGING BG FOR MAIN SECTION EVERY 35 SECONDS

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

// INTERVAL FOR 35s CHANGING MAIN SECTION BG

    setInterval(switchBg, 35000)

// EVENT ON WINDOW BY SCROLLING USING CALLBACK FUNCTION
    window.addEventListener('scroll', changeNavByScrollToBlack)