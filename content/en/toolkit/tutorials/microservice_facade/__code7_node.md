
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

