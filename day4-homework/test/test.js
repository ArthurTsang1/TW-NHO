/* Test of countWordFrequency module */

var assert = require('assert');
var countWordFrequency = require('../src/countWordFrequency');

describe('#countWordFrequency.js', function () {
  before(function() {
    console.log('Begin to test countWordFrequency module:');
  })

  after(function() {
    console.log('End test countWordFrequency module.');
  })

  /**
   * 1. read file content from a path
   * @input String: file path
   * @output String: file content string
   */
  it('countWordFrequency.readFile("test.txt") should return "This is a test txt txt"', function() {
    var filePath = '/Users/wtzeng/Desktop/NHO/day4-homework/src/test.txt';
    var fileContent = countWordFrequency.readFile(filePath);
    assert.strictEqual(fileContent, 'This is a test txt txt');
  })

  /**
   * 2. split file content to every single word
   * @input String
   * @output Array<String>: a array consist of every content word
   */
  it('countWordFrequency.splitContent("test\n test txt") should return ["test", "test", "txt"]', function() {
    var splitedContent = countWordFrequency.splitContent('test\n test txt');
    var comparisonResult = splitedContent.every(function(item, index) {
      var equal = false;
      switch(index) {
        case 0:
          equal = item === 'test' ? true : false;
          break;
        case 1:
          equal = item === 'test' ? true : false;
          break;
        case 2:
          equal = item === 'txt' ? true : false;
          break;
        default:
          equal = false;
      }
      return equal;
    })
    assert.strictEqual(comparisonResult, true);
  })

  /**
   * 3. count every word
   * @input Array<String>
   * @output Object: counting result of every word
   */
  it('countWordFrequency.getFrequency(["test", "test", "txt"]) should return {test: 2, txt: 1}', function() {
    var countResult = countWordFrequency.getFrequency(["test", "test", "txt"]);
    var equal = false;
    equal = countResult.test === 2 ? true : false;
    equal = countResult.txt === 1 ? true : false;
    assert.strictEqual(equal, true);
  })

  /**
   * 4. count every word in a txt file
   * @input Object
   * @output Object: count and order result of a txt file
   */
  it('countWordFrequency.countWordFrequency("test.txt") should return "txt 2\nThis 1\nis 1\na 1\ntest 1\n"', function() {
    var fileParh = '/Users/wtzeng/Desktop/NHO/day4-homework/src/test.txt';
    var countResult = countWordFrequency.countWordFrequency(fileParh);
    assert.strictEqual(countResult, "txt 2\nThis 1\nis 1\na 1\ntest 1\n");
  })
})