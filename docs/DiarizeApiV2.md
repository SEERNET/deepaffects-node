# DeepAffects.DiarizeApiV2

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncDiarizeAudio**](DiarizeApiV2.md#asyncDiarizeAudio) | **POST** /audio/generic/api/v2/async/diarize | Diarize an audio file

<a name="asyncDiarizeAudio"></a>
# **asyncDiarizeAudio**
> AsyncResponse asyncDiarizeAudio(body)

Diarize an audio file

Diarize an audio file.

### Example
```javascript
var DeepAffects = require('deep-affects');
var defaultClient = DeepAffects.ApiClient.default;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'YOUR API KEY';

var apiInstance = new DeepAffects.DiarizeApiV2();

var body = DeepAffects.DiarizeAudio.fromFile("/path/to/file"); // DiarizeAudio | Audio object that needs to be diarized.

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
webhook = "http://your/webhook/"
apiInstance.asyncDiarizeAudio(body, webhook, callback);
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
