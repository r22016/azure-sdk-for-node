// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls9761?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9761.azuredatalakestore.net\",\"accountId\":\"9b63572f-74a8-4cd3-81fd-1ca88519d0d2\",\"creationTime\":\"2016-05-25T00:25:49.5379278Z\",\"lastModifiedTime\":\"2016-05-25T00:26:57.1510467Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls9761\",\"name\":\"xplattestadls9761\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '590',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'ba39d9b1-d846-4392-9cf3-fe8dee4016a8',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'eab30bd0-4ac3-4321-87a3-37d73f98cbc4',
  'x-ms-routing-request-id': 'WESTUS:20160525T002658Z:eab30bd0-4ac3-4321-87a3-37d73f98cbc4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 25 May 2016 00:26:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls9761?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9761.azuredatalakestore.net\",\"accountId\":\"9b63572f-74a8-4cd3-81fd-1ca88519d0d2\",\"creationTime\":\"2016-05-25T00:25:49.5379278Z\",\"lastModifiedTime\":\"2016-05-25T00:26:57.1510467Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls9761\",\"name\":\"xplattestadls9761\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '590',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'ba39d9b1-d846-4392-9cf3-fe8dee4016a8',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'eab30bd0-4ac3-4321-87a3-37d73f98cbc4',
  'x-ms-routing-request-id': 'WESTUS:20160525T002658Z:eab30bd0-4ac3-4321-87a3-37d73f98cbc4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 25 May 2016 00:26:58 GMT',
  connection: 'close' });
 return result; }]];