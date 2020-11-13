// Adds toggles hamburger menu
hamburger = () => {
    let hamburger = document.querySelector('.nav-wrap')
    console.log(hamburger);
    if (hamburger.className === 'nav-wrap') {
        hamburger.className = 'nav-wrap visible';
    } else {
        hamburger.className = 'nav-wrap';
    }
}

scrollEvents = () => {
    let homeHeight = document.getElementById('home').offsetHeight;
    let aboutHeight = document.getElementById('about').offsetTop - (window.innerHeight * .5);
    let portfolioHeight = document.getElementById('portfolio').offsetTop - (window.innerHeight * .5);
    let contactHeight = document.getElementById('contact').offsetTop - (window.innerHeight * .5);

    let checkScroll = setInterval(checkHeight=()=>{

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
    }, 300)
}