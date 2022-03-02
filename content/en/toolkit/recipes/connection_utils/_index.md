---
type: docs
no_list: true
title: "Connection utils"
linkTitle: "Connection utils"
weight: 10
description: >-
     How to use a set of utilities that simplify the handling of connections.
---

### Key takeaways

### Introduction

In this tutorial, you will learn how to use a set of utilities offered by Pip.Services that can be used to simplify the handling of connections. We will start by explaining how to import these components. Then, we will see their syntax and how to use them. Finally, we will explore an example that illustrates the practical application of some of these utilities.

### Pre-conditions

In order to use these utilities, we need to import them first. The following command shows how to do this:

### Utility # 1: composeUri

The composeUri() method creates a URI based on the information given via a ConfigParams object. It also accepts default values for protocol and port, which are used when the ConfigParams object doesn’t provide this information. 

The syntax of this command is

**composeUri(options: ConfigParams, default_protocol: str, default_port: int)**

### Utility # 2: concat

### Utility # 3: exclude

### Utility # 4: include

### Utility # 5: parse_uri

### Practical example

### Wrapping up

In this tutorial, we have seen how to use a set of utilities offered in the Component module that facilitate the programming of connections. 

We learned that these utilities help us to compose a URI from a set of parameters stored in a ConfigParams object, merge two sets of configuration parameters, filter a ConfigParams object, and decompose a URI string.

In the end, we saw an example that illustrated the practical use of some of these utilities.
 
