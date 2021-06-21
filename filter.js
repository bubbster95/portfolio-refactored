filter = (filter) => {
    // Toggle indication color of selected button
    let buttons = document.getElementsByClassName('filter-button' )
    for (let i=0; i<buttons.length; i++){
        buttons[i].classList.remove ('selected-filter')
    }
    window.event.target.className+= ' selected-filter'

    let keys = Object.keys(objArr);

    let projectsWith = keys.filter(key => {
        return (objArr[key].languages.includes(filter))
    })
    removeFilter(projectsWith)

    let projectsWithout = keys.filter(key => {
        return (!objArr[key].languages.includes(filter))
    })
    addFilter(projectsWithout)
}

removeFilter = (replace) => {
    replace.map(project => {
        let visibleProjects = document.getElementById(project);
        visibleProjects.classList.remove('invisible-project');
    })
}

addFilter = (remove) => {
    remove.map(project => {
        let invisibleProjects = document.getElementById(project);
        invisibleProjects.className+= ' invisible-project';
    })
}