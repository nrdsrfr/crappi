'use strict';

exports.register = function (plugin, options, next) {

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