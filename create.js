const AWS = require("aws-sdk");
const uuid = require("uuid/v4");

const client = new AWS.DynamoDB.DocumentClient();

module.exports.run = async (event) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: 'todos',
    Item: {
      id: uuid(),
      text: data.text,
      checked: false
    }
  };

  try {
    await client.put(params).promise();
  } catch (error) {
    console.log(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}

