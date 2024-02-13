---
type: docs
title: "DataDogMetric"
linkTitle: "DataDogMetric"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-expressions-dotnet"
description: >
    Defines fields for DataDog metrics.


---

### Description

The DataDogMetric class defines fields for DataDog metrics.


### Properties

#### Metric
Metric
> `public` string Metric { get; set; }
#### Service
Service
> `public` string Service { get; set; }
#### Host
Host
> `public` string Host { get; set; }
#### Dictionary
Tags
> `public` Dictionary\<string, string\> Tags { get; set; }
#### Type
Type
> `public` string Type { get; set; }
#### Interval
Interval
> `public` int? Interval { get; set; }
#### Points
Points
> `public` List<[DataDogMetricPoint](../datadog_metric_point)> Points { get; set; }

