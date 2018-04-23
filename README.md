# deepaffects-node
[![Build Status](https://travis-ci.org/SEERNET/deepaffects-node.svg?branch=master)](https://travis-ci.org/SEERNET/deepaffects-node)
[![npm version](https://badge.fury.io/js/deep-affects.svg)](https://badge.fury.io/js/deep-affects)

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
UserSecurity.apiKey = "YOUR API KEY";

var api = new DeepAffects.DenoiseApi();

var body = DeepAffects.Audio.fromFile("/path/to/file"); // {Audio} Audio object that needs to be denoised.

webhook = "http://your/webhook/"
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.syncDenoiseAudio(body, callback);
api.asyncDenoiseAudio(body, webhook, callback);

```

## Documentation for API Endpoints

All URIs are relative to *BaseURL*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DeepAffects.DenoiseApi* | [**asyncDenoiseAudio**](docs/DenoiseApi.md#asyncDenoiseAudio) | **POST** /audio/generic/api/v1/async/denoise | Denoise an audio file
*DeepAffects.DenoiseApi* | [**syncDenoiseAudio**](docs/DenoiseApi.md#syncDenoiseAudio) | **POST** /audio/generic/api/v1/sync/denoise | Denoise an audio file
*DeepAffects.DiarizeApiV2* | [**asyncDiarizeAudio**](docs/DiarizeApiV2.md#asyncDiarizeAudio) | **POST** /audio/generic/api/v2/async/diarize | Diarize an audio file
*DeepAffects.DiarizeApi* | [**asyncDiarizeAudio**](docs/DiarizeApi.md#asyncDiarizeAudio) | **POST** /audio/generic/api/v1/async/diarize | Diarize an audio file (Legacy)
*DeepAffects.DiarizeApi* | [**syncDiarizeAudio**](docs/DiarizeApi.md#syncDiarizeAudio) | **POST** /audio/generic/api/v1/sync/diarize | Diarize an audio file (Legacy)
*DeepAffects.EllipsisApi* | [**asyncIsDepressed**](docs/EllipsisApi.md#asyncIsDepressed) | **POST** /audio/custom/ellipsis/api/v1/async/is_depressed | Find if a person is depressed from audio.
*DeepAffects.EllipsisApi* | [**syncIsDepressed**](docs/EllipsisApi.md#syncIsDepressed) | **POST** /audio/custom/ellipsis/api/v1/sync/is_depressed | Find if a person is depressed from audio.
*DeepAffects.EmotionApi* | [**asyncRecogniseEmotion**](docs/EmotionApi.md#asyncRecogniseEmotion) | **POST** /audio/generic/api/v1/async/recognise_emotion | Find emotion in an audio file
*DeepAffects.EmotionApi* | [**syncRecogniseEmotion**](docs/EmotionApi.md#syncRecogniseEmotion) | **POST** /audio/generic/api/v1/sync/recognise_emotion | Find emotion in an audio file
*DeepAffects.FeaturizeApi* | [**asyncFeaturizeAudio**](docs/FeaturizeApi.md#asyncFeaturizeAudio) | **POST** /audio/generic/api/v1/async/featurize | featurize an audio file
*DeepAffects.FeaturizeApi* | [**syncFeaturizeAudio**](docs/FeaturizeApi.md#syncFeaturizeAudio) | **POST** /audio/generic/api/v1/sync/featurize | featurize an audio file


## Documentation for Models

 - [DeepAffects.AsyncResponse](docs/AsyncResponse.md)
 - [DeepAffects.Audio](docs/Audio.md)
 - [DeepAffects.DiarizeAudio](docs/DiarizeAudio.md)
 - [DeepAffects.EmotionScore](docs/EmotionScore.md)


## About
[DeepAffects](https://www.deepaffects.com/dashboard) is an emotional intelligence analysis engine that measures the effect emotional intelligence
has on team dynamics, and provides emotional analytics that serve as the basis of insights to improve
project management, performance and satisfaction across organizations, projects, and teams. To watch DeepAffects in action: check out DeepAffects [Atlassian JIRA addon](https://marketplace.atlassian.com/plugins/com.deepaffects.teams.jira/cloud/overview) and our [Github addon](https://teams.deepaffects.com/).
