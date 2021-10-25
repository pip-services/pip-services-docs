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

<img src="figure1.png" alt="figure 1" style="width:60%">

The component interfaces are optional, and can be used in any combination. They are defined in the commons module:

- The IConfigurable interface with the configure method allows passing component configuration parameters. The configurations defined in the ConfigParams object may come from different sources and can be defined during design, runtime or deployment time. Typically components are configured once, right after creation. IReconfigurable interface signifies that components can receive and process configurations more than once.

- The IReferenceable interface sets component dependencies. It represents the locator pattern, then dependencies are retrieved from an IReferences object passed to the component via the setReferences method using a special locator. Locators can be any values, but the PipServices toolkit most often uses Descriptors, which allow matching dependencies using 5 fields: logical group, logical type, implementation type (kind), unique object name and implementation version. The IUnreferenceable interface notifies components via the unsetReferences method to release dependencies before the component is destroyed.

- The IOpenable interface allows components to establish connections, start active threads, or do other things when they are open to prepare for handling incoming calls. On close, the collections are released and resources are freed. The IClosable interface is a subset of IOpenable with only the close method in it.

- The IExecutable interface allows components to process incoming calls by implementing an execute method. And the INotifiable interface receives asynchronous notifications via the notify method.
