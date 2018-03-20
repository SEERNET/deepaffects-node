# DeepAffects.FeaturizeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncFeaturizeAudio**](FeaturizeApi.md#asyncFeaturizeAudio) | **POST** /audio/generic/api/v1/async/featurize | featurize an audio file
[**syncFeaturizeAudio**](FeaturizeApi.md#syncFeaturizeAudio) | **POST** /audio/generic/api/v1/sync/featurize | featurize an audio file


<a name="asyncFeaturizeAudio"></a>
# **asyncFeaturizeAudio**
> AsyncResponse asyncFeaturizeAudio(body)

featurize an audio file

Extract paralinguistic feature from an audio file.

### Example
```javascript
var DeepAffects = require('deep-affects');
var defaultClient = DeepAffects.ApiClient.default;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'YOUR API KEY';

var apiInstance = new DeepAffects.FeaturizeApi();

var body = DeepAffects.Audio.fromFile("/path/to/file"); // {Audio} Audio object

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
webhook = "http://your/webhook/"
apiInstance.asyncFeaturizeAudio(body, webhook, callback);
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
var DeepAffects = require('deep-affects');
var defaultClient = DeepAffects.ApiClient.default;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'YOUR API KEY';

var apiInstance = new DeepAffects.FeaturizeApi();

var body = DeepAffects.Audio.fromFile("/path/to/file"); // {Audio} Audio object

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
