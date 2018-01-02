class window.BitArray
  bits: 32
  stringSeparator: ','

  constructor: (@size) ->
    i = Math.ceil(@size/@bits)
    @data = []
    @data.push 0 while i-- > 0

  get: (index) ->
    throw "index #{index} beyond size #{@size}" if Math.abs(index) >= @size
    i = index % @bits
    j = Math.floor(index/@bits)
    (@data[j] & (1 << i)) != 0

  set: (index, value) ->
    throw "index #{index} beyond size #{@size}" if Math.abs(index) >= @size
    i = index % @bits
    j = Math.floor(index/@bits)
    if value
      @data[j] |= 1 << i
    else
      @data[j] &= ~(1 << i)

  toString: ->
    result = ''
    for number in @data
      if result != ''
        result += @stringSeparator
      result += number.toString(36)
    return result

  parse: (str) ->
    numbers = str.split(@stringSeparator)
    i = 0
    while i < @data.length
      if i < numbers.length
        @data[i] = parseInt(numbers[i], 36)
      else
        @data[i] = 0
      i++
