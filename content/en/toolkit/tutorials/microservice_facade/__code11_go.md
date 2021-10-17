
**/test/fixture/TestUsers.go**

```go
package test_fixture

var TestUsers tTestUsers = NewTTestUsers()

type tTestUsers struct {
	AdminUserId        string
	AdminUserName      string
	AdminUserLogin     string
	AdminUserPassword  string
	AdminUserSessionId string

	User1Id        string
	User1Name      string
	User1Login     string
	User1Password  string
	User1SessionId string

	User2Id        string
	User2Name      string
	User2Login     string
	User2Password  string
	User2SessionId string
}

func NewTTestUsers() tTestUsers {
	c := tTestUsers{
		AdminUserId:        "1",
		AdminUserName:      "Admin User",
		AdminUserLogin:     "admin",
		AdminUserPassword:  "pwd123",
		AdminUserSessionId: "111",

		User1Id:        "2",
		User1Name:      "User #1",
		User1Login:     "user1",
		User1Password:  "pwd123",
		User1SessionId: "222",

		User2Id:        "3",
		User2Name:      "User #2",
		User2Login:     "user2",
		User2Password:  "pwd123",
		User2SessionId: "333",
	}
	return c
}

```
