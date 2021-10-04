
**/src/service/build/ClientFacadeFactory.cs**

```cs
using PipServices.Templates.Facade.Clients.Version1;
using PipServices3.Commons.Refer;
using PipServices3.Components.Build;

namespace PipServices.Templates.Facade.Build
{
	public class ClientFacadeFactory: Factory
	{
		public static Descriptor SettingsNullClientV1Descriptor = new Descriptor("pip-services-settings", "client", "null", "*", "1.0");
		public static Descriptor AccountsMemoryClientV1Descriptor = new Descriptor("pip-services-accounts", "client", "memory", "*", "1.0");
		public static Descriptor PasswordNullClientV1Descriptor = new Descriptor("pip-services-passwords", "client", "null", "*", "1.0");
		public static Descriptor RolesMemoryClientV1Descriptor = new Descriptor("pip-services-roles", "client", "memory", "*", "1.0");
		public static Descriptor SessionsMemoryClientV1Descriptor = new Descriptor("pip-services-sessions", "client", "memory", "*", "1.0");
		public static Descriptor EmailSettingsMemoryClientV1Descriptor = new Descriptor("pip-services-emailsettings", "client", "memory", "*", "1.0");
		public static Descriptor SitesMemoryClientV1Descriptor = new Descriptor("pip-services-sites", "client", "memory", "*", "1.0");
		public static Descriptor InvitationsNullClientV1Descriptor = new Descriptor("pip-services-invitations", "client", "null", "*", "1.0");
		public static Descriptor InvitationsMemoryClientV1Descriptor = new Descriptor("pip-services-invitations", "client", "memory", "*", "1.0");
		public static Descriptor BeaconsMemoryClientV1Descriptor = new Descriptor("pip-services-beacons", "client", "memory", "*", "1.0");

		public ClientFacadeFactory()
		{
			RegisterAsType(SettingsNullClientV1Descriptor, typeof(SettingsNullClientV1));
			RegisterAsType(AccountsMemoryClientV1Descriptor, typeof(AccountsMemoryClientV1));
			RegisterAsType(PasswordNullClientV1Descriptor, typeof(PasswordsNullClientV1));
			RegisterAsType(RolesMemoryClientV1Descriptor, typeof(RolesMemoryClientV1));
			RegisterAsType(SessionsMemoryClientV1Descriptor, typeof(SessionsMemoryClientV1));
			RegisterAsType(EmailSettingsMemoryClientV1Descriptor, typeof(EmailSettingsMemoryClientV1));
			RegisterAsType(SitesMemoryClientV1Descriptor, typeof(SitesMemoryClientV1));
			//RegisterAsType(InvitationsNullClientV1Descriptor, typeof(InvitationsNullClientV1));
			RegisterAsType(InvitationsMemoryClientV1Descriptor, typeof(InvitationsMemoryClientV1));
			RegisterAsType(BeaconsMemoryClientV1Descriptor, typeof(BeaconsMemoryClientV1));
		}
	}
}


```

