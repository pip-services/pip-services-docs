---
type: docs
title: "Test"
linkTitle: "Test"
no_list: true
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    This package provides two classes. The first is used to create test components based on their descriptors, and the second is used to create random process shutdowns.
---
---

<div class="module-body"> 

### Classes

#### [DefaultTestFactory](default_test_factory)
Creates test components by their descriptors.


#### [Shutdown](shutdown)
Random shutdown component that crashes the process
using various methods.

The component is usually used for testing, but brave developers
can try to use it in production to randomly crash microservices.
It follows the concept of "Chaos Monkey" popularized by Netflix.

</div>
