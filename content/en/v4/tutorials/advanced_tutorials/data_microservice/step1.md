---
type: docs
no_list: true
title: "Step 2. Project structure"
linkTitle: "Step 2. Project structure" 
gitUrl: "https://github.com/pip-services-samples"
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

Before we start actually writing our microservice, we need to create a directory structure in the project's folder.

Create a folder for the project and, inside it, a directory structure to match the one below:

{{< tabsection isMarkdown=true >}}

```
/bin
/config
/docker
/src
└───/build
└───/container
└───/data
│   └───/version1
└───/logic
└───/persistence
└───/service
    └───/version1
/test
└───/logic
└───/persistence
└───/service
    └───/version1

```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```
/bin
/config
/docker
/src
└───/build
└───/container
└───/data
│   └───/version1
└───/logic
└───/persistence
└───/service
    └───/version1
/test
└───/logic
└───/persistence
└───/service
    └───/version1

```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```
/bin
/config
/docker

/build
/container
/data
└───/version1
/logic
/persistence
/service
└───/version1

/test
└───/logic
└───/persistence
└───/service
    └───/version1

```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```
/bin
/config
/docker
/lib
└───/build
└───/container
└───/data
│   └───/version1
└───/logic
└───/persistence
└───/service
    └───/version1
/test
└───/logic
└───/persistence
└───/service
    └───/version1

```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```
/bin
/config
/docker
/src
└───/build
└───/container
└───/data
│   └───/version1
└───/logic
└───/persistence
└───/service
    └───/version1
/test
└───/logic
└───/persistence
└───/service
    └───/version1

```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}
Not available
{{< /tabsection >}}


{{< tabsection >}}
  {{< include "../__code2_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code2_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code2_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code2_dart.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


To install all necessary dependencies, run the following command from a terminal at the root of the project's directory:

{{< tabsection >}}
  {{< include "../__code3_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code3_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code3_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code3_dart.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}



Now that we've got the project all set up, we can move on to [Step 3. Data model development.](../step2)

<span class="hide-title-link">

### [Step 3. Data model development.](../step2)

</span>
