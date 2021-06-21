

// Fills project section with project tiles
populate = () => {
    let projects = document.querySelector('.filtered-projects');
    let objKeys = Object.keys(objArr);

    // Create project tile for each object key
    objKeys.map(project => {
        // Container
        let projectWrapper = document.createElement('DIV');
        projectWrapper.className = 'project-wrapper';
        projectWrapper.id = project;
        projects.appendChild(projectWrapper);

        // Image
        let projectImage = document.createElement('Div');
        projectImage.className = 'project-image';
        projectImage.style.backgroundImage = `url(${objArr[project].thumbnail.src})`;
        projectImage.alt = `${objArr[project].thumbnail.alt}`;
        projectWrapper.appendChild(projectImage);

        // Title
        let projectTitle = document.createElement('p');
        projectTitle.className = 'project-title';
        projectTitle.innerHTML = `${objArr[project].thumbnail.title}`;
        projectWrapper.appendChild(projectTitle)

        // Text
        let projectDescription = document.createElement('P');
        projectDescription.className = 'project-description';
        projectDescription.innerHTML = `${objArr[project].thumbnail.description}`;
        projectWrapper.appendChild(projectDescription);

        // Button
        let viewProject = document.createElement('BUTTON');
        viewProject.className = 'view-project-button';
        viewProject.innerHTML = 'View Project';
        viewProject.addEventListener('click', () => {modal(project, projects)})
        projectWrapper.appendChild(viewProject);

        // Hover Events
        let items = [projectWrapper, projectImage, projectTitle, viewProject];
        items.map(item => {item.addEventListener('mouseover', addVisibility)})
        projectWrapper.addEventListener('mouseout', removeVisibilty)
    })
}

// Hover over project tile
addVisibility = (e) => {
    let parent = e.target.offsetParent
    let children = parent.children
    children[0].style.opacity = 0;
    for (let i=1; i < 4; i++) {
        children[i].className+= ' hover' 
    }
}

// Hover off project tile
removeVisibilty = (e) => {
    let parent = e.target.offsetParent
    let children = parent.children
    children[0].style.opacity = 100;
    for (let i=1; i < 4; i++) {
        children[i].classList.remove('hover') 
    }
}

// Populate / Toggle modal from object information
modal = (project, projects) => {

    // If modal exists toggle visibility
    if (document.getElementById(project + '-modal')) {
        showSlides(slideIndex = 1, document.getElementById(project + '-modal'))
        document.getElementById(project + '-close-box').style.display = 'block';
        document.getElementById(project + '-modal').style.display = 'block';
    } else { // Generate modal and fill with content
        let modal = document.createElement('DIV');
        modal.className = 'modal';
        modal.id = project + '-modal';
        projects.appendChild(modal);

        // Close Modal Button
        let closeBox = document.createElement('DIV');
        closeBox.className = 'close-box';
        closeBox.id = project + '-close-box';
        closeBox.addEventListener('click', () => {closeModal(project)})
        projects.appendChild(closeBox)

        // Close by clicking outsite box
        let close = document.createElement('BUTTON');
        close.className = 'close-modal';
        close.innerHTML = 'X';
        close.addEventListener('click', () => {closeModal(project)});
        modal.appendChild(close);


        // Carosel Slider
        let carosel = document.createElement('DIV');
        carosel.className = 'carosel';
        modal.appendChild(carosel)

        // Loop thorugh available images
        let modalImages = objArr[project].images;
        let RegEx = /.mp4$/;
        modalImages.map((image, index) => {
            if (RegEx.test(image[0])) { 
                let newVideo = document.createElement('VIDEO');
                newVideo.className = 'modal-slide-image video';
                newVideo.controls = true;
                newVideo.type = 'video/mp4'
                newVideo.src = image[0];
                newVideo.alt = image[1];
                newVideo.id =  index;
                carosel.appendChild(newVideo);
            } else {
                let newImage = document.createElement('IMG');
                newImage.className = 'modal-slide-image';
                newImage.src = image[0];
                newImage.alt = image[1];
                newImage.id =  index;
                carosel.appendChild(newImage);
            }
        })

        let previousSlide = document.createElement('DIV');
        previousSlide.className = 'previous-slide';
        previousSlide.innerHTML = '<';
        previousSlide.addEventListener('click', ()=> {plusSlide(-1, modal)});
        carosel.appendChild(previousSlide);

        let nextSlide = document.createElement('DIV');
        nextSlide.className = 'next-slide';
        nextSlide.innerHTML = '>';
        nextSlide.addEventListener('click', ()=> {plusSlide(1, modal)});
        carosel.appendChild(nextSlide);

        // Text Box 
        let textBox = document.createElement('DIV');
        textBox.className = 'modal-text';
        modal.appendChild(textBox)

        let title = document.createElement('H1');
        title.className = 'modal-title'
        title.innerHTML = objArr[project].info.title;
        textBox.appendChild(title)

        let subHead = document.createElement('H3');
        subHead.className = 'modal-sub';
        subHead.innerHTML = objArr[project].info.subHead;
        textBox.appendChild(subHead)

        let summary = document.createElement('P');
        summary.className = 'modal-summary';
        summary.innerHTML = objArr[project].info.summary
        textBox.appendChild(summary)

        // Create site link button if possible
        if (objArr[project].info.url){
            let viewSite = document.createElement('BUTTON');
            viewSite.className = 'modal-view-site';
            viewSite.innerHTML = 'View Site';
            viewSite.addEventListener('click', () => { goToLink(objArr[project].info.url) });
            textBox.appendChild(viewSite);
        }
        // Create Github link button if possible
        if (objArr[project].info.gitHub) {
            let veiwGit = document.createElement('BUTTON');
            veiwGit.className = 'modal-view-git';
            veiwGit.innerHTML = 'View GitHub';
            veiwGit.addEventListener('click', () => { goToLink(objArr[project].info.gitHub) });
            textBox.appendChild(veiwGit);
        }
        showSlides(slideIndex = 1, modal)
    }
}

/* modal Controls */
let slideIndex = 1;

plusSlide = (n, modal) => { showSlides(slideIndex += n, modal); }

showSlides = (n, modal) => {
    // Change Slides
    let slides = modal.getElementsByClassName("modal-slide-image");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('current-slide') 
    }
    slides[slideIndex-1].className+= ' current-slide';
}
/* End modal Controls */

closeModal = (project) => {
    document.getElementById(project + '-close-box').style.display = 'none';
    document.getElementById(project + '-modal').style.display = 'none';
}

goToLink = (link) => {
    window.open(link, '_blank');
}