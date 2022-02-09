---
type: docs
title: "GoogleFunctionAction"
linkTitle: "GoogleFunctionAction"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-gcp-nodex"
description: >
    Defines some fields such as action, cmd and schema.
---

### Description

The GoogleFunctionAction defines some fields such as action, cmd and schema.

### Fields

<span class="hide-title-link">

#### action
Action to be executed
> `public` **action**: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\>

#### cmd
Command to call the action
> `public` **cmd**: string

#### schema
Schema to validate action parameters
> `public` **schema**: [Schema](../../../commons/validate/schema)

</span>
