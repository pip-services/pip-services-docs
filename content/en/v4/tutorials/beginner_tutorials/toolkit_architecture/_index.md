---
type: docs
no_list: true
title: "Architecture of the Pip.Services toolkit"
linkTitle: "Toolkit Architecture"
weight: 10
---
{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

The Pip.Services toolkit is divided into a few dozen modules. A small part of these modules make up the core itself, while the rest are optional add ons. This approach simplifies adding new functionality and minimizes dependencies on 3rd party libraries.


The general structure of the Pip.Services toolkit is shown on the following diagram:

![Toolkit architecture diagram](figure1.svg)

The foundation of the toolkit is shown in grey. It is made up of the stacks for the 6 supported programming languages: Java, Node.js, .NET Core, Python, Dart, and Golang.

The core of the toolkit is shown in green. It consists of two modules, both of which are required:


{{< tabsection >}}
  {{< include "./__text1_node.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__text1_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__text1_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__text1_dart.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__text1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


The Pip.Services toolkit is an actively growing project. While the core has proven to be stable over the course of many years, additional modules are constantly being expanded and added. Be sure to regularly check our [news](https://www.pipservices.org/news) to be informed of the latest updates and releases.

