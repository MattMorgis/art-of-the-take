const fs = require('fs');
const JSONStream = require('JSONStream');
const es = require('event-stream');

const episode = '0002-Art-Of-The-Take'

fs.createReadStream(__dirname + '/transcripts/' + episode + '.json')
  .pipe(JSONStream.parse('results.transcripts.*'))
  .pipe(es.mapSync((data) => {
    const takeCount = (data.transcript.match(/take/g) || []).length;
    console.log(episode);
    console.log('Take count: ');
    console.log(takeCount)
  }))