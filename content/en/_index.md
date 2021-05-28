---
type: docs
no_list: true
menu:
  main:
    weight: 20
---

<script>
  
  // redirect to current language main page
  try{
    let currentLangugeUri = localStorage['currentMenuActiveItem'].toLowerCase().replace('.', '/').split('/');
    currentLangugeUri = currentLangugeUri.filter(word => word.length > 2)[0]
    window.location.href += currentLangugeUri;
  } catch {
    window.location.href += 'node';
  }
  
</script>




