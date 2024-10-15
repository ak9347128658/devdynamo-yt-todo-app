// Import AWS SDK
const AWS = require('aws-sdk');

// Configure AWS region
// AWS.config.update({ region: 'ap-south-1' }); // Set your region

// Create a Secrets Manager client
const secretManager = new AWS.SecretsManager();

async function getSecretValue() {
  try {
    const data = await secretManager.getSecretValue({ SecretId: "todo-app-secret" }).promise();
    if ('SecretString' in data) {
      return data.SecretString;
    } else {
      // If the secret is stored using a binary format, convert it to a string
      let buff = Buffer.from(data.SecretBinary, 'base64');
      return buff.toString('ascii');
    }
  } catch (err) {
    console.error("i am error :",err);
    throw err; // Rethrow the error after logging it
  }
}

module.exports = { getSecretValue };