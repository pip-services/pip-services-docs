---
type: docs
no_list: true
title: "Step 9. Manual testing of facade"
linkTitle: "Step 9. Manual testing of facade" 
gitUrl: "https://github.com/pip-services-samples"
---

Once all of the system's microservices are up and running, we can perform some manual testing of the facade we've created, to ensure that everything's working as intended.

First, let's create a few users without any additional privileges. This can be done with the following command:

```bash
curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"User1\",\"login\": \"user1@gmail.com\",\"email\": \"user1@gmail.com\",\"language\": \"en\",\"theme\": \"light\",\"time_zone\": \"\",\"password\": \"12345678\"}" http://localhost:8080/api/v1/signup
```

```json
{
  "id": "2f60829282a040899077f93000740272",
  "user_id": "1dbb2a5f1b4d43309cbe1c14b1bdcebe",
  "user_name": "User1",
  "active": true,
  "open_time": "2021-06-18T01:14:06.342197Z",
  "close_time": null,
  "request_time": "2021-06-18T01:14:06.342197Z",
  "address": null,
  "client": "insomnia/2021.3.0",
  "user": {
    "id": "1dbb2a5f1b4d43309cbe1c14b1bdcebe",
    "login": "user1@gmail.com",
    "name": "User1",
    "create_time": "2021-06-18T01:14:02.063595Z",
    "time_zone": "",
    "language": "en",
    "theme": "light",
    "roles": [],
    "change_pwd_time": null,
    "sites": [],
    "settings": {},
    "custom_hdr": null,
    "custom_dat": null
  },
  "data": null
}
```

```bash
curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"John Doe\",\"login\": \"johndoe@gmail.com\",\"email\": \"johndoe@gmail.com\",\"language\": \"en\",\"theme\": \"light\",\"time_zone\": \"\",\"password\": \"12345678\"}" http://localhost:8080/api/v1/signup
```

```json
{
  "id": "0e987d19ea3a49908704b5b3a7a1b0b4",
  "user_id": "7c65490e034846cba1c2072dda5c4156",
  "user_name": "John Doe",
  "active": true,
  "open_time": "2021-06-18T01:21:52.214016Z",
  "close_time": null,
  "request_time": "2021-06-18T01:21:52.214016Z",
  "address": null,
  "client": "insomnia/2021.3.0",
  "user": {
    "id": "7c65490e034846cba1c2072dda5c4156",
    "login": "johndoe@gmail.com",
    "name": "John Doe",
    "create_time": "2021-06-18T01:21:52.214016Z",
    "time_zone": "",
    "language": "en",
    "theme": "light",
    "roles": [],
    "change_pwd_time": null,
    "sites": [],
    "settings": {},
    "custom_hdr": null,
    "custom_dat": null
  },
  "data": null
}

```

As a result of this operation, we should receive the same data structure in the response as the one we defined in our **SessionUserV1** class. The parameter that's of most importance to us right now is the session ID - the value of the last id field.

Login as User1 to receive access to the Beacons microservice's methods. This can be done with the following command:

```bash
curl -X POST -H "Content-Type: application/json" -d "{\"login\": \"user1@gmail.com\", \"password\":\"12345678\"}" http://localhost:8080/api/v1/signin
```

```json
{
  "id": "ce42e40c56aa47148eb12ed928eacb45",
  "user_id": "09a2a7d6fc5c4fbcac54c9a6208194c3",
  "user_name": "User1",
  "active": true,
  "open_time": "2021-06-18T01:25:08.542505Z",
  "close_time": null,
  "request_time": "2021-06-18T01:25:08.543543Z",
  "address": null,
  "client": "insomnia/2021.3.0",
  "user": {
    "id": "09a2a7d6fc5c4fbcac54c9a6208194c3",
    "login": "user1@gmail.com",
    "name": "User1",
    "create_time": "2021-06-18T01:21:40.151448Z",
    "time_zone": "",
    "language": "en",
    "theme": "light",
    "roles": null,
    "change_pwd_time": null,
    "sites": [],
    "settings": {},
    "custom_hdr": null,
    "custom_dat": null
  },
  "data": null
}
```

For future operations, use the session id that was returned:

```
"id": "ce42e40c56aa47148eb12ed928eacb45"
```

Let's test how our business logic works. Make a request to get all of the Beacons currently in the system using the session ID we mentioned above. You can do this using the following command:

```bash
curl -X GET -H "x-session-id:ce42e40c56aa47148eb12ed928eacb45" http://localhost:8080/api/v1/beacons
```

```json
{"total":null,"data":[]}
```

We receive an empty list as a result, since we haven't created any Beacons yet in the system.

Attempting to request the URL without a valid session will result in an authentication error:

```bash
curl -X GET http://localhost:8080/api/v1/beacons
```

```json
{
  "type":null,
  "category":"Unauthorized",
  "status":401,
  "code":"NOT_SIGNED",
  "message":"User must be signed in to perform this operation",
  "details":null,
  "correlation_id":null,
  "cause":null,
  "stack_trace": null
}
```

Feel free to explore the rest of the system's functionality on your own using the routes we registered in the facade's controller and the sample data from the [Data Microservice](../../data_microservice) tutorial.

Congratulations! Having completed all of the steps of this tutorial, you've created your first full-fledged facade and are now capable of creating your own using the Pip.Services Toolkit!

This example's source code is available in our repository on [GitHub (facade-sample-*)](https://github.com/pip-services-samples)
