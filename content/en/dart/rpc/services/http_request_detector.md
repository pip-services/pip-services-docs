---
type: docs
title: "HttpRequestDetector"
linkTitle: "HttpRequestDetector"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rpc-dart"
description: >
    Helper class that retrieves parameters from HTTP requests.
---

### Description

The HttpRequestDetector class allows you to retrieve parameters from HTTP requests. 

### Static methods

#### detectAddress
Detects the IP address from where the given HTTP request was received.

> `static` String detectAddress(angel.RequestContext req)

- **req**: angel.RequestContext - HTTP request to process.
- **returns**: String - detected IP address (without a port). If no IP is detected - *null* will be returned.


#### detectBrowser
Detects the browser (using "user-agent") from where the given HTTP request was made.

> `static` String detectBrowser(angel.RequestContext req)

- **req**: angel.RequestContext - HTTP request to process.
- **returns**: String - detected browser. Detectable browsers: "chrome", "msie", "firefox", "safari". Otherwise - "unknown" will be returned.


#### detectPlatform
Detects the platform (using "user-agent") from which the given HTTP request was made.

> `static` String detectPlatform(angel.RequestContext req)

- **req**: angel.RequestContext - HTTP request to process.
- **returns**: String - detected platform and version. Detectable platforms: "mobile", "iphone",
"ipad",  "macosx", "android",  "webos", "mac", "windows". Otherwise - "unknown" will
be returned.


#### detectServerHost
Detects the host name of the request's destination server.

> `static` String detectServerHost(angel.RequestContext req)

- **req**: angel.RequestContext - HTTP request to process.
- **returns**: String - destination server's host name.


#### detectServerPort
Detects the request's destination port number.

> `static` String detectServerPort(angel.RequestContext req)

- **req**: angel.RequestContext - HTTP request to process.
- **returns**: String - detected port number or *80* (if none are detected).
