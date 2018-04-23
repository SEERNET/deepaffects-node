# DeepAffects.DenoiseApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncDenoiseAudio**](DenoiseApi.md#asyncDenoiseAudio) | **POST** /audio/generic/api/v1/async/denoise | Denoise an audio file
[**syncDenoiseAudio**](DenoiseApi.md#syncDenoiseAudio) | **POST** /audio/generic/api/v1/sync/denoise | Denoise an audio file


<a name="asyncDenoiseAudio"></a>
# **asyncDenoiseAudio**
> AsyncResponse asyncDenoiseAudio(body)

Denoise an audio file

Denoise an audio file.

### Example
```javascript
var DeepAffects = require('deep-affects');
var defaultClient = DeepAffects.ApiClient.default;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//UserSecurity.apiKeyPrefix = 'Token';

var apiInstance = new DeepAffects.DenoiseApi();

var body = DeepAffects.Audio.fromFile("/path/to/file"); // {Audio} Audio object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
webhook = "http://your/webhook/"
apiInstance.asyncDenoiseAudio(body, webhook, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Audio**](Audio.md)| Audio object that needs to be denoised. |

### Return type

[**AsyncResponse**](AsyncResponse.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="syncDenoiseAudio"></a>
# **syncDenoiseAudio**
> Audio syncDenoiseAudio(body)

Denoise an audio file

Denoise an audio file.

### Example
```javascript
var DeepAffects = require('deep-affects');
var defaultClient = DeepAffects.ApiClient.default;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'YOUR API KEY';

var apiInstance = new DeepAffects.DenoiseApi();

var body = DeepAffects.Audio.fromFile("/path/to/file"); // {Audio} Audio object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.syncDenoiseAudio(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Audio**](Audio.md)| Audio object that needs to be denoised. |

### Return type

[**Audio**](Audio.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
