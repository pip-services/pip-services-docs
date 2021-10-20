---
type: docs
no_list: true
title: "Descriptors"
linkTitle: "Descriptors"
weight: 1
description: >-
     How to locate a component.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

### Introduction

This tutorial will help you understand what a descriptor is, how to create one, how to get its properties, how to check its completeness, how to convert it to a string, and how to compare it to other descriptors. Finally, it provides an example of its usage.

### What is a Descriptor?

Within the PIP.Services toolkit, a descriptor is a component’s locator that is based on the component’s group, type, kind, name, and version. The Descriptor class is part of the Commons module and is included in the Refer library. The figure below summarizes the different elements of a descriptor.

<img src="figure1.png" alt="figure 1" style="width:100%">

### Using Descriptors

#### a)	Pre-requisites

In order to create and use a descriptor, we first need to import this component. This can be done with the following command:

{{< tabsection >}}
  {{< include "/content/en/toolkit/recipes/logging/__code1_node.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "/content/en/toolkit/recipes/logging/__code1_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "/content/en/toolkit/recipes/logging/__code1_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "/content/en/toolkit/recipes/logging/__code1_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "/content/en/toolkit/recipes/logging/__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

