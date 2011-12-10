
/*!
 * array
 * JavaScript array utilities library
 * Copyright (c) 2011 Enrico Marino <enrico.marino@email.com>
 * MIT License
 */

 !(function (exports) {


  var undefined
    , toString = {}.toString
    ;

  exports.array = {};

  /**
   * Library version.
   */
  array.version = '0.0.0';

  /**
   * Test if 'self' is an array.
   *
   * @param {Array} self array
   * @return true if 'self' is an array, false otherwise
   * @api public
   */

  array.is = Array.isArray || function (self) {
    return '[object Array]' === toString.call(self);
  };

  /**
   * Apply 'iterator' to each element of 'self' in 'context'.
   *
   * @param {Array} self array
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @api public
   */

  array.each = function (self, iterator, context) {
    if (self === undefined || self === null) {
      return;
    }

    var len = self.length
      , i
      ;

    for (i = 0; i < len; i += 1) {
      if (i in self) {
        iterator.call(context, self[i], i, self);
      }
    }

    return self;
  };

 }(this));