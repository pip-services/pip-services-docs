---
type: docs
no_list: true
title: "Expressions: Mustache templates"
linkTitle: "Mustache templates"
weight: 1
description: >-
     How to use Mustache templates with PIP.Services.
---
{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table>
  <tr>
    <td>MustacheTemplate </td>
    <td>PIP.Services component used to construct and evaluate Mustache templates.</td>
  </tr>
  <tr>
    <td>Basic constructors</td>
    <td>Helpers used to construct more complex templates.</td>
  </tr>
  <tr>
    <td>template</td>
    <td>MustacheTemplate ‘s property used to create templates.</td>
  </tr>
  <tr>
    <td>evaluate</td>
    <td>MustacheTemplate ‘s method used to validate Mustache templates.</td>
  </tr>
 </table>

### Introduction

PIP.Services offers an implementation of a Mustache engine available in its Expressions module. This implementation of Mustache is enhanced with the addition of some helpers. In this tutorial, you will learn how to use the MustacheTemplate component, which can be used to evaluate Mustache templates. First, we will see its pre-requisites, then, we will learn some basic constructions supported by the component. Finally, we will see some examples of its usage.

### Pre-requisites
In order to use the Mustache template library, we must first install the Expressions module by running the following command:

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
  {{< include "/content/en/toolkit/recipes/logging/__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Managing Mustache templates

PIP.Services uses a set of basic constructions to create Mustache-like templates. In this section, we will learn how to use them to build and evaluate different templates.

#### Basic constructions

The library supports the following injections and conditional blocks:

<table>
  <tr>
    <td>Variable</td>
    <td>{{{NAME}}}</td>
  </tr>
  <tr>
    <td>Conditional (if)</td>
    <td>{{ #if VARIABLE }}Some value or {{{VARIABLE2}}} {{/if}}</td>
  </tr>
</table>
