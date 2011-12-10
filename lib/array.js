
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
   * Test if 'self' is an array
   *
   * @param {Array} self array
   * @return true if 'self' is an array, false otherwise
   * @api public
   */

  array.is = Array.isArray || function (self) {
    return '[object Array]' === toString.call(self);
  };

 }(this));