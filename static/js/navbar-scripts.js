// loadNavbar
document.addEventListener("readystatechange", loadNavbar);

function loadNavbar(event) {

    // fix bug with toc tree empty lines
    let tab = document.getElementById('TableOfContents')
    if (tab != null && tab.getElementsByTagName('li').length > 0){
        for (var el of tab.getElementsByTagName('li')) {
            if (el.innerText === '') { el.remove(); }
            if (el.firstChild != null && el.firstChild.innerText === '') { el.firstChild.remove(); }
        }
    }

    // loadNavbarState
    if (localStorage['openNav'] === 'true') {
        if (document.getElementsByClassName('td-sidebar-nav-active-item').length === 0) { return; }
        // check is the last el
        if (!document.getElementById('js-bootstrap-offcanvas').classList.contains('in')){
            let speedTransition = document.getElementsByClassName('navbar-offcanvas')[0];
            let _tmp = [...speedTransition.style];

            speedTransition.style += 'transition: 0s;'
            document.getElementById('js-bootstrap-offcanvas').classList.add('in');
            speedTransition.style.transition = _tmp
        }
    }
}

function fadeBg(event) {
    let shadowEl = document.getElementById('shadow');
    if (event.target.classList.contains('nav-link')) 
        shadowEl.style.display = 'block';
    else 
        shadowEl.style.display = 'none';
}

function hideAlgoliaPopUp(event) {
    if (document.getElementsByClassName('algolia-autocomplete').length > 0){
        if (!event.target.classList.contains('algolia-autocomplete') && event.target.getAttribute('type') !== 'search') {
            let autocompleteEl = document.getElementsByClassName('ds-dropdown-menu')[0];
            autocompleteEl.style.display = 'none';
        }
    }
}

function saveNavState(event) {
    let pressedEl = event.target
    if (pressedEl.id == 'load-tree') { return; }
    if (pressedEl.classList.contains('nav-item-tree') || pressedEl.parentElement.classList.contains('nav-item-tree') || pressedEl.parentElement.parentElement.classList.contains('nav-item-tree'))
        localStorage['openNav'] = true;
    else
        localStorage['openNav'] = false;
}

function showSearch(event) {
    const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
    );

    if (width < 1200) {
        let searchButton = document.getElementById("search-btn")
        let searchBox = document.getElementById("hidden-search");

        if (searchBox.classList.contains("d-lg-none")) {
            searchBox.classList.remove("d-lg-none");
            // show algolia span
            searchBox.parentElement.classList.add("d-lg-inline-block");
            searchBox.parentElement.classList.remove("d-lg-none");
            // hide btn
            searchButton.classList.remove("d-lg-inline-block");
            searchButton.classList.add("d-lg-none");

            searchBox.focus();

        } else {
            searchBox.classList.add("d-lg-none");
            // hide span algolia
            searchBox.parentElement.classList.remove("d-lg-inline-block");
            searchBox.parentElement.classList.add("d-lg-none");
            // show btn
            searchButton.classList.add("d-lg-inline-block");
        }
    }
}

document.getElementById("search-btn").addEventListener("click", showSearch);
document.getElementById("hidden-search").addEventListener("blur", showSearch);

document.body.addEventListener('click', saveNavState);
document.body.addEventListener("click", hideAlgoliaPopUp);
document.body.addEventListener('click', fadeBg);
document.getElementById('navbarDropdownMenuLink').addEventListener('click', fadeBg);


