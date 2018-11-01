const fs = require('fs');
const JSONStream = require('JSONStream');
const es = require('event-stream');

const episode = process.argv[2] || '0004-Art-Of-The-Take';

fs.createReadStream(__dirname + '/transcripts/' + episode + '.json')
  .pipe(JSONStream.parse('results.transcripts.*'))
  .pipe(
    es.mapSync(data => {
      return data.transcript;
    })
  )
  .pipe(fs.createWriteStream(__dirname + '/transcripts/' + episode + '.txt'));