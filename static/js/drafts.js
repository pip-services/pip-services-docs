
function deleteDraftContent(){
    let draftEls = document.getElementsByClassName('draft');

    for (draftEl of draftEls) {
        let allHeaders = draftEl.querySelectorAll("h1, h2, h3, h4, h5, h6");

        for (let header of allHeaders) {

            let textHeader = header.innerText;
            let sideBarLinks = document.getElementById('TableOfContents').getElementsByTagName('a');

            for (let link of sideBarLinks) {
                if (link.innerText == textHeader)
                    link.parentElement.remove();
            }
        }
    }
}

document.addEventListener("readystatechange", deleteDraftContent);


