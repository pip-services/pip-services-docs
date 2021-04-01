
// fade bg
function fade() {
    jQuery("#shadow").toggle();
}

function fadeOut() {
    if (!jQuery("#shadow").is(":hidden") && !$(event.target).hasClass('nav-link')) {
        jQuery("#shadow").toggle();
    }
}

document.body.addEventListener("click", fadeOut)