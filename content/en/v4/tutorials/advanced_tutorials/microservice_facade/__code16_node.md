
**/src/build/ClientFacadeFactory.ts**
```ts
import { Factory } from 'pip-services4-components-node';
import { Descriptor } from 'pip-services4-components-node';

import { SettingsNullClientV1 } from '../clients/version1/SettingsNullClientV1';
import { AccountsMemoryClientV1 } from '../clients/version1/AccountsMemoryClientV1';
import { PasswordsNullClientV1 } from '../clients/version1/PasswordsNullClientV1';
import { RolesMemoryClientV1 } from '../clients/version1/RolesMemoryClientV1';
import { SessionsMemoryClientV1 } from '../clients/version1/SessionsMemoryClientV1';
import { EmailSettingsMemoryClientV1 } from '../clients/version1/EmailSettingsMemoryClientV1';
import { SitesMemoryClientV1 } from '../clients/version1/SitesMemoryClientV1';
import { InvitationsNullClientV1 } from '../clients/version1/InvitationsNullClientV1';
import { BeaconsMemoryClientV1 } from '../clients/version1/BeaconsMemoryClientV1'

export class ClientFacadeFactory extends Factory {
	public static SettingsNullClientV1Descriptor = new Descriptor("pip-services-settings", "client", "null", "*", "1.0");
	public static AccountsMemoryClientV1Descriptor = new Descriptor("pip-services-accounts", "client", "memory", "*", "1.0");
	public static PasswordNullClientV1Descriptor = new Descriptor("pip-services-passwords", "client", "null", "*", "1.0");
	public static RolesMemoryClientV1Descriptor = new Descriptor("pip-services-roles", "client", "memory", "*", "1.0");
	public static SessionsMemoryClientV1Descriptor = new Descriptor("pip-services-sessions", "client", "memory", "*", "1.0");
	public static EmailSettingsMemoryClientV1Descriptor = new Descriptor("pip-services-emailsettings", "client", "memory", "*", "1.0");
	public static SitesMemoryClientV1Descriptor = new Descriptor("pip-services-sites", "client", "memory", "*", "1.0");
	public static InvitationsNullClientV1Descriptor = new Descriptor("pip-services-invitations", "client", "null", "*", "1.0");
	public static BeaconsMemoryClientV1Descriptor = new Descriptor("beacons", "client", "memory", "*", "1.0");

    public constructor() {
        super();

        this.registerAsType(ClientFacadeFactory.SettingsNullClientV1Descriptor, SettingsNullClientV1);
        this.registerAsType(ClientFacadeFactory.AccountsMemoryClientV1Descriptor, AccountsMemoryClientV1);
        this.registerAsType(ClientFacadeFactory.PasswordNullClientV1Descriptor, PasswordsNullClientV1);
        this.registerAsType(ClientFacadeFactory.RolesMemoryClientV1Descriptor, RolesMemoryClientV1);
        this.registerAsType(ClientFacadeFactory.SessionsMemoryClientV1Descriptor, SessionsMemoryClientV1);
        this.registerAsType(ClientFacadeFactory.EmailSettingsMemoryClientV1Descriptor, EmailSettingsMemoryClientV1);
        this.registerAsType(ClientFacadeFactory.SitesMemoryClientV1Descriptor, SitesMemoryClientV1);
        this.registerAsType(ClientFacadeFactory.InvitationsNullClientV1Descriptor, InvitationsNullClientV1);
        this.registerAsType(ClientFacadeFactory.BeaconsMemoryClientV1Descriptor, BeaconsMemoryClientV1);
    }

}



```
