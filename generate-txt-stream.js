const fs = require('fs');
const JSONStream = require('JSONStream');
const es = require('event-stream');

fs.createReadStream(__dirname + '/transcripts/0003-Art-Of-The-Take.json')
  .pipe(JSONStream.parse('results.transcripts.*'))
  .pipe(es.mapSync((data) => {
    return data.transcript
  }))
  .pipe(fs.createWriteStream(__dirname + '/transcripts/0003-Art-Of-The-Take.txt'))