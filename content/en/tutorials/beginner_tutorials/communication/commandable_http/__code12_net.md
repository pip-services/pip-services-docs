
```cs
using System;
using System.Text;
using System.Net.Http;
using System.Threading.Tasks;

var content = "{ \"name\": \"Peter\" }";
var result = new StringContent(content, Encoding.UTF8, "application/json");

var client = new HttpClient();
var response = await client.PostAsync("http://localhost:8080/commandable_hello_friend/greeting", result);
var responseString = await response.Content.ReadAsStringAsync();

Console.WriteLine(responseString); // Returns '"Hello, Cosme !"'
```
