
let selectButtons = Array.from(document.getElementsByClassName("lang-select-btn"));

if(selectButtons.length > 0){
    selectButtons.forEach(button => {
        button.addEventListener('click', showSelected);
    });

    // by default show first
    showSelected({ target: selectButtons[0]});
}

function showSelected(e) {
    let selectedLang = e.target.id.split('-')[1].trim().toLowerCase();

    // show selected
    e.target.classList.add('active')
    document.getElementById(selectedLang).removeAttribute('hidden')

    // hide other
    selectButtons.forEach(button => {
        let sectionId = button.id.split('-')[1].trim();
        console.log(sectionId)
        if (selectedLang != sectionId) {
            button.classList.remove('active')
            document.getElementById(sectionId).setAttribute('hidden', "");
        }
        
    });
}