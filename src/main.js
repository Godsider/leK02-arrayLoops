/*
 * lektorium course: Java Script
 * lesson #2 homework: arrays processing in loops
 * 
 * made by Vitaliy Dovgan
 */

const strings = [
  '[3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2-3-1]',
  '[-1, -8, -2]',
  '[1, 7, 3]',
  '[1, undefined, 3, 5, -3]',
  '[1, NaN, 3, 5, -3]',
  
  '[NaN, undefined, 1, -7, null, 6]',
  '[null, 1000, Infinity, 3000]',
  '[ ]'
]

// representing arrays as a two-dimensional array
const arrays = [
  [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2-3-1],
  [-1, -8, -2],
  [1, 7, 3],
  [1, undefined, 3, 5, -3],
  [1, NaN, 3, 5, -3],
  
  [NaN, undefined, 1, -7, null, 6],
  [null, 1000, Infinity, 3000],
  []
]

// checking if value isn't NaN/undefined/null
// const isNumber = function(value) {
//   return !!value || (value === 0)
// }

// performing the processing
const process = function() {
  var resultStr = '<h3>The result:</h3>'
  const none = 'none'

  for (i = 0; i < arrays.length; i++) { // this loop iterates through arrays
    var numsSum = maxNumber = minNumber = none, j = 0, elemNow
    resultStr += 'Array ' + i + ': ' + strings[i]
//     arrayNow = arrays[i]
//     arrayLength = arrayNow.length
//     arrayLength = arrays[i].length
//             console.log('arrayLength: ' + arrayLength)

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
//               console.log(j)
//       elemNow = arrayNow[j]
      elemNow = arrays[i][j]
//       if (isNumber(elemNow)) { // if the current element isn't NaN/undefined/null -- init vars or process the value
      if (!!elemNow || (elemNow === 0)) { // if the current element isn't NaN/undefined/null -- init vars or process the value
        maxNumber = (maxNumber === none) || (elemNow > maxNumber) ? elemNow : maxNumber
        minNumber = (minNumber === none) || (elemNow < minNumber) ? elemNow : minNumber
        numsSum = numsSum === none ? elemNow : numsSum + elemNow
      }
      j++
    } while (j < arrays[i].length)
//     } while (j < arrayLength)

    resultStr += '<br>max = ' + maxNumber +
      '<br>min = ' + minNumber +
      '<br>sum = ' + numsSum + '<br><br>'
  }

  return resultStr
}

// console.log(resultStr)

// injecting the result into the document
document.getElementById("result").innerHTML = process()
// alert('Run 5')
