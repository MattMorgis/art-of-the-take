const fs = require('fs');
const JSONStream = require('JSONStream');
const es = require('event-stream');

const episode = '0001-Art-Of-The-Take'

const occurrences = (mainString, subString) => {
  mainString += '';
  subString += '';

  if (subString.length <= 0) {
    return mainString.length + 1;
  }

  subStr = subString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return (mainString.match(new RegExp(subStr, 'gi')) || []).length;
}

fs.createReadStream(__dirname + '/transcripts/' + episode + '.json')
  .pipe(JSONStream.parse('results.transcripts.*'))
  .pipe(es.mapSync((data) => {
    const takeCount = occurrences(data.transcript, 'take', true);
    console.log(episode);
    console.log('Take count: ');
    console.log(takeCount)
  }))