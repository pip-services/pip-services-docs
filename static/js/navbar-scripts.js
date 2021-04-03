// hack to load sidebar tree

document.addEventListener("readystatechange", loadTree);

function loadTree() {
    var loadbtn = document.getElementById('load-tree');
    loadbtn.setAttribute('hidden', 'true');
    loadbtn.click();

    if (localStorage['openNav'] === 'true') {
        if (!document.getElementById('js-bootstrap-offcanvas').classList.contains('in'))
            document.getElementById('js-bootstrap-offcanvas').classList.add('in');
    }
}


function fadeBg(event) {
    let shadowEl = document.getElementById('shadow');
    if (event.target.classList.contains('nav-link')) 
        shadowEl.style.display = 'block';
    else 
        shadowEl.style.display = 'none';
}

function hideAlgoliaPopUp(el) {
    if (!el.target.classList.contains('algolia-autocomplete') && el.target.getAttribute('type') !== 'search') {
        let autocompleteEl = document.getElementsByClassName('ds-dropdown-menu')[0];
        autocompleteEl.style.display = 'none';
    }
}

document.body.addEventListener("click", hideAlgoliaPopUp);
document.body.addEventListener('click', fadeBg);
document.getElementById('navbarDropdownMenuLink').addEventListener('click', fadeBg);
