'use strict';
var Hoek = require('hoek');

var internals = {

  defaults: {
    slomo: {
      rate: 10, // percent of calls affected
      time: 5  // number of seconds to delay the response
    }
  }

};

exports.register = function (plugin, options, next) {

  plugin.ext('onPreResponse', function (request, next) {

    var settings = Hoek.applyToDefaults(internals.defaults, options);

    if (Math.random() < (settings.slomo.rate / 100)) {
      setTimeout(function () {
        next();
      }, (settings.slomo.time * 1000));
    } else {
      next();
    }

  });

  next();

};