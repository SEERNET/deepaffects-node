var fs = require('fs');
var is = require('is');
var path = require('path');


module.exports = {
    findFile : function(file) {
      // File exists on disk.
      return fs.readFileSync(file);
    },

    detectEncoding : function(filename) {
      if (!is.string(filename)) {
        return;
      }

      switch (path.extname(filename).toLowerCase()) {
        case '.raw': {
          return 'LINEAR16';
        }
        case '.amr': {
          return 'AMR';
        }
        case '.awb': {
          return 'AMR_WB';
        }
        case '.flac': {
          return 'FLAC';
        }
        case ".mp3": {
          return "MP3";
        }
        case ".aac": {
          return "AAC";
        }
        case '.au':
        case '.wav': {
          return 'MULAW';
        }
        default: {
          throw new Error('Encoding could not be determined for file: ' + filename);
        }
      }
    },

    defaultFor: function(arg, val) { return typeof arg !== 'undefined' ? arg : val; }
};
