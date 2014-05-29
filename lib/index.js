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

  var globalSettings = Hoek.applyToDefaults(internals.defaults, options);

  plugin.ext('onPreResponse', function (request, next) {
    var crappi = request._route.settings.plugins.crappi;

    if (!crappi) { return next(); }

    var routeSettings = Hoek.applyToDefaults(globalSettings, crappi);

    if (Math.random() < (routeSettings.slomo.rate / 100)) {
      setTimeout(function () {
        next();
      }, (routeSettings.slomo.time * 1000));
    } else {
      next();
    }

  });

  next();

};