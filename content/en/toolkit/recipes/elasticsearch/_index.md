---
type: docs
no_list: true
title: "Elasticsearch"
linkTitle: "Elasticsearch"
weight: 10
description: >-
     How to send logs to Elasticsearch.
---

### Key takeaways

### Introduction

In this tutorial you will learn how to work with the ElasticSearchLogger component, which is used to send logs to Elasticsearch. First, we will see the necessary pre-requisites. Then, we will continue by creating a custom component with an example method, running it and generating the logs. After this, we will verify that the messages reached Elasticsearch by using the Elasticvue online tool. Finally, we will improve our custom component by including several Pip.Services best practices.

### ElasticSearchLogger

This component, which is a subclass of the CachedLogger component, allows us to send log messages to Elasticsearch. In order to learn how to use it, in the following sections, we will first see how to create a custom component that uses it to send log messages to Elasticsearch. Then, we will learn how to verify that the log messages have arrived. And finally, we will improve our component by adding some interfaces and methods.

