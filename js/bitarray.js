(function() {

  window.BitArray = (function() {

    BitArray.prototype.bits = 32;

    BitArray.prototype.stringSeparator = ',';

    function BitArray(size) {
      var i;
      this.size = size;
      i = Math.ceil(this.size / this.bits);
      this.data = [];
      while (i-- > 0) {
        this.data.push(0);
      }
    }

    BitArray.prototype.get = function(index) {
      var i, j;
      if (Math.abs(index) >= this.size) {
        throw "index " + index + " beyond size " + this.size;
      }
      i = index % this.bits;
      j = Math.floor(index / this.bits);
      return (this.data[j] & (1 << i)) !== 0;
    };

    BitArray.prototype.set = function(index, value) {
      var i, j;
      if (Math.abs(index) >= this.size) {
        throw "index " + index + " beyond size " + this.size;
      }
      i = index % this.bits;
      j = Math.floor(index / this.bits);
      if (value) {
        return this.data[j] |= 1 << i;
      } else {
        return this.data[j] &= ~(1 << i);
      }
    };

    BitArray.prototype.toString = function() {
      var number, result, _i, _len, _ref;
      result = '';
      _ref = this.data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        number = _ref[_i];
        if (result !== '') result += this.stringSeparator;
        result += number.toString(36);
      }
      return result;
    };

    BitArray.prototype.parse = function(str) {
      var i, numbers, _results;
      numbers = str.split(this.stringSeparator);
      i = 0;
      _results = [];
      while (i < this.data.length) {
        if (i < numbers.length) {
          this.data[i] = parseInt(numbers[i], 36);
        } else {
          this.data[i] = 0;
        }
        _results.push(i++);
      }
      return _results;
    };

    return BitArray;

  })();

}).call(this);
