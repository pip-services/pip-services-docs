---
title: "Reflection"
linkTitle: "Reflection"
weight: 100
description: >-
     How to allow a component to examine itself and manage its internal properties..
---

### Key takeaways

### Introduction
In this tutorial, you will learn how to use the Reflect package. This package provides different classes that will allow you to develop code with introspection capacity. We will start by briefly describing reflection. Then, we will learn how to use each of the different components provided in the package through the use of examples.

### What is reflection?
Reflection is a feature available in PIP. Services through its Reflect package. It allows a running microservice to examine and manage its internal properties. For example, given a class, it helps us to obtain the names of all its methods or the values of its parameters. 
In order to understand this package, we will go through its main classes and explain how they work.

### The Reflect package

This package belongs to the commons module and contains several classes used to examine objects dynamically.

#### a)	MethodReflector

The MethodReflector class allows us to examine an object’s methods and to execute them dynamically. The get_method_names method returns a list with all the methods in a class. The has_method method returns a boolean indicating whether or not a method belongs to a class. And, the invoke_method provides a way to invoke the execution of a method at runtime. The example below shows how to obtain the names of all methods in an object, find out if a method belongs to that object, and invoke its execution.



<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn lang-select-btn">Node</button>
	  <button type="button" class="btn lang-select-btn">.NET</button>
	  <button type="button" class="btn lang-select-btn">Golang</button>
	  <button type="button" class="btn lang-select-btn">Dart</button>
	  <button type="button" class="btn lang-select-btn">Python</button>
	  <button type="button" class="btn lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available 
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available   
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/reflection/__code1_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>
