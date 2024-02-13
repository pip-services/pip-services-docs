---
type: docs
title: "CloudFunctionAction"
linkTitle: "CloudFunctionAction"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-gcp-node"
description: >
    Defines some fields such as action, cmd and schema.
---

### Description

The CloudFunctionAction defines some fields such as action, cmd and schema.

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
> `public` **schema**: [Schema](../../../data/validate/schema)

</span>
