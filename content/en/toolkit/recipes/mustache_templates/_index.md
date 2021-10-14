---
type: docs
no_list: true
title: "Expressions: Mustache templates"
linkTitle: "Mustache templates"
weight: 1
description: >-
     How to use Mustache templates with PIP.Services.
---

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
