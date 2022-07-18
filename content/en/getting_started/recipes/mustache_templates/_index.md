---
type: docs
no_list: true
title: "Expressions: Mustache templates"
linkTitle: "Mustache Templates"
description: >-
     How to use Mustache templates with PIP.Services.
---
{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
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
  {{< include "./__code1_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Managing Mustache templates

PIP.Services uses a set of basic constructions to create Mustache-like templates. In this section, we will learn how to use them to build and evaluate different templates.

#### Basic constructions

The library supports the following injections and conditional blocks:

<table class="full-width-table">
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
  {{< include "./__code2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Examples

Below are some examples of evaluations:

##### a)	Variable

Variables that have a dictionary structure can be used to validate a template. The following example shows how to use the evaluate_with_variables method.

{{< tabsection >}}
  {{< include "./__code3_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_python.md" >}}
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
  {{< include "./__code4_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

After running the above code, we will see the following result:

<img src="figure2.png" alt="figure 2" style="width:100%">

And, if we set the exclamation to None, we will get a message without an exclamation mark:

{{< tabsection >}}
  {{< include "./__code5_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

<img src="figure3.png" alt="figure 3" style="width:100%">

##### c)	Conditional negation (if-else)

Now, we want to modify our program to define a template that if the exclamation value is equal to false, it adds a dot at the end. Otherwise, it ends with an exclamation mark.

In the first case, our code is:

{{< tabsection >}}
  {{< include "./__code6_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

And the result is:

<img src="figure4.png" alt="figure 4" style="width:100%">

In the second case, we just modify the value of EXCLAMATION to true,

{{< tabsection >}}
  {{< include "./__code7_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

and we get a string ended in an exclamation mark.

<img src="figure5.png" alt="figure 5" style="width:100%">

##### d)	If-else equivalent

We can also create an equivalent if-else structure by using the #unless helper.  The following code shows how to do this:

{{< tabsection >}}
  {{< include "./__code8_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

<img src="figure6.png" alt="figure 6" style="width:100%">

##### e)	Using default variables

We can also assign default variables to a template and use the evaluate function to check their values. The following is an example of this:

{{< tabsection >}}
  {{< include "./__code9_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Which will result in:

<img src="figure6.png" alt="figure 6" style="width:100%">

Moreover, as variables have a dictionary structure, we can also define the default value as:

{{< tabsection >}}
  {{< include "./__code10_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### f)	Clearing the template

The class offers the clear method to erase all the information stored in a template. The syntax is as follows:


{{< tabsection >}}
  {{< include "./__code11_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Wrapping up

In this tutorial, we have seen how to manage basic Mustache templates. We have learned the basic constructions handled by PIP.Services and seen examples of each of them. We have also learned how to use default variables and how to clear a MustacheTemplate object.
