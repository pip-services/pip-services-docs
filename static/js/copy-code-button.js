function addCopyButtons(clipboard) {
    document.querySelectorAll('pre > code').forEach(function (codeBlock) {
        var button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerHTML = `<i class="fa fa-clone" ></i>`
        // button.innerText = 'Copy';
        var div = document.createElement('div');
        div.setAttribute('class', 'code-bg');
        div.appendChild(button);

        button.addEventListener('click', function () {
            clipboard.writeText(codeBlock.textContent).then(
                function () {
                    button.blur();

                    // button.innerText = 'Copied!';
                    button.innerHTML = `<i class="fa fa-clone"></i>`
                    // setTimeout(function () {
                    //     button.innerText = 'Copy';
                    // }, 2000);
                },
                function (error) {
                    button.innerText = 'Error';
                    console.error(error);
                }
            );
        });

        var pre = codeBlock.parentNode;
        if (pre.parentNode.classList.contains('highlight')) {
            var highlight = pre.parentNode;
            highlight.insertBefore(div, highlight.childNodes[0]);
        } else {
            pre.insertBefore(div, pre.childNodes[0]);
        }
    });
}

// TODO: need delete bottom
if (navigator && navigator.clipboard) {
    addCopyButtons(navigator.clipboard);
} else {
    var script = document.createElement('script');
    script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js';

    script.onload = function () {
        addCopyButtons(clipboard);
    };

    document.body.appendChild(script);
}
