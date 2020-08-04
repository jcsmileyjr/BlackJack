var Airtable = require('airtable');
const {key, baseId} = process.env; // Get the enviroment values defined in netlify site 
var base = new Airtable({apiKey:key}).base(baseId);

const table = base('winners');

const getRecords = async () => {
    const records = await table.select().firstPage();// Get all records from winners table's firt page
    return records;
}

exports.handler = async function(event, context, callback) {
    const winners = await getRecords();
    
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({data:{winners}}),
    });
  };