# SeerNetAudioApIs.DiarizeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncDiarizeAudio**](DiarizeApi.md#asyncDiarizeAudio) | **POST** /api/v1/audio/async/diarize | Diarize an audio file
[**syncDiarizeAudio**](DiarizeApi.md#syncDiarizeAudio) | **POST** /api/v1/audio/sync/diarize | Diarize an audio file


<a name="asyncDiarizeAudio"></a>
# **asyncDiarizeAudio**
> AsyncResponse asyncDiarizeAudio(body)

Diarize an audio file

Diarize an audio file.

### Example
```javascript
var SeerNetAudioApIs = require('seer_net_audio_ap_is');
var defaultClient = SeerNetAudioApIs.ApiClient.default;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//UserSecurity.apiKeyPrefix = 'Token';

var apiInstance = new SeerNetAudioApIs.DiarizeApi();

var body = new SeerNetAudioApIs.DiarizeAudio(); // DiarizeAudio | Audio object that needs to be diarized.


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
var SeerNetAudioApIs = require('seer_net_audio_ap_is');
var defaultClient = SeerNetAudioApIs.ApiClient.default;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//UserSecurity.apiKeyPrefix = 'Token';

var apiInstance = new SeerNetAudioApIs.DiarizeApi();

var body = new SeerNetAudioApIs.DiarizeAudio(); // DiarizeAudio | Audio object that needs to be diarized.


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

