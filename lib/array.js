
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

  /**
   * Apply 'iterator' to each element of 'self' in 'context'
   * and return the results.
   *
   * @param {Array} self array
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @api public
   */

  array.map = function (self, callback, context) {
    if (self === undefined || self === null) {
      return;
    }

    var results = []
      , len = self.length
      , i
      ;

    for (i = 0; i < len; i += 1) {
      if (i in self) {
        results.push(callback.call(context, self[i], i, self));
      }
    }

    return self;
  };

  /**
   * Reduce 'self' by 'iterator' in 'context'.
   *
   * @param {Array} self array
   * @param {Function} iterator iterator
   * @param memo memo
   * @param {Object} context context
   * @return reduction value
   * @api public
   */

  array.reduce = function (self, callback, memo, context) {
    if (self === undefined || self === null) {
      throw new TypeError();
    }

    var len = self.length
      , i = 0
      ;

    if (memo === undefined) {
      if (len === 0) {
        throw new TypeError();
      }
      i = 1;
      memo = self[0];
    }

    while (++i < len) {
      if (i in self) {
        memo = callback.call(context, memo, self[i], i, self);
      }
    }

    return memo;
  };

  /**
   * Reduce right 'self' by 'iterator' in 'context'.
   *
   * @param {Array} self array
   * @param {Function} iterator iterator
   * @param memo memo
   * @param {Object} context context
   * @return reduction value
   * @api public
   */

  array.reduceRight = function (self, callback, memo, context) {
    if (self === undefined || self === null) {
      throw new TypeError();
    }

    var len = self.length
      , i = len
      ;

    if (memo === undefined) {
      if (len === 0) {
        throw new TypeError();
      }
      i = len - 1;
      memo = self[i];
    }

    while (i--) {
      if (i in self) {
        memo = callback.call(context, memo, self[i], i, self);
      }
    }

    return memo;
  };

 }(this));