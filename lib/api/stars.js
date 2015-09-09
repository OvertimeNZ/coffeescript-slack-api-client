// Generated by CoffeeScript 1.10.0
(function() {
  var BaseClass, Stars,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseClass = require('./common/base_class');

  Stars = (function(superClass) {
    extend(Stars, superClass);

    function Stars() {
      return Stars.__super__.constructor.apply(this, arguments);
    }

    Stars.prototype.endpoints = {
      list: '/api/stars.list'
    };

    Stars.prototype.list = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      return this.request('GET', this.endpoints.list, opts, callback);
    };

    return Stars;

  })(BaseClass);

  module.exports = Stars;

}).call(this);