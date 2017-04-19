# DeepAffects.DiarizeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncDiarizeAudio**](DiarizeApi.md#asyncDiarizeAudio) | **POST** /audio/generic/api/v1/async/diarize | Diarize an audio file
[**syncDiarizeAudio**](DiarizeApi.md#syncDiarizeAudio) | **POST** /audio/generic/api/v1/sync/diarize | Diarize an audio file


<a name="asyncDiarizeAudio"></a>
# **asyncDiarizeAudio**
> AsyncResponse asyncDiarizeAudio(body)

Diarize an audio file

Diarize an audio file.

### Example
```javascript
var DeepAffects = require('deep_affects');
var defaultClient = DeepAffects.ApiClient.default;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'YOUR API KEY';

var apiInstance = new DeepAffects.DiarizeApi();

var body = DeepAffects.DiarizeAudio.fromFile("/path/to/file"); // DiarizeAudio | Audio object that needs to be diarized.

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.asyncDiarizeAudio(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DiarizeAudio**](DiarizeAudio.md)| Audio object that needs to be diarized. |

### Return type

[**AsyncResponse**](AsyncResponse.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="syncDiarizeAudio"></a>
# **syncDiarizeAudio**
> [Audio] syncDiarizeAudio(body)

Diarize an audio file

Diarize an audio file.

### Example
```javascript
var DeepAffects = require('deep_affects');
var defaultClient = DeepAffects.ApiClient.default;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'YOUR API KEY';

var apiInstance = new DeepAffects.DiarizeApi();

var body = DeepAffects.DiarizeAudio.fromFile("/path/to/file"); // DiarizeAudio | Audio object that needs to be diarized.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.syncDiarizeAudio(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DiarizeAudio**](DiarizeAudio.md)| Audio object that needs to be diarized. |

### Return type

[**[Audio]**](Audio.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
