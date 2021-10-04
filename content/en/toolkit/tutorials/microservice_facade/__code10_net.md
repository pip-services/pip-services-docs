
**/test/fixture/TestRestClient.cs**

```cs
using PipServices3.Commons.Convert;
using PipServices3.Commons.Data.Mapper;
using PipServices3.Commons.Errors;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace PipServices.Templates.Facade.Fixtures
{
	public class TestRestClient
	{
		private HttpClient _httpClient;

		public TestRestClient()
		{
			_httpClient = new HttpClient();
		}

		public async Task<T> GetAsync<T>(string route, dynamic body = null)
		{
			return await InvokeAsync<T>(HttpMethod.Get, route, body);
		}

		public async Task<T> PostAsync<T>(string route, dynamic body = null)
		{
			return await InvokeAsync<T>(HttpMethod.Post, route, body);
		}


		public async Task<T> GetAsUserAsync<T>(string sessionId, string route, dynamic body = null)
		{
			return await InvokeAsUserAsync<T>(sessionId, HttpMethod.Get, route, body);
		}

		public async Task<T> PostAsUserAsync<T>(string sessionId, string route, dynamic body = null)
		{
			return await InvokeAsUserAsync<T>(sessionId, HttpMethod.Post, route, body);
		}

		public async Task<T> PutAsUserAsync<T>(string sessionId, string route, dynamic body = null)
		{
			return await InvokeAsUserAsync<T>(sessionId, HttpMethod.Put, route, body);
		}

		public async Task<T> DelAsUserAsync<T>(string sessionId, string route, dynamic body = null)
		{
			return await InvokeAsUserAsync<T>(sessionId, HttpMethod.Delete, route, body);
		}

		public async Task<T> InvokeAsync<T>(HttpMethod method, string route, dynamic body = null)
		{
			var requestUri = $"http://localhost:3000" + route;
			var request = new HttpRequestMessage(method, requestUri);

			if (body != null)
			{
				request.Content = new StringContent(JsonConverter.ToJson(body), Encoding.UTF8, "application/json");
			}

			var response = await _httpClient.SendAsync(request);
			
			var responseValue = await response.Content.ReadAsStringAsync();

			if (!response.IsSuccessStatusCode)
			{
				var errorDescription = JsonConverter.FromJson<ErrorDescription>(responseValue);
				throw ApplicationExceptionFactory.Create(errorDescription);
			}

			return JsonConverter.FromJson<T>(responseValue);
		}

		public async Task<T> InvokeAsUserAsync<T>(string sessionId, HttpMethod method, string route, dynamic body = null)
		{
			var requestUri = $"http://localhost:3000" + route;
			var request = new HttpRequestMessage(method, requestUri);
			request.Headers.Add("x-session-id", sessionId);

			if (body != null)
			{
				request.Content = new StringContent(JsonConverter.ToJson(body), Encoding.UTF8, "application/json");
			}

			var response = await _httpClient.SendAsync(request);
			var responseValue = await response.Content.ReadAsStringAsync();

			if (!response.IsSuccessStatusCode)
			{
				var errorDescription = JsonConverter.FromJson<ErrorDescription>(responseValue);
				throw ApplicationExceptionFactory.Create(errorDescription);
			}

			return JsonConverter.FromJson<T>(responseValue);
		}
	}
}

```

