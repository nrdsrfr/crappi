'use strict';
//var Hoek = require('hoek');

//var internals = {
//  defaults: {}
//};

exports.register = function (plugin, options, next) {
//  var settings = Hoek.applyToDefaults(internals.defaults, options);

  // TODO - grab all the routes and only apply to tagged routes
//  var hapi = plugin.hapi;
//  var routes = (hapi.routingTable) ? hapi.routingTable() : hapi.table();


  plugin.ext('onPreResponse', function (request, next) {

    if (Math.random() < 0.1) {
      setTimeout(function () {
        next();
      }, 10000);
    } else {
      next();
    }

  });

  next();

};