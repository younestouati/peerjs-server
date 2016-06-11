var miscUtils = require('@phame/phame-shared/src/utils/miscUtils.js');
var sessionTypePrepends = require('@phame/phame-shared/src/configuration/sessionTypePrepends.json');

var ID_LENGTH = 8; //Note that the id will be one digit longer as it will be prepended with a digit indicating if it is a webrtc or websocket connection

var util = {
  debug: false,
  inherits: function(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  },
  extend: function(dest, source) {
    source = source || {};
    for(var key in source) {
      if(source.hasOwnProperty(key)) {
        dest[key] = source[key];
      }
    }
    return dest;
  },
  randomId: function () {
    return sessionTypePrepends.WEBRTC_CONNECTION + miscUtils.createRandomNumberAsString(ID_LENGTH);
  },
  prettyError: function (msg) {
    console.log('ERROR PeerServer: ', msg);
  }
};

module.exports = util;
