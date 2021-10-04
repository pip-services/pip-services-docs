
**src/service/services/operations/version1/SessionUserV1.cs**

```cs
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace PipServices.Templates.Facade.Operations.Version1
{
	[DataContract]
	public class SessionUserV1
	{
		// Identification
		[DataMember(Name = "id")]
		public string Id { get; set; }
		[DataMember(Name = "login")]
		public string Login { get; set; }
		[DataMember(Name = "name")]
		public string Name { get; set; }
		[DataMember(Name = "create_time")]
		public DateTime CreateTime { get; set; }

		// User preferences
		[DataMember(Name = "time_zone")]
		public string TimeZone { get; set; }
		[DataMember(Name = "language")]
		public string Language { get; set; }
		[DataMember(Name = "theme")]
		public string Theme { get; set; }

		// Security info
		[DataMember(Name = "roles")]
		public List<string> Roles { get; set; }
		[DataMember(Name = "change_pwd_time")]
		public DateTime? ChangePwdTime { get; set; }
		[DataMember(Name = "sites")]
		public List<ISessionSite> Sites { get; set; }
		[DataMember(Name = "settings")]
		public Dictionary<string, string> Settings { get; set; }

		// Custom fields
		[DataMember(Name = "custom_hdr")]
		public object CustomHdr { get; set; }
		[DataMember(Name = "custom_dat")]
		public object CustomDat { get; set; }
	}
}


```
