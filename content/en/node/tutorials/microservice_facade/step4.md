---
type: docs
no_list: true
title: "Step 4. Authorization"
linkTitle: "Step 4. Authorization" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-node"
---

Once we’ve established who our user is, we need to implement some way of controlling what operations our user can perform, based on the rights he/she has been assigned. In this tutorial, we will be taking a look at how to install access limitations that are based on user roles. The roles themselves are stored in the Roles microservice and are loaded into a UserSession by the loadSession interceptor we discussed in the previous step.

Our Authorizer class was made to provide flexible access management. We will be using this class to limit access to certain operations in our facade’s RESTful services. This class’s implementation can be found in the **Authorize.ts** file, located in the folder **services/version1**. Its code is as follows:

**/src/services/version1/Authorize.ts**

```typescript
let _ = require('lodash');

import { UnauthorizedException } from 'pip-services3-commons-node';
import { HttpResponseSender } from 'pip-services3-rpc-node';

import { BasicAuthManager } from 'pip-services3-rpc-node';
import { RoleAuthManager } from 'pip-services3-rpc-node';
import { OwnerAuthManager } from 'pip-services3-rpc-node';

export class AuthorizerV1 {
    private basicAuth = new BasicAuthManager();
    private roleAuth = new RoleAuthManager();
    private ownerAuth = new OwnerAuthManager();

    public anybody(): (req: any, res: any, next: () => void) => void {
        return this.basicAuth.anybody();
    }

    public signed(): (req: any, res: any, next: () => void) => void {
        return this.basicAuth.signed();
    }

    public owner(idParam: string = 'user_id'): (req: any, res: any, next: () => void) => void {
        return this.ownerAuth.owner(idParam);
    }
        
    public ownerOrAdmin(idParam: string = 'user_id'): (req: any, res: any, next: () => void) => void {
        return this.ownerAuth.ownerOrAdmin(idParam);
    }

    public siteRoles(roles: string[], idParam: string = 'site_id'): (req: any, res: any, next: () => void) => void {
        return (req, res, next) => {
            let user = req.user;
            if (user == null) {
                HttpResponseSender.sendError(
                    req, res,
                    new UnauthorizedException(
                        null, 'NOT_SIGNED',
                        'User must be signed in to perform this operation'
                    ).withStatus(401)
                );
            } else {
                let siteId = req.params[idParam];
                let authorized = _.includes(user.roles, 'admin');
                
                if (siteId != null && !authorized) {
                    for (let role of roles)
                        authorized = authorized || _.includes(user.roles, siteId + ':' + role);
                }

                if (!authorized) {
                    HttpResponseSender.sendError(
                        req, res,
                        new UnauthorizedException(
                            null, 'NOT_IN_SITE_ROLE',
                            'User must be site:' + roles.join(' or site:') + ' to perform this operation'
                        ).withDetails('roles', roles).withStatus(403)
                    );
                } else {
                    next();
                }
            }
        };
    }

    public admin(): (req: any, res: any, next: () => void) => void {
        return this.roleAuth.userInRole('admin');
    }

    public siteAdmin(idParam: string = 'site_id'): (req: any, res: any, next: () => void) => void {
        return this.siteRoles(['admin'], idParam);
    }

    public siteManager(idParam: string = 'site_id'): (req: any, res: any, next: () => void) => void {
        return this.siteRoles(['admin', 'manager'], idParam);
    }

    public siteUser(idParam: string = 'site_id'): (req: any, res: any, next: () => void) => void {
        return this.siteRoles(['admin', 'manager', 'user'], idParam);
    }

    public siteAdminOrOwner(userIdParam: string = 'user_id', siteIdParam: string = 'site_id'): (req: any, res: any, next: () => void) => void {
        return (req, res, next) => {
            let user = req.user;
            if (user == null) {
                HttpResponseSender.sendError(
                    req, res,
                    new UnauthorizedException(
                        null, 'NOT_SIGNED',
                        'User must be signed in to perform this operation'
                    ).withStatus(401)
                );
            } else {
                let userId = req.params[userIdParam] || req.param(userIdParam);
                if (userId != null && userId == user.user_id) {
                    next();
                } else {
                    let siteId = req.params[siteIdParam];
                    let authorized = _.includes(user.roles, 'admin')
                        || _.includes(user.roles, siteId + ':admin');
                    
                    if (!authorized) {
                        HttpResponseSender.sendError(
                            req, res,
                            new UnauthorizedException(
                                null, 'NOT_IN_SITE_ROLE',
                                'User must be site:admin to perform this operation'
                            ).withDetails('roles', ['admin']).withStatus(403)
                        );
                    } else {
                        next();
                    }
                }
            }
        };
    }

}
```

Let’s take a closer look at each of these methods:


- anybody - allows everyone access, even unauthorized users.
- signed - access is granted only to authorized users.
- admin - access is granted only to users with the Administrator role.
- owner - access is granted only for the session owner.


The logic pretty much boils down to making a decision about whether we should allow further access, or send an answer with the corresponding error. In case of the latter, the error is based on the information provided by the clients and the information about the user that is embedded into the interceptor’s request for the active session.


Setting specific access levels to certain resources is configured when registering routes in the service. The service’s implementation is described in [Step 5 - REST services and versioning](../step5).

<span class="hide-title-link">

### [Step 5 - REST services and versioning](../step5)

</span>
