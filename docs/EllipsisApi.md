# DeepAffects.EllipsisApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncIsDepressed**](EllipsisApi.md#asyncIsDepressed) | **POST** /audio/custom/ellipsis/api/v1/async/is_depressed | Find if a person is depressed from audio.
[**syncIsDepressed**](EllipsisApi.md#syncIsDepressed) | **POST** /audio/custom/ellipsis/api/v1/sync/is_depressed | Find if a person is depressed from audio.


<a name="asyncIsDepressed"></a>
# **asyncIsDepressed**
> AsyncResponse asyncIsDepressed(body)

Find if a person is depressed from audio.

Find if a person is depressed from audio.

### Example
```javascript
var DeepAffects = require('deep-affects');
var defaultClient = DeepAffects.ApiClient.default;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'YOUR API KEY';

var apiInstance = new DeepAffects.EllipsisApi();

var body = DeepAffects.Audio.fromFile("/path/to/file"); // {Audio} Audio object

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
webhook = "http://your/webhook/"
apiInstance.asyncIsDepressed(body, webhook, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Audio**](Audio.md)| Audio object that needs to be featurized. |

### Return type

[**AsyncResponse**](AsyncResponse.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="syncIsDepressed"></a>
# **syncIsDepressed**
> &#39;Boolean&#39; syncIsDepressed(body)

Find if a person is depressed from audio.

Find if a person is depressed from audio.

### Example
```javascript
var DeepAffects = require('deep-affects');
var defaultClient = DeepAffects.ApiClient.default;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'YOUR API KEY';

var apiInstance = new DeepAffects.EllipsisApi();

var body = DeepAffects.Audio.fromFile("/path/to/file"); // {Audio} Audio object

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.syncIsDepressed(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Audio**](Audio.md)| Audio object that needs to be featurized. |

### Return type

**&#39;Boolean&#39;**

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
