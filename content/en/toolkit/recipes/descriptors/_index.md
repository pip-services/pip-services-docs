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
   Not available
{{< /tabsection >}}

{{< tabsection >}}
   Not available
{{< /tabsection >}}

{{< tabsection >}}
   Not available
{{< /tabsection >}}

{{< tabsection >}}
   Not available
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "/content/en/toolkit/recipes/descriptors/__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### b)	Creating a descriptor

Descriptors can be created by defining an instance of the Descriptor class. The constructor of this class presents the following structure:

**Descriptor(group, type, kind, name, version)**,

where each field can contain a specific value, *, or None.

Based on this syntax, descriptors allow for the implementation of many different scenarios. Some examples are:

{{< tabsection >}}
   Not available
{{< /tabsection >}}

{{< tabsection >}}
   Not available
{{< /tabsection >}}

{{< tabsection >}}
   Not available
{{< /tabsection >}}

{{< tabsection >}}
   Not available
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "/content/en/toolkit/recipes/descriptors/__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### c)	Getting its properties

The values of an instance of a descriptor can be obtained via get_xxx() methods, where xxx stands for group, kind, name, or version respectively. The example below shows how to use each of them.

{{< tabsection >}}
   Not available
{{< /tabsection >}}

{{< tabsection >}}
   Not available
{{< /tabsection >}}

{{< tabsection >}}
   Not available
{{< /tabsection >}}

{{< tabsection >}}
   Not available
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "/content/en/toolkit/recipes/descriptors/__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### d)	Converting to string

A string version of a descriptor can be obtained via the to_string() method. The following example explains it.

{{< tabsection >}}
   Not available
{{< /tabsection >}}

{{< tabsection >}}
   Not available
{{< /tabsection >}}

{{< tabsection >}}
   Not available
{{< /tabsection >}}

{{< tabsection >}}
   Not available
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "/content/en/toolkit/recipes/descriptors/__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

<img src="figure2.png" alt="figure 2" style="width:100%">

