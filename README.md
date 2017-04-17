# deepaffects-node

deepAffects-node - Node client for DeepAffects APIs

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install deepaffects --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/SEERNET/deepaffects-node
then install it via:

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

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SeerNetAudioApIs = require('seer_net_audio_ap_is');

var defaultClient = SeerNetAudioApIs.ApiClient.instance;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = "YOUR API KEY"

var api = new SeerNetAudioApIs.DenoiseApi()

var body = new SeerNetAudioApIs.Audio(); // {Audio} Audio object that needs to be denoised.


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

All URIs are relative to *https://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SeerNetAudioApIs.DenoiseApi* | [**asyncDenoiseAudio**](docs/DenoiseApi.md#asyncDenoiseAudio) | **POST** /api/v1/audio/async/denoise | Denoise an audio file
*SeerNetAudioApIs.DenoiseApi* | [**syncDenoiseAudio**](docs/DenoiseApi.md#syncDenoiseAudio) | **POST** /api/v1/audio/sync/denoise | Denoise an audio file
*SeerNetAudioApIs.DiarizeApi* | [**asyncDiarizeAudio**](docs/DiarizeApi.md#asyncDiarizeAudio) | **POST** /api/v1/audio/async/diarize | Diarize an audio file
*SeerNetAudioApIs.DiarizeApi* | [**syncDiarizeAudio**](docs/DiarizeApi.md#syncDiarizeAudio) | **POST** /api/v1/audio/sync/diarize | Diarize an audio file
*SeerNetAudioApIs.EllipsisApi* | [**asyncIsDepressed**](docs/EllipsisApi.md#asyncIsDepressed) | **POST** /api/v1/audio/async/ellipsis/is_depressed | Find if a person is depressed from audio.
*SeerNetAudioApIs.EllipsisApi* | [**syncIsDepressed**](docs/EllipsisApi.md#syncIsDepressed) | **POST** /api/v1/audio/sync/ellipsis/is_depressed | Find if a person is depressed from audio.
*SeerNetAudioApIs.EmotionApi* | [**asyncRecogniseEmotion**](docs/EmotionApi.md#asyncRecogniseEmotion) | **POST** /api/v1/audio/async/recognise_emotion | Find emotion in an audio file
*SeerNetAudioApIs.EmotionApi* | [**syncRecogniseEmotion**](docs/EmotionApi.md#syncRecogniseEmotion) | **POST** /api/v1/audio/sync/recognise_emotion | Find emotion in an audio file
*SeerNetAudioApIs.FeaturizeApi* | [**asyncFeaturizeAudio**](docs/FeaturizeApi.md#asyncFeaturizeAudio) | **POST** /api/v1/audio/async/featurize | featurize an audio file
*SeerNetAudioApIs.FeaturizeApi* | [**syncFeaturizeAudio**](docs/FeaturizeApi.md#syncFeaturizeAudio) | **POST** /api/v1/audio/sync/featurize | featurize an audio file


## Documentation for Models

 - [SeerNetAudioApIs.AsyncResponse](docs/AsyncResponse.md)
 - [SeerNetAudioApIs.Audio](docs/Audio.md)
 - [SeerNetAudioApIs.DiarizeAudio](docs/DiarizeAudio.md)
 - [SeerNetAudioApIs.EmotionScore](docs/EmotionScore.md)


## Documentation for Authorization


### UserSecurity

- **Type**: API key
- **API key parameter name**: apikey
- **Location**: URL query string
