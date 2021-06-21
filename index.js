// Adds toggles hamburger menu
hamburger = () => {
    let hamburger = document.querySelector('.nav-wrap');
    let topBar = document.getElementById('top');
    let middleBar = document.getElementById('middle');
    let bottomBar = document.getElementById('bottom');

    if (hamburger.className === 'nav-wrap') {
        hamburger.className = 'nav-wrap visible';
        topBar.className+= ' tilt';
        middleBar.className+= ' fade';
        bottomBar.className+= ' untilt';
    } else {
        hamburger.className = 'nav-wrap';
        topBar.classList.remove('tilt');
        middleBar.classList.remove('fade');
        bottomBar.classList.remove('untilt')
    }
}

// Runs when body scrolls, updates menus' state
scrollEvents = () => {
    let homeHeight = document.getElementById('home').offsetHeight;
    let aboutHeight = document.getElementById('about').offsetTop - (window.innerHeight * .5);
    let portfolioHeight = document.getElementById('portfolio').offsetTop - (window.innerHeight * .5);
    let contactHeight = document.getElementById('contact').offsetTop - (window.innerHeight * .5);
    let skillBar = document.querySelector('.skills').offsetTop;
    let progressBars = document.getElementsByClassName('progress');

    let screenHeight = window.scrollY;
    let nav = document.querySelector('.nav-container')

    if (screenHeight >= homeHeight) {
        nav.className = 'flex nav-container fixed'
    } else {
        nav.className = 'flex nav-container'
    }

    let homeButton = document.getElementById('home-button')
    let aboutButton = document.getElementById('about-button')
    let portfolioButton = document.getElementById('portfolio-button')
    let contactButton = document.getElementById('contact-button')

    homeButton.className = 'nav-button'
    aboutButton.className = 'nav-button'
    portfolioButton.className = 'nav-button'
    contactButton.className = 'nav-button'
    if (screenHeight >= aboutHeight && screenHeight < portfolioHeight) {
        aboutButton.className = 'nav-button active';
    } else if (screenHeight >= portfolioHeight && screenHeight < contactHeight) {
        portfolioButton.className = 'nav-button active';
    } else if (screenHeight >= contactHeight) {
        contactButton.className = 'nav-button active';
    } else {
        homeButton.className = 'nav-button active';
    }

    if (screenHeight >= skillBar) {
        for (let i=0; i < progressBars.length; i++) {
            progressBars[i].style.width = progressBars[i].attributes.value.value;
        }
    } else {
        for (let i=0; i < progressBars.length; i++) {
            progressBars[i].style.width = '0%';
        }
    }
}