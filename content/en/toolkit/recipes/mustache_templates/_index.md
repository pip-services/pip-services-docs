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
  {{< include "/content/en/toolkit/recipes/mustache_templates/__code1_python.md" >}}
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
  <tr>
    <td>Conditional negation (if – else)</td>
    <td>{{{#unless VARIABLE}}} Some value or {{{VARIABLE}}} {{{/unless}}}</td>
  </tr>
  <tr>
    <td>If-else equivalent</td>
    <td>{{ #if VARIABLE }} Some value or {{{VARIABLE}}} {{/if}}{{{^VARIABLE}}} Some value or {{{VARIABLE}}} {{{/VARIABLE}}}</td>
  </tr>
</table>

#### Pre-requisites

To use Mustache templates, we must import the **MustacheTemplate** class. The following command shows how to do this:

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
  {{< include "/content/en/toolkit/recipes/mustache_templates/__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Examples

Below are some examples of evaluations:

##### a)	Variable

Variables that have a dictionary structure can be used to validate a template. The following example shows how to use the evaluate_with_variables method.

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
  {{< include "/content/en/toolkit/recipes/mustache_templates/__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Which produces the following output:

<img src="figure1.png" alt="figure 1" style="width:100%">

##### b)	Conditional

To create a conditional template, we use the #if helper. An example of its usage will be a template that creates the message “Hello, (Name)”. The variable used has two fields namely name and exclamation. The last one represents a Boolean value which if it is set to true, the message will show an added exclamation mark. 

**Note**: In general, any value that is interpreted by a specific language as false when the "If" operator is executed will be interpreted as false. Otherwise, it is considered true. For example, in Python, false values are None, False, 0, and ‘’. Node.js adds an empty list to them.

The following example shows how to create a conditional template:

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
  {{< include "/content/en/toolkit/recipes/mustache_templates/__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

After running the above code, we will see the following result:

<img src="figure2.png" alt="figure 2" style="width:100%">
