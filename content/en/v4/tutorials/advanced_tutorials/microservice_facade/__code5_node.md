
**src/operations/version1/SessionUserV1.ts**
```ts
export class SessionUserV1 {
    /* Identification */
    public id: string;
    public login: string;
    public name: string;
    public create_time: Date;

    /* User information */
    public time_zone: string;
    public language: string;
    public theme: string;

    /* Security info **/
    public roles: string[];
    public change_pwd_time: Date;
    public sites: [{ id: string, name: string }];
    public settings: any;

    /* Custom fields */
    public custom_hdr: any;
    public custom_dat: any;
}


```
