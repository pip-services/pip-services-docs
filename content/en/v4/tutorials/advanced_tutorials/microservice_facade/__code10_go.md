
**/test/fixture/TestRestClient.go**

```go
package test_fixture

import (
	"bytes"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"strings"

	cerr "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/errors"
)

type TestRestClient struct {
	url string
}

func NewTestRestClient() *TestRestClient {
	c := TestRestClient{
		url: "http://localhost:3000",
	}
	return &c
}

func (c *TestRestClient) invoke(method string,
	route string, headers map[string]string, body interface{}, result interface{}) error {
	var url string = c.url + route

	method = strings.ToUpper(method)
	var bodyReader *bytes.Reader = bytes.NewReader(make([]byte, 0, 0))
	if body != nil {
		jsonBody, _ := json.Marshal(body)
		bodyReader = bytes.NewReader(jsonBody)
	}

	req, err := http.NewRequest(method, url, bodyReader)

	if err != nil {
		return err
	}
	// Set headers
	req.Header.Set("Accept", "application/json")
	if headers != nil && len(headers) > 0 {
		for k, v := range headers {
			req.Header.Set(k, v)
		}
	}
	client := http.Client{}
	response, respErr := client.Do(req)

	if respErr != nil {
		return respErr
	}

	if response.StatusCode == 204 {
		return nil
	}

	resBody, bodyErr := ioutil.ReadAll(response.Body)
	if bodyErr != nil {
		return bodyErr
	}

	if response.StatusCode >= 400 {
		appErr := cerr.ApplicationError{}
		json.Unmarshal(resBody, &appErr)
		return &appErr
	}

	if result == nil {
		return nil
	}

	jsonErr := json.Unmarshal(resBody, result)
	return jsonErr
}

func (c *TestRestClient) Get(path string, result interface{}) error {
	return c.invoke("get", path, nil, nil, result)
}

func (c *TestRestClient) Head(path string, result interface{}) error {
	return c.invoke("head", path, nil, nil, result)
}

func (c *TestRestClient) Post(path string, params interface{}, result interface{}) error {
	return c.invoke("post", path, nil, params, result)
}

func (c *TestRestClient) Put(path string, params interface{}, result interface{}) error {
	return c.invoke("put", path, nil, params, result)
}

func (c *TestRestClient) Del(path string, result interface{}) error {
	return c.invoke("delete", path, nil, nil, result)
}

func (c *TestRestClient) GetAsUser(sessionId string, path string, result interface{}) error {
	return c.invoke("get", path, map[string]string{"x-session-id": sessionId}, nil, result)
}

func (c *TestRestClient) HeadAsUser(sessionId string, path string, result interface{}) error {
	return c.invoke("head", path, map[string]string{"x-session-id": sessionId}, nil, result)
}

func (c *TestRestClient) PostAsUser(sessionId string, path string, params interface{}, result interface{}) error {
	return c.invoke("post", path, map[string]string{"x-session-id": sessionId}, params, result)
}

func (c *TestRestClient) PutAsUser(sessionId string, path string, params interface{}, result interface{}) error {
	return c.invoke("put", path, map[string]string{"x-session-id": sessionId}, params, result)
}

func (c *TestRestClient) DelAsUser(sessionId string, path string, result interface{}) error {
	return c.invoke("delete", path, map[string]string{"x-session-id": sessionId}, nil, result)
}

```
