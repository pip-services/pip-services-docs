
**/src/services/version1/Authorize.ts**

```typescript
let _ = require('lodash');

import { UnauthorizedException } from 'pip-services3-commons-node';
import { HttpResponseSender } from 'pip-services3-rpc-node';

import { BasicAuthManager } from 'pip-services3-rpc-node';
import { RoleAuthManager } from 'pip-services3-rpc-node';

export class AuthorizerV1 {
    private basicAuth = new BasicAuthManager();
    private roleAuth = new RoleAuthManager();

    // Anybody who entered the system
    public anybody(): (req: any, res: any, next: () => void) => void {
        return this.basicAuth.anybody();
    }

    // Only registered and authenticated users
    public signed(): (req: any, res: any, next: () => void) => void {
        return this.basicAuth.signed();
    }

    // System administrator
    public admin(): (req: any, res: any, next: () => void) => void {
         return this.roleAuth.userInRole('admin');
    }

    // Only the user session owner
    public owner(idParam: string = 'user_id'): (req: any, res: any, next: () => void) => void {
        return (req, res, next) => {
            let user = req.user;
            let partyId = req.params[idParam] || req.param(idParam);
            if (user == null) {
                HttpResponseSender.sendError(
                    req, res,
                    new UnauthorizedException(
                        null, 'NOT_SIGNED',
                        'User must be signed in to perform this operation'
                    ).withStatus(401)
                );
            } else if (partyId == null) {
                HttpResponseSender.sendError(
                    req, res,
                    new UnauthorizedException(
                        null, 'NO_USER_ID',
                        'User id is not defined'
                    ).withStatus(401)
                );
            } else {
                let isOwner = partyId == user.id;

                if (!isOwner) {
                    HttpResponseSender.sendError(
                        req, res,
                        new UnauthorizedException(
                            null, 'NOT_OWNER', 'Only user owner access is allowed'
                        ).withDetails('user_id', partyId).withStatus(403)
                    );
                } else {
                    next();
                }
            }
        };
    }

}
```

