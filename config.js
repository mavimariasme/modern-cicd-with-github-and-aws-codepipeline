require('dotenv').config();

var config = {
  infra: {
    region: process.env.AWS_REGION || "us-west-2",
    dynamodb_table: process.env.DYNAMODB_TABLE_NAME || "Rooms",
    dynamodb_endpoint: process.env.DYNAMODB_ENDPOINT
  },
  app: {
    hotel_name: process.env.HOTEL_NAME || "Hotel Yorba"
  }
};

// Log configuration when loaded
console.debug("Configuration loaded with the following settings:");
console.debug("Region:", config.infra.region);
console.debug("Hotel Name:", config.app.hotel_name);
console.debug("DynamoDB Table:", config.infra.dynamodb_table);
console.debug("DynamoDB Endpoint:", config.infra.dynamodb_endpoint);

// Export just the config object
module.exports = config;
