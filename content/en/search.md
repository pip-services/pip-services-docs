---
title: Search
layout: search
type: docs
_build:
    list: never
---

<script>

// fix auto change menu selector to home
Array.from(document.getElementsByClassName('nav-link dropdown-item')).forEach(navItem => {
    navItem.classList.remove('active');
    try {
        navItem.firstElementChild.classList.remove('active');
    } catch {
        // pass
    }
    
});

</script>

{{< staticsearch >}}