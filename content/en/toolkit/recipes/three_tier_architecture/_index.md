---
type: docs
no_list: true
title: "Three tier architecture"
linkTitle: "Three tier architecture"
weight: 10
description: >-
     How to architect a Pip.Services app.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

### Introduction

### Brief description of the example

### Pre-requisites

### Data object

### Tier 1: Presentation layer or view

### Tier 2: Application layer or controller

### Tier 3: Data layer or persistence layer

### Containerization

### Running the app

Once our app is running, we can see the results by calling the previously defined link.  In our example, the URL is:

[http://localhost:8080/hello_friend/greeting](http://localhost:8080/hello_friend/greeting)

And, if everything went right, we will see the following result:

### Result

Below, we can see the complete code of our example.

### Complete code

### Wrapping up

In this tutorial, we have learned how to create a simple application based on a three-tier architecture. First, we saw how to create a view based on a REST service. Then, we understood how to create a controller that manages the connection between the view and the third layer, namely persistence. Next, we saw how to create a persistence layer that includes a MySQL database. Finally, we executed the application and saw the result on our browser.
