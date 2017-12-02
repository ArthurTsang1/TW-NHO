var fs = require('fs');

// Read file content as a string synchronously
function readFile(filePath) {
  var text = fs.readFileSync(filePath, 'utf-8');
  return text;
}

// Split content, space or return character as separator
function splitContent(contentStr) {
  var regExp = /[\s\n]+/;
  return contentStr.split(regExp);
}

// Count every word's occurrence times
function getFrequency(contentAry) {
  var countResult = {};
  for (var i = 0; i < contentAry.length; i++) {
    var key = contentAry[i];
    countResult[key] = typeof countResult[key] === 'number' ? countResult[key] + 1 : 1;
  }
  return countResult;
}

// Output every word's ouccurrence times
function countWordFrequency(filePath) {
  var outputStr = '';

  var text = readFile(filePath);
  var splitedContent = splitContent(text);
  var countResult = getFrequency(splitedContent);
  var orderedCountResult = Object.entries(countResult).sort((prevPair, nextPair) => nextPair[1] - prevPair[1]);
  orderedCountResult.forEach(([key, value]) => {
    outputStr += key + ' ' + value + '\n';
  })
  return outputStr;
}

module.exports = {
  readFile: readFile,
  splitContent: splitContent,
  getFrequency: getFrequency,
  countWordFrequency: countWordFrequency
}