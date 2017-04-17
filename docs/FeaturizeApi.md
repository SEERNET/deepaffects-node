# DeepAffects.FeaturizeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncFeaturizeAudio**](FeaturizeApi.md#asyncFeaturizeAudio) | **POST** /api/v1/audio/async/featurize | featurize an audio file
[**syncFeaturizeAudio**](FeaturizeApi.md#syncFeaturizeAudio) | **POST** /api/v1/audio/sync/featurize | featurize an audio file


<a name="asyncFeaturizeAudio"></a>
# **asyncFeaturizeAudio**
> AsyncResponse asyncFeaturizeAudio(body)

featurize an audio file

Extract paralinguistic feature from an audio file.

### Example
```javascript
var DeepAffects = require('deep_affects');
var defaultClient = DeepAffects.ApiClient.default;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//UserSecurity.apiKeyPrefix = 'Token';

var apiInstance = new DeepAffects.FeaturizeApi();

var body = new DeepAffects.Audio(); // Audio | Audio object that needs to be featurized.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.asyncFeaturizeAudio(body, callback);
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

<a name="syncFeaturizeAudio"></a>
# **syncFeaturizeAudio**
> [[&#39;Number&#39;]] syncFeaturizeAudio(body)

featurize an audio file

Extract paralinguistic feature from an audio file.

### Example
```javascript
var DeepAffects = require('deep_affects');
var defaultClient = DeepAffects.ApiClient.default;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//UserSecurity.apiKeyPrefix = 'Token';

var apiInstance = new DeepAffects.FeaturizeApi();

var body = new DeepAffects.Audio(); // Audio | Audio object that needs to be featurized.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.syncFeaturizeAudio(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Audio**](Audio.md)| Audio object that needs to be featurized. | 

### Return type

**[[&#39;Number&#39;]]**

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

