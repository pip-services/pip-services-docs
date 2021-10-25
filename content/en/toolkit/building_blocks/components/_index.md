---
type: docs
no_list: true
title: "Components"
linkTitle: "Components"
description: >-
     
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Components and their interfaces

The Pip.Services toolkit is based on components. The component definition is very flexible. It allows users to create components from scratch, convert existing pieces of code into a component or choose from a large collection of prebuilt components. In the toolkit, any class (or struct in non-OOP languages) can be a component. Additional capabilities can be added via a few standard interfaces that enable specific states in the component lifecycle.

<img src="figure1.png" alt="figure 1" style="width:100%">

The component interfaces are optional, and can be used in any combination. They are defined in the commons module:

- The IConfigurable interface with the configure method allows passing component configuration parameters. The configurations defined in the ConfigParams object may come from different sources and can be defined during design, runtime or deployment time. Typically components are configured once, right after creation. IReconfigurable interface signifies that components can receive and process configurations more than once.
