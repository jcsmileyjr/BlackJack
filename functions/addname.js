var Airtable = require('airtable');
const {key, baseId} = process.env; // Get the enviroment values defined in netlify site 
var base = new Airtable({apiKey:key}).base(baseId);

const table = base('winners');

const submitRecord = async (fields) => {
    await table.create(fields);
}

exports.handler = function(event, context, callback) {
    const {playerName, bank} = JSON.parse(event.body);

    const newRecord= {
      'Name': playerName,
      'funds':bank.toString(),
    }
    
    submitRecord(newRecord);
    console.log(newRecord);
    
    callback(null, {
      statusCode: 200,
    });
  };