
**/src/build/ClientFacadeFactory.ts**

```typescript
import { CompositeFactory } from 'pip-services3-components-node';

import { AccountsClientFactory } from 'pip-clients-accounts-node';
import { ActivitiesClientFactory } from 'pip-clients-activities-node';
import { SessionsClientFactory } from 'pip-clients-sessions-node';
import { PasswordsClientFactory } from 'pip-clients-passwords-node';
import { RolesClientFactory } from 'pip-clients-roles-node';
import { BeaconsClientFactory } from 'pip-clients-beacons-node';

export class ClientFacadeFactory extends CompositeFactory {
    public constructor() {
        super();

        this.add(new AccountsClientFactory());
        this.add(new ActivitiesClientFactory());
        this.add(new SessionsClientFactory());
        this.add(new PasswordsClientFactory());
        this.add(new RolesClientFactory());
        this.add(new BeaconsClientFactory());
    }

}

```
