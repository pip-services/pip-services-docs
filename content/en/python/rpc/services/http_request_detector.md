---
type: docs
title: "HttpRequestDetector"
linkTitle: "HttpRequestDetector"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    Helper class that retrieves parameters from HTTP requests.
---

### Description

The HttpRequestDetector class allows you to retrieve parameters from HTTP requests. 

### Static methods

#### detect_address
Detects the IP address from which the given HTTP request was received.

> `static` detect_address(req: bottle.Request): str

- **req**: bottle.Request - HTTP request to process.
- **returns**: str - the detected IP address (without a port). If no IP is detected - *None* will be returned.


#### detect_browser
Detects the browser (using "user-agent") from which the given HTTP request was made.

> `static` detect_browser(req: bottle.Request) -> str

- **req**: bottle.Request - HTTP request to process.
- **returns**: str - the detected browser. Detectable browsers: "chrome", "msie", "firefox", "safari". Otherwise - "unknown" will be returned.


#### detect_platform
Detects the platform (using "user-agent") from which the given HTTP request was made.

> `static` detect_platform(req: bottle.Request): str

- **req**: bottle.Request - an HTTP request to process.
- **returns**: str - the detected platform and version. Detectable platforms: "mobile", "iphone",
"ipad",  "macosx", "android",  "webos", "mac", "windows". Otherwise - "unknown" will
be returned.


#### detect_server_host
Detects the host name of the request's destination server.

> `static` detect_server_host(req: bottle.Request): str

- **req**: bottle.Request - HTTP request to process.
- **returns**: destination server's host name.


#### detect_server_port
Detects the request's destination port number.

> `static` detect_server_port(req: bottle.Request): str

- **req**: bottle.Request - HTTP request to process.
- **returns**: detected port number or *80* (if none are detected).
