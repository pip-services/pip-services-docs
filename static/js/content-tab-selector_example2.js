
// Set events
let tabSelectors2 = Array.from(document.getElementsByClassName("content-tab-selector2"));

if (tabSelectors2.length > 0) {
    tabSelectors2.forEach(tabSelector => {
        let buttons = Array.from(tabSelector.getElementsByClassName('tab-selector-btn-group')[0].getElementsByTagName('button'));

        buttons.forEach(button => {
            button.addEventListener('click', showSelected);
        })

        showFirstWithContent(buttons);
    });
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

function checkCount(contentSections){
    if (contentSections.length != buttons.length)
        throw Error('The number of buttons should be equal to the number of sections. Buttons: ' +
            contentSections.length +
            ', Sections: ' + contentSections.length);
}

function showSelected(e) {
    let buttons = Array.from(e.target.parentElement.getElementsByClassName('lang-select-btn'));
    let selectedIndex = buttons.indexOf(e.target)

    tabSelectors2.forEach((tab, index)=>{

        let contentSections = tab.getElementsByClassName('content-tab-section')

        // Show selected
        contentSections[selectedIndex].removeAttribute('hidden');
        let tabButtons = Array.from(tab.getElementsByClassName('lang-select-btn'));

        // Hide other
        tabButtons.forEach((button, index) => {
            if (selectedIndex != index) {
                button.classList.remove('active');
                contentSections[index].setAttribute('hidden', "");
            } else {
                button.classList.add('active');
                button.removeAttribute('hidden');
            }

        });
    })

    
}
