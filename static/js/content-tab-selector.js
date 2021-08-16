
// Set events
let tabSelectors = Array.from(document.getElementsByClassName("content-tab-selector"));

tabSelectors.forEach(tabSelector => {
    let buttons = Array.from(tabSelector.getElementsByClassName('tab-selector-btn-group')[0].getElementsByTagName('button'));

    buttons.forEach(button => {
        button.addEventListener('click', showSelected);
    })

    // by default show first
    showSelected({ target: buttons[0] });
});



function showSelected(e) {
    let contentSections = Array.from(e.target.parentElement.parentElement.getElementsByClassName('content-tab-section'));
    let buttons = Array.from(e.target.parentElement.getElementsByTagName('button'));
    let selectedIndex = buttons.indexOf(e.target);

    if (contentSections.length != buttons.length)
        throw Error('The number of buttons should be equal to the number of sections. Buttons: ' +
            contentSections.length + 
            ', Sections: ' + contentSections.length);
    

    // Show selected
    e.target.classList.add('active');
    e.target.removeAttribute('hidden');
    contentSections[selectedIndex].removeAttribute('hidden');

    // Hide other
    buttons.forEach((button, index) => {
        if (selectedIndex != index) {
            button.classList.remove('active');
            contentSections[index].setAttribute('hidden', "");
        }
        
    });
}