---
type: docs
title: "Getting Started"
linkTitle: "Getting Started" 
weight: 1
no_list: true
exclude_from_list: true
---
---

### [Toolkit Architecture](toolkit_architecture)
The Pip.Services toolkit is divided into a few dozen modules. A small part of these modules make up the core itself, while the rest are optional add ons. This approach simplifies adding new functionality and minimizes dependencies on 3rd party libraries.

### [Microservice Structure](microservice_structure)
In essence, microservices are an architectural style that structures a system as a set of relatively small services. Each of these services has its own independent life cycle, and communication between them is usually built upon light-weight communication protocols. However, there don’t exist any standards regarding the structure of the microservices themselves. Each company, team, and/or developer is free to choose a design that fits their own unique requirements.

### [Configurations](configurations)

In this tutorial, we will see how to create configurations using the ConfigParams class, and how to read those configurations when they contain a parameter called “name” or “id”, and when they have an “options” section.

### [Descriptors](descriptors)

How to locate a component.
This tutorial will help you understand what a descriptor is, how to create one, how to get its properties, how to check its completeness, how to convert it to a string, and how to compare it to other descriptors. Finally, it provides an example of its usage.

### [Dynamic Data Types](dynamic_data_types)

This tutorial explains how to use the three dynamic data types available in Pip.Services. They are AnyValue, AnyValueArray and AnyValueMap, which define dynamic types for single values (variables), arrays, and maps respectively. These types can hold any type of data, which can then be converted to several well-known formats such as integer, float, and more. This tutorial explains each of these classes and their methods through examples.

### [Data Validation](data_validation)

In this tutorial, we will learn how to use a set of validation rules available in the Pip.Services toolkit. First, we will see the necessary pre-requisites. Then, we will see the Schema class, which provides a way to create validation schemas. Lastly, we will see the different validation rules through the use of examples.

### [Caching](caching)

Pip.Services offers two components for caching a value. The first is MemoryCache, which stores values in memory. The second is the NullCache class, which is a dummy cache that can be used to simulate caching. The next two sections explain how to use both components.

### [Your First Microservice](your_first_microservice)
So, let’s start developing microservices using the Pip.Services toolkit. As a simple example, we will make a Hello World microservice, which will greet you in response to your request. The communication protocol will be HTTP REST.

### [Frequently Asked Questions](faq)
Here you will find answers to questions such as what is the origin of the toolkit's name, how stable is PIP.Services, and more.
