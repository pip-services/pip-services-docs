
**/operations/version1/SessionUserV1.go**

```go
package operations1

import (
	"time"
)

type SessionUserV1 struct {
	/* Identification */
	Id         string    `json:"id"`
	Login      string    `json:"login"`
	Name       string    `json:"name"`
	CreateTime time.Time `json:"create_time"`

	/* User information */
	TimeZone string `json:"tim_zone"`
	Language string `json:"language"`
	Theme    string `json:"theme"`

	/* Security info **/
	Roles         []string    `json:"roles"`
	ChangePwdTime time.Time   `json:"change_pwd_time"`
	Sites         Site        `json:"sites"`
	Settings      interface{} `json:"settings"`

	/* Custom fields */
	CustomHdr interface{} `json:"custom_hdr"`
	CustomDat interface{} `json:"custom_dat"`
}

type Site struct {
	Id   string `json:"id"`
	Name string `json:"name"`
}

```
