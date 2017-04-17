# deepaffects-node

DeepAffects - JavaScript client for DeepAffects API

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install deep-affects --save
```

#### git

```shell
npm install SEERNET/deepaffects-node --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Documentation for Authorization

DeepAffects API authenticates all the api requests via API Key.

For API key registration and setup, checkout our [quickstart guide](https://developers.deepaffects.com/docs/#quickstart-guide)

### UserSecurity

- **Type**: API key
- **API key parameter name**: apikey
- **Location**: URL query string

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var DeepAffects = require('deep-affects');

var defaultClient = DeepAffects.ApiClient.instance;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = "YOUR API KEY"

var api = new DeepAffects.DenoiseApi()

var body = new DeepAffects.Audio(); // {Audio} Audio object that needs to be denoised.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.asyncDenoiseAudio(body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *BaseURL*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DeepAffects.DenoiseApi* | [**asyncDenoiseAudio**](docs/DenoiseApi.md#asyncDenoiseAudio) | **POST** /api/v1/audio/async/denoise | Denoise an audio file
*DeepAffects.DenoiseApi* | [**syncDenoiseAudio**](docs/DenoiseApi.md#syncDenoiseAudio) | **POST** /api/v1/audio/sync/denoise | Denoise an audio file
*DeepAffects.DiarizeApi* | [**asyncDiarizeAudio**](docs/DiarizeApi.md#asyncDiarizeAudio) | **POST** /api/v1/audio/async/diarize | Diarize an audio file
*DeepAffects.DiarizeApi* | [**syncDiarizeAudio**](docs/DiarizeApi.md#syncDiarizeAudio) | **POST** /api/v1/audio/sync/diarize | Diarize an audio file
*DeepAffects.EllipsisApi* | [**asyncIsDepressed**](docs/EllipsisApi.md#asyncIsDepressed) | **POST** /api/v1/audio/async/ellipsis/is_depressed | Find if a person is depressed from audio.
*DeepAffects.EllipsisApi* | [**syncIsDepressed**](docs/EllipsisApi.md#syncIsDepressed) | **POST** /api/v1/audio/sync/ellipsis/is_depressed | Find if a person is depressed from audio.
*DeepAffects.EmotionApi* | [**asyncRecogniseEmotion**](docs/EmotionApi.md#asyncRecogniseEmotion) | **POST** /api/v1/audio/async/recognise_emotion | Find emotion in an audio file
*DeepAffects.EmotionApi* | [**syncRecogniseEmotion**](docs/EmotionApi.md#syncRecogniseEmotion) | **POST** /api/v1/audio/sync/recognise_emotion | Find emotion in an audio file
*DeepAffects.FeaturizeApi* | [**asyncFeaturizeAudio**](docs/FeaturizeApi.md#asyncFeaturizeAudio) | **POST** /api/v1/audio/async/featurize | featurize an audio file
*DeepAffects.FeaturizeApi* | [**syncFeaturizeAudio**](docs/FeaturizeApi.md#syncFeaturizeAudio) | **POST** /api/v1/audio/sync/featurize | featurize an audio file


## Documentation for Models

 - [DeepAffects.AsyncResponse](docs/AsyncResponse.md)
 - [DeepAffects.Audio](docs/Audio.md)
 - [DeepAffects.DiarizeAudio](docs/DiarizeAudio.md)
 - [DeepAffects.EmotionScore](docs/EmotionScore.md)
