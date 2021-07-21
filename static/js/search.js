var sidebars = document.getElementById("sidebars");
var searchResults = document.getElementById("search-results");
var searchInput = document.getElementById("search-query");

// the length of the excerpts
var contextDive = 40;

var timerUserInput = false;
searchInput.addEventListener("keyup", function () {
    // don't start searching every time a key is pressed,
    // wait a bit till users stops typing
    if (timerUserInput) { clearTimeout(timerUserInput); }
    timerUserInput = setTimeout(
        function () {
            search(searchInput.value.trim());
        },
        500
    );
});

// weights for search prioritet
const title = 10;
const description = 5;
const content = 3;

function search(searchQuery) {
    // clear previous search results
    while (searchResults.firstChild) {
        searchResults.removeChild(searchResults.firstChild);
    }

    // ignore empty and short search queries
    if (searchQuery.length === 0 || searchQuery.length < 3) {
        searchResults.style.display = "none";
        sidebars.style.display = "block";
        return;
    }

    sidebars.style.display = "none";
    searchResults.style.display = "block";
    
    let indexJsonPath = "/index.json";

    // check if is githubpages url
    if (window.location.href.search("github") > -1) {
        indexJsonPath = window.location.origin + "/pip-services-docs/index.json"
    }

    // load your index file
    getJSON(indexJsonPath, function (contents) {
        var results = [];

        

        let regex = new RegExp(searchQuery, "i");
        // iterate through posts and collect the ones with matches
        contents.forEach(function (post) {
            post.weight = 0; // post priority for search

            // here you can also search in tags, categories
            // or whatever you put into the index.json layout
            if (post.title.match(regex))
                post.weight += title; 
            
            if (post.description && post.description.match(regex))
                post.weight += description;
            
            if (post.content.match(regex))
                post.weight += content;

            if (post.weight > 0)
                results.push(post);
            
        });

        if (results.length > 0) {
            let foundCount = 0;
            
            // ranging by weights
            results = results.sort(
                (a, b) => {

                    if (a.weight > b.weight) 
                        return -1;
  
                    if (a.weight < b.weight) 
                        return 1;

                // its equal
                return 0;
                }
            );

            // populate search results block with excerpts around the matched search query
            results.forEach(function (value, key) {

                // add section chapters
                let subSections = value.permalink.split('/')

                // filter empty and localhost vals
                subSections = subSections.filter(x => !x.includes('localhost') && x != "").slice(0, -1);

                if (localStorage['currentMenuActiveItem'].toLowerCase() != 'home'){
                    subSections = subSections.slice(1);
                    
                    let activeMenuItem = localStorage['currentMenuActiveItem'].toLowerCase().replace('.', '/').split('/');
                    let menuItemOfResult = value['permalink'].split('/');
                    let isFromCurrentMenu = activeMenuItem.filter(x => menuItemOfResult.includes(x) && x !== "").length > 0 ? true : false;
                    if (!isFromCurrentMenu)
                        return;
                }

                

                // capitalize names
                subSections.forEach((item, index) => {
                    subSections[index] = item.charAt(0).toUpperCase() + item.slice(1);
                })

                value.title = subSections.join(' → ') + ' → ' + value.title

                foundCount++;

                let firstIndexOf = value.content.toLowerCase().indexOf(searchQuery.toLowerCase());
                let lastIndexOf = firstIndexOf + searchQuery.length;
                let spaceIndex = firstIndexOf - contextDive;
                if (spaceIndex > 0) {
                    spaceIndex = value.content.indexOf(" ", spaceIndex) + 1;
                    if (spaceIndex < firstIndexOf) { firstIndexOf = spaceIndex; }
                    else { firstIndexOf = firstIndexOf - contextDive / 2; }
                }
                else {
                    firstIndexOf = 0;
                }
                let lastSpaceIndex = lastIndexOf + contextDive;
                if (lastSpaceIndex < value.content.length) {
                    lastSpaceIndex = value.content.indexOf(" ", lastSpaceIndex);
                    if (lastSpaceIndex !== -1) { lastIndexOf = lastSpaceIndex; }
                    else { lastIndexOf = lastIndexOf + contextDive / 2; }
                }
                else {
                    lastIndexOf = value.content.length - 1;
                }

                let summary = value.content.substring(firstIndexOf, lastIndexOf);
                if (firstIndexOf !== 0) { summary = "...".concat(summary); }
                if (lastIndexOf !== value.content.length - 1) { summary = summary.concat("..."); }

                // fix for githubpages url
                if (window.location.href.search("pip-services-docs") > -1){
                    value.permalink = "/pip-services-docs/" + value.permalink;
                }
                

                let div = "".concat("<div id=\"search-summary-", key, "\">")
                    .concat("<h4 class=\"post-title\"><a href=\"", value.permalink, "\">", value.title, "</a></h4>")
                    .concat("<p>", summary, "</p>")
                    .concat("</div>");
                

                searchResults.appendChild(htmlToElement(div));

                // optionaly highlight the search query in excerpts using mark.js
                new Mark(document.getElementById("search-summary-" + key))
                    .mark(searchQuery, { "separateWordSearch": false });
            });

            searchResults.prepend(
                htmlToElement("<div><b>Found: ".concat(foundCount, "</b></div>"))
            );
        }
        else {
            searchResults.appendChild(
                htmlToElement("<div><b>Nothing found</b></div>")
            );
        }
    });
}

function getJSON(url, fn) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            fn(JSON.parse(xhr.responseText));
        }
        else {
            console.error(
                "Some error processing ".concat(url, ": ", xhr.status)
            );
        }
    };
    xhr.onerror = function () {
        console.error("Connection error: ".concat(xhr.status));
    };
    xhr.send();
}

// it is faster (more convenient)
// to generate an element from the raw HTML code
function htmlToElement(html) {
    let template = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}


// function assignQueryParams(event) {
//     if (window.location.search.split('=')[1] === "" || window.location.search.split('=')[1] === undefined) { return; }
//     let searchQuery = decodeURIComponent(window.location.search.split('=')[1]);
//     let searchInput = document.getElementById('search-query');
//     searchInput.value = searchQuery
//     searchInput.dispatchEvent(new KeyboardEvent('keyup'));
// }

// document.addEventListener("DOMContentLoaded", () => { setTimeout(assignQueryParams, 100) })