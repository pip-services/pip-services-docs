
```go
package test_operations

import (
	"context"
	"testing"

	testfixture "github.com/pip-services-samples/pip-samples-facade-go/test/fixture"
	"github.com/stretchr/testify/assert"
)

type sessionRoutesV1Test struct {
	references *testfixture.TestReferences
	rest       *testfixture.TestRestClient
	user       map[string]string
}

func newSessionRoutesV1Test() *sessionRoutesV1Test {
	c := &sessionRoutesV1Test{
		user: make(map[string]string, 0),
	}

	c.user["login"] = "test"
	c.user["name"] = "Test User"
	c.user["email"] = "test@conceptual.vision"
	c.user["password"] = "test123"

	return c
}

func (c *sessionRoutesV1Test) setup(t *testing.T) {
	c.rest = testfixture.NewTestRestClient()
	c.references = testfixture.NewTestReferences()
	err := c.references.Open(context.Background())
	if err != nil {
		t.Error("Failed to open references", err)
	}
}

func (c *sessionRoutesV1Test) teardown(t *testing.T) {
	c.rest = nil
	err := c.references.Close(context.Background())
	if err != nil {
		t.Error("Failed to close references", err)
	}
}

func (c *sessionRoutesV1Test) testSignupNewUser(t *testing.T) {

	session := make(map[string]interface{})
	err := c.rest.Post("/api/v1/users/signup", c.user, &session)

	assert.Nil(t, err)
	assert.NotNil(t, session)
	assert.NotNil(t, session["id"])
	assert.Equal(t, session["user_name"], c.user["name"])
}

func (c *sessionRoutesV1Test) testNotSignupWithTheSameEmail(t *testing.T) {

	// Sign up
	session := make(map[string]interface{})
	err := c.rest.Post("/api/v1/users/signup", c.user, &session)
	assert.Nil(t, err)
	// Try to sign up again
	err = c.rest.Post("/api/v1/users/signup", c.user, &session)
	assert.NotNil(t, err)
}

func (c *sessionRoutesV1Test) testShouldSignout(t *testing.T) {
	result := make(map[string]interface{})
	err := c.rest.Post("/api/v1/users/signout", nil, &result)
	assert.Nil(t, err)
}

func (c *sessionRoutesV1Test) testShouldSigninWithEmailAndPassword(t *testing.T) {

	// Sign up
	session := make(map[string]interface{})
	err := c.rest.Post("/api/v1/users/signup",
		c.user, &session)
	assert.Nil(t, err)

	// Sign in with username
	err = c.rest.Post("/api/v1/users/signin",
		map[string]string{
			"login":    c.user["login"],
			"password": c.user["password"],
		}, &session)
	assert.Nil(t, err)
}

func TestSignupNewUser(t *testing.T) {
	c := newSessionRoutesV1Test()

	c.setup(t)
	t.Run("Signup New User", c.testSignupNewUser)
	c.teardown(t)
}

func TestNotSignupWithTheSameEmail(t *testing.T) {
	c := newSessionRoutesV1Test()
	c.setup(t)
	t.Run("Not Signup With The Same Email", c.testNotSignupWithTheSameEmail)
	c.teardown(t)
}
func TestShouldSignout(t *testing.T) {
	c := newSessionRoutesV1Test()
	c.setup(t)
	t.Run("Should Signout", c.testShouldSignout)
	c.teardown(t)

}
func TestShouldSigninWithEmailAndPassword(t *testing.T) {
	c := newSessionRoutesV1Test()
	c.setup(t)
	t.Run("Should Signin With Email And Password", c.testShouldSigninWithEmailAndPassword)
	c.teardown(t)
}

```
