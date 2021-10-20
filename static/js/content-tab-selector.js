// Set events
let buttonGroups = document.getElementsByClassName('tab-selector-btn-group')

if (buttonGroups.length > 0) {

    const langs = {
        "node": 0,
        "net": 1,
        "go": 2,
        "dart": 3,
        "python": 4,
        "java": 5
    }

    let buttons = Array.from(buttonGroups[0].getElementsByTagName('button'));

    buttons.forEach(button => {
        button.addEventListener('click', showSelected);
    })

    // content tab in query
    let contentTabSet = new URL(document.location.href).searchParams.get('contentTab');

    if (contentTabSet != null && langs.hasOwnProperty(contentTabSet)) {
        showSelected({ target: buttons[langs[contentTabSet]] })
    } else {
        showFirstWithContent(buttons);
    }
}

// by default show first with content
function showFirstWithContent(buttons) {
    const reservedKeywords = ['not available'];
    let contentSections = Array.from(buttons[0].parentElement.parentElement.getElementsByClassName('content-tab-section'));

    for (let index = 0; index < contentSections.length; index++) {
        let value = contentSections[index];
        if (value.innerText != undefined
            && value.innerText != null
            && value.innerText.trim() != ''
            && !reservedKeywords.includes(value.innerText.trim().toLowerCase())) {

            showSelected({ target: buttons[index] });
            break;
        }
    }
}
// show selected section
function showSelected(e) {
    let contentSections = Array.from(document.getElementsByClassName('content-tab-section'));
    let buttons = Array.from(e.target.parentElement.getElementsByTagName('button'));
    let selectedIndex = buttons.indexOf(e.target);

    if (contentSections.length != buttons.length && contentSections.length % buttons.length != 0)
        throw Error('The number of buttons must be equal to or a multiple of the number of sections. Buttons: ' +
            contentSections.length +
            ', Sections: ' + contentSections.length);


    // Show selected
    e.target.classList.add('active');
    e.target.removeAttribute('hidden');

    contentSections.forEach((section) => {
        section.setAttribute('hidden', "");
    });

    for (let index = selectedIndex; index < contentSections.length - 1; index += buttons.length) {
        contentSections[index].removeAttribute('hidden');
    }

    // Hide other
    buttons.forEach((button, index) => {
        if (selectedIndex != index) {
            button.classList.remove('active');
        }
    });
}