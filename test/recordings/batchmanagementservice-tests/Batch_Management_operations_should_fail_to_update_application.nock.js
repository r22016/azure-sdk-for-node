// This file has been autogenerated.

exports.setEnvironment = function () {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2015-12-01', '*')
  .reply(409, "{\"code\":\"RequestedDefaultVersionNotActive\",\"message\":\"The application package corresponding to the requested default version is not active.\\nRequestId:02af4029-870a-44a8-bf75-d8722e420946\\nTime:2016-03-10T23:49:25.1884524Z\",\"target\":\"BatchAccount\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '248',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': '02af4029-870a-44a8-bf75-d8722e420946',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-request-id': '67496cbb-1214-4348-9e71-2f733ce0cc41',
  'x-ms-correlation-request-id': '67496cbb-1214-4348-9e71-2f733ce0cc41',
  'x-ms-routing-request-id': 'WESTUS:20160310T234926Z:67496cbb-1214-4348-9e71-2f733ce0cc41',
  date: 'Thu, 10 Mar 2016 23:49:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2015-12-01', '*')
  .reply(409, "{\"code\":\"RequestedDefaultVersionNotActive\",\"message\":\"The application package corresponding to the requested default version is not active.\\nRequestId:02af4029-870a-44a8-bf75-d8722e420946\\nTime:2016-03-10T23:49:25.1884524Z\",\"target\":\"BatchAccount\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '248',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': '02af4029-870a-44a8-bf75-d8722e420946',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-request-id': '67496cbb-1214-4348-9e71-2f733ce0cc41',
  'x-ms-correlation-request-id': '67496cbb-1214-4348-9e71-2f733ce0cc41',
  'x-ms-routing-request-id': 'WESTUS:20160310T234926Z:67496cbb-1214-4348-9e71-2f733ce0cc41',
  date: 'Thu, 10 Mar 2016 23:49:25 GMT',
  connection: 'close' });
 return result; }]];