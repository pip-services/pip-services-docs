// fade bg
function fade() {

    jQuery("#shadow").toggle();
    console.log('qwe2')

}

function fadeOut() {
    if (!jQuery("#shadow").is(":hidden") && !$(event.target).hasClass('nav-link')) {
        jQuery("#shadow").toggle();
        console.log('qwe1')
    }

    console.log($(event.target).hasClass('dropdown'))
    console.log($(event.target))
}

document.body.addEventListener("click", fadeOut)