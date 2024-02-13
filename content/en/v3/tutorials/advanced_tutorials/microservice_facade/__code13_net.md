
**/test/operations/version1/SessionsRoutesV1Test.cs**

```cs
using Pip.Services.SampleFacade.Clients.Version1;
using Pip.Services.SampleFacade.Fixtures;
using PipServices3.Commons.Data;
using PipServices3.Commons.Refer;
using System;
using System.Threading.Tasks;
using Xunit;

namespace Pip.Services.SampleFacade.Operations.Version1
{
	[Collection("Sequential")]
	public class SitesRoutesV1Test: IDisposable
	{
		SiteV1 SITE1 = new SiteV1 
		{
			Id = "2",
			Code = "111",
			Name = "Site #1",
			Description = "Test site #1",
			CreateTime = DateTime.Now,
			CreatorId = "123",
			Active = true
		};

		SiteV1 SITE2 = new SiteV1
		{
			Id = "3",
			Code = "222",
			Name = "Site #2",
			Description = "Test site #2",
			CreateTime = DateTime.Now,
			CreatorId = "123",
			Active = true
		};

		private readonly TestReferences references;
		private readonly TestRestClient rest;

		public SitesRoutesV1Test()
		{
			rest = new TestRestClient();
			references = new TestReferences();
			references.Put(new Descriptor("iqs-services-facade", "operations", "sites", "default", "1.0"), new SitesOperationsV1());
			references.OpenAsync(null).Wait();
		}

		public void Dispose()
		{
			references.CloseAsync(null).Wait();
		}

		[Fact]
		public async Task It_Should_Perform_Site_OperationsAsync()
		{
			SiteV1 site1, site2;

			// Create one site
			var site = await rest.PostAsUserAsync<SiteV1>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites",
					SITE1);

			Assert.NotNull(site);
			Assert.Equal(site.Name, SITE1.Name);
			Assert.Equal(site.Description, SITE1.Description);

			site1 = site;

			// Create another site
			site = await rest.PostAsUserAsync<SiteV1>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites",
					SITE2);

			Assert.NotNull(site);
			Assert.Equal(site.Name, SITE2.Name);
			Assert.Equal(site.Description, SITE2.Description);

			site2 = site;

			// Get all sites
			var page = await rest.GetAsUserAsync<DataPage<SiteV1>>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites");
			Assert.NotNull(page);
			// Account for 1 test site
			Assert.Equal(3, page.Data.Count);

			// Find site by code
			site = await rest.GetAsync<SiteV1>("/api/v1/sites/find_by_code?code=" + site1.Code);
			Assert.NotNull(site);
			Assert.Equal(site1.Id, site.Id);

			// Validate site code
			var result = await rest.PostAsUserAsync<string>(
				TestUsers.AdminUserSessionId, 
				"/api/v1/sites/validate_code?code=" + site1.Code);
			Assert.Equal(site1.Id, result);

			// Generate code
			result = await rest.PostAsUserAsync<string>(
				TestUsers.AdminUserSessionId, 
				"/api/v1/sites/" + site1.Id + "/generate_code");
			Assert.NotNull(result);

			// Update the site
			site1.Description = "Updated Content 1";
			site1.Center = new CenterObjectV1 { Type = "Point", Coordinates = new double[] { 32, -110 } };
			site1.Radius = 5;

			site = await rest.PutAsUserAsync<SiteV1>(
				TestUsers.AdminUserSessionId,
				"/api/v1/sites/" + site1.Id,
				site1);

			Assert.NotNull(site);
			Assert.Equal("Updated Content 1", site.Description);
			Assert.Equal(site1.Name, site.Name);
			Assert.NotNull(site.Center);
			Assert.NotNull(site.Radius);

			site1 = site;

			// Delete site
			site = await rest.DelAsUserAsync<SiteV1>(
				TestUsers.AdminUserSessionId,
				"/api/v1/sites/" + site1.Id);
			Assert.NotNull(site);

			// Try to get delete site
			site = await rest.GetAsUserAsync<SiteV1>(
				TestUsers.AdminUserSessionId,
				"/api/v1/sites/" + site1.Id);
			Assert.NotNull(site);
			Assert.True(site.Deleted);
		}
	}
}

```

