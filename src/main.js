/*
 * Це чернетка JavaScript.
 *
 * Введіть який-небудь код JavaScript, потім натисніть праву клавішу чи виберіть з меню «Виконати»:
 * 1. «Запустити», щоб виконати вибраний текст (Ctrl+R),
 * 2. «Дослідити», щоб викликати для результату дослідник об'єктів (Ctrl+I), чи,
 * 3. «Показати», щоб вставити результат у коментар після вибірки. (Ctrl+L)
 */

/*
 *
 * 
 *
 *
 *
 *
 *
 */

var strings = [
  '[3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2-3-1]',
  '[-1, -8, -2]',
  '[1, 7, 3]',
  '[1, undefined, 3, 5, -3]',
  '[1, NaN, 3, 5, -3]'
]

// Representing arrays as a two-dimensional array
var arrays = [
  [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2-3-1],
  [-1, -8, -2],
  [1, 7, 3],
  [1, undefined, 3, 5, -3],
  [1, NaN, 3, 5, -3],
          [NaN, undefined, 1, 7, null, 6]
]

var resultStr = ''
var none = 'unavailable'

// checking a value to not to be NaN/undefined/null
var isNumber = function(value) {
  return !!value || (value === 0)
}

for (i = 0; i < arrays.length; i++) { // this loop iterates through arrays
  var numsSum = maxNumber = minNumber = none, j = 0, elemNow
  resultStr += '\nArray ' + i + ': ' + strings[i]
  arrayNow = arrays[i]
  arrayLength = arrayNow.length
          console.log('arrayLength: ' + arrayLength)

  // setting an initial value for maxNumber and minNumber, avoiding NaN/undefined/null (if any) from the very beginning of the array
  /*while (j < arrayLength) {
            console.log(j)
    if (isNumber(arrayNow[j])) {
      maxNumber = minNumber = arrayNow[j]
      break
    }
    j++ // increment if no break
  }*/

  do { // this loop iterates through the specific array being processed right now
            console.log(j)
    elemNow = arrayNow[j]
    if (isNumber(elemNow)) { // if the current element isn't NaN/undefined/null -- init vars or process the value
      maxNumber = (maxNumber === none) || (elemNow > maxNumber) ? elemNow : maxNumber
      minNumber = (minNumber === none) || (elemNow < minNumber) ? elemNow : minNumber
      numsSum = numsSum === none ? elemNow : numsSum + elemNow
    }
    j++
  } while (j < arrayLength)

  resultStr += '\nmax = ' + maxNumber +
    '\nmin = ' + minNumber +
    '\nsum = ' + numsSum + '\n'
}

console.log(resultStr)
// .innerHTML(resultStr)
