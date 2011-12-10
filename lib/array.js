
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
  array.version = '0.2.0';

  /**
   * Test if 'self' is an array.
   *
   * @param {Array} self array
   * @return {Boolean} true if 'self' is an array, false otherwise
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
   * @param {Array} self array
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
   * @return {Array} 'self' mapped by 'iterator'
   * @api public
   */

  array.map = function (self, iterator, context) {
    if (self === undefined || self === null) {
      return;
    }

    var results = []
      , len = self.length
      , i
      ;

    for (i = 0; i < len; i += 1) {
      if (i in self) {
        results.push(iterator.call(context, self[i], i, self));
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

  array.reduce = function (self, iterator, memo, context) {
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
        memo = iterator.call(context, memo, self[i], i, self);
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

  array.reduceRight = function (self, itearator, memo, context) {
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
        memo = iterator.call(context, memo, self[i], i, self);
      }
    }

    return memo;
  };

  /**
   * Find element in 'self' that pass 'iterator' in 'context'
   *
   * @param {Array} self array
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return first value in 'self' that pass 'iterator' in 'context'
   * @api public
   */

  array.find = function (self, callback, context) {
    if (self === undefined || self === null) {
      return null;
    }

    var results = []
      , len
      , i
      ;

    for (i = 0, len = self.length; i < len; i += 1) {
      if (i in self && callback.call(context, self[i], i, self)) {
        return self[i];
      }
    }

    return null;
  };

  /**
   * Return values in 'self' that pass 'iterator' in 'context'.
   *
   * @param {Array} self array
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return {Array} values in 'self' that pass 'iterator' in 'context'
   * @api public
   */

  array.filter = function (self, callback, context) {
    var results = [];

    if (self === undefined || self === null) {
      return [];
    }

    for (i = 0, len = self.length; i < len; i += 1) {
      if (i in self && callback.call(context, self[i], i, self)) {
        results.push(self[i]);
      }
    }

    return results;
  };

  /**
   * Return values in 'self' that don't pass 'iterator' in 'context'.
   *
   * @param {Array} self array
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return {Array} values in 'self' that don't pass 'iterator' in 'context'
   * @api public
   */

  array.reject = function (self, callback, context) {
    var results = [];

    if (self === undefined || self === null) {
      return [];
    }

    for (i = 0, len = self.length; i < len; i += 1) {
      if (i in self && !callback.call(context, self[i], i, self)) {
        results.push(self[i]);
      }
    }

    return results;
  };

  /**
   * Test if every value in 'self' pass 'iterator' in 'context'.
   *
   * @param {Array} self array
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return {Boolean} true if every value in 'self' pass 'iterator'
   * @api public
   */

  array.every = function (self, iterator, context) {
    if (self === undefined || self === null) {
      return true;
    }

    for (i = 0, len = self.length; i < len; i += 1) {
      if (i in self && !iterator.call(context, self[i], i, self)) {
        return false;
      }
    }

    return true;
  };

  /**
   * Test if some value in 'self' pass 'iterator' in 'context'.
   *
   * @param {Array} self array
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return {Boolean} true if some value in 'self' pass 'iterator'
   * @api public
   */

  array.some = function (self, iterator, context) {

    if (self === undefined || self === null) {
      return false;
    }

    for (i = 0, len = self.length; i < len; i += 1) {
      if (i in self && iterator.call(context, self[i], i, self)) {
        return true;
      }
    }

    return false;
  };

  /**
   * Test if 'self' include 'value'.
   *
   * @param {Array} self array
   * @param value value
   * @return {Boolean} true if 'self' include 'value', false otherwise
   * @api public
   */

  array.include = function (self, target) {
    if (self === undefined || self === null) {
      return false;
    }

    for (i = 0, len = self.length; i < len; i += 1) {
      if (i in self && self[i] === target) {
        return true;
      }
    }

    return false;
  };

  /**
   * Extract a list of property values.
   *
   * @param {Array} self array
   * @param {String} key key
   * @return {Array} list of property values
   * @api public
   */

  array.pluck = function (self, key) {
    var result = []
      , len
      , i
      ;

    if (self === undefined || self === null) {
      return;
    }

    for (i = 0, len = self.length; i < len; i += 1) {
      if (i in self && key in self[i] && owns.call(self[i], key)) {
        result.push(self[i][key]);
      }
    }

    return result;
  };

  /**
   * Return the maximum element or (element-based computation).
   *
   * @param {Array} self array
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return maximum element or (element-based computation)
   * @api public
   */

  array.max = function (self, iterator, context) {
    iterator || (iterator = function (value) { return value; })

    var result = null
      , value
      , len
      , i
      ;

    if (callback === undefined) {
      return max(self);
    }

    for (i = 0, len = self.length; i < len; i += 1) {
      if (i in self) {
        value = iterator.call(context, self[i], i, self);
        result = result === null || result < value ? value : result;
      }
    }

    return result;
  };

  /**
   * Return the minimum element or (element-based computation).
   *
   * @param {Array} self array
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return maximum element or (element-based computation)
   * @api public
   */

  array.min = function (self, iterator, context) {
    iterator || (iterator = function (value) { return value; })

    var result = null
      , value
      , len
      , i
      ;

    if (callback === undefined) {
      return max(self);
    }

    for (i = 0, len = self.length; i < len; i += 1) {
      if (i in self) {
        value = iterator.call(context, self[i], i, self);
        result = result === null || result > value ? value : result;
      }
    }

    return result;
  };


  /**
   * Sort values of 'self' by a criterion produced by 'iterator'.
   *
   * @param {Array} self array
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return sorted values
   * @api public
   */

  array.sortBy = function (self, iterator, context) {

    function comparator (left, right) {
      var a = iterator.call(context, left, self.indexOf(left), self)
        , b = iterator.call(context, right, self.indexOf(right), self)
        ;

      return a < b ? -1 : a > b ? 1 : 0;
    }

    self.sort(comparator);

    return self;
  };


  /**
   * Group values in 'self' by a criterion produced by 'iterator'.
   *
   * @param {Array} self array
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return grouped values
   * @api public
   */

  array.groupBy = function (self, iterator, context) {
    var result = {}
      , len = self.length
      , key
      , i
      ;

    for (i = 0; i < len; i += 1) {
      if (i in self) {
        key = iterator.call(context, self[i], i, self);
        (result[key] || (result[key] = [])).push(value);
      }
    }

    return result;
  };

  /**
   * Determine the index at which the 'value' should be inserted in 'self'
   * in order to maintain the list's sorted order;
   * use 'iterator' (if exists) to compute the sort ranking of each value.
   *
   * @param {Array} self array
   * @param value value
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return {Number} index
   * @api public
   */

  array.sortedIndex = function (self, value, iterator, context) {
    iterator || (iterator = function (value) { return value; });

    var hight = self.length
      , low = 0
      , mid
      ;

    while (low < hight) {
      mid = (low + hight) >> 1;
      iterator.call(context, self[mid]) < iterator.call(context, value)
        ? low = mid + 1
        : high = mid;
    }

    return low;
  };

  /**
   * Return the first 'n' values of 'self'.
   *
   * @param {Array} self array
   * @param {Number} [n = 1] n
   * @return {Array} first 'n' values of 'self'.
   * @api public
   */

  array.first = function (self, n) {
    n || (n = 1);
    return slice.call(self, 0, n);
  };


  /**
   * Return the values of 'self' from 'index' onward.
   *
   * @param {Array} self array
   * @param {Number} [n = 1] n
   * @return {Array} the values of 'self' from 'index' onward.
   * @api public
   */

  array.rest = function (self, index) {
    index || (index = 1);
    return slice.call(self, index);
  };

  /**
   * Resturn the last element of 'self'
   *
   * @param {Array} self array
   * @return the last element of 'self'
   * @api public
   */

  array.last = function (self) {
    return self[self.length - 1];
  };

  /**
   * Compact 'self' removing null values.
   *
   * @param {Array} self array
   * @return {Array} 'self' compacted
   * @api public
   */

  array.compact = function (self) {
    if (self === undefined) {
      return result;
    }

    var result = []
      , len = self.length
      , i
      ;

    for (i = 0; i < len; i += 1) {
      if (i in self && self[i] !== null) {
        result.push(self[i]);
      }
    }

    return result;
  };

  /**
   * Returns a copy of 'self' with all instances of the 'values' removed.
   *
   * @param {Array} self array
   * @param values*
   * @return a copy of 'self' with all instances of the 'values' removed.
   * @api public
   */

  array.without = function (self) {
    if (self === undefined) {
      return result;
    }

    var values = slice.call(arguments, 1),
      result = [],
      len = self.length,
      i;

    for (i = 0; i < len; i += 1) {
      if (i in self && !(self[i] in values)) {
        result.push(self[i]);
      }
    }

    return result;
  };

  /**
   * Produces a duplicate-free version of 'self',
   * using === to test object equality.
   * If you know in advance that the array is sorted,
   * passing true for isSorted will run a much faster algorithm.
   * If you want to compute unique items based on a transformation,
   * pass an iterator function.
   *
   * @param {Array} self array
   * @param {Boolean} isSorted is sorted flag
   * @param {Function} iterator iterator
   * @return {Array} duplicate-free version of 'self'
   * @api public
   */

  array.uniq = function (self, isSorted, iterator) {
    var result = []
      , len = self.length
      , i
      ;

    for (i = 0; i < len; i += 1) {
      if (i in self && !(self[i] in result)) {
        result.push(self[i]);
      }
    }

    return result;
  };

  /**
   * Computes the union of the passed-in arrays.
   *
   * @param {Array*} arrays
   * @return {Array} the union of the passed-in arrays.
   * @api public
   */

  array.union = function () {
    var result = []
      , arrays = slice.call(arguments, 1)
      , array
      , value
      , i
      , j
      , n
      , len
      ;

    for (j = 0, n = arrays.length; j < n; j += 1) {
      array = arrays[j];
      for (i = 0, len = array.length; i < len; i += 1) {
        if (i in array) {
          value = array[i];
          if (result.indexOf(value) >= 0) {
            result.push(array[i]);
          }
        }
      }
    }

    return result;
  };

 }(this));