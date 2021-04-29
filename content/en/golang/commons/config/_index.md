---
type: docs
title: "Config"
linkTitle: "Config"
---

Contains the implementation of the config design pattern.
The configurable interface contains just one method - "configure", which takes ConfigParams
as a parameter (extends StringValueMap class). If any object needs to be configurable,
we implement this interface and parse the ConfigParams that the method received.