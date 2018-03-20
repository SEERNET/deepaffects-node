# DeepAffects.EmotionApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncRecogniseEmotion**](EmotionApi.md#asyncRecogniseEmotion) | **POST** /audio/generic/api/v1/async/recognise_emotion | Find emotion in an audio file
[**syncRecogniseEmotion**](EmotionApi.md#syncRecogniseEmotion) | **POST** /audio/generic/api/v1/sync/recognise_emotion | Find emotion in an audio file


<a name="asyncRecogniseEmotion"></a>
# **asyncRecogniseEmotion**
> AsyncResponse asyncRecogniseEmotion(body)

Find emotion in an audio file

Extract emotion from an audio file.

### Example
```javascript
var DeepAffects = require('deep-affects');
var defaultClient = DeepAffects.ApiClient.default;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'YOUR API KEY';

var apiInstance = new DeepAffects.EmotionApi();

var body = DeepAffects.Audio.fromFile("/path/to/file"); // {Audio} Audio object

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
webhook = "http://your/webhook/"
apiInstance.asyncRecogniseEmotion(body, webhook, callback);
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

<a name="syncRecogniseEmotion"></a>
# **syncRecogniseEmotion**
> [EmotionScore] syncRecogniseEmotion(body)

Find emotion in an audio file

Extract emotion from an audio file.

### Example
```javascript
var DeepAffects = require('deep-affects');
var defaultClient = DeepAffects.ApiClient.default;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//UserSecurity.apiKeyPrefix = 'Token';

var apiInstance = new DeepAffects.EmotionApi();

var body = DeepAffects.Audio.fromFile("/path/to/file"); // {Audio} Audio object

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.syncRecogniseEmotion(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Audio**](Audio.md)| Audio object that needs to be featurized. |

### Return type

[**[EmotionScore]**](EmotionScore.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
