const run = (event, context, callback) => {
  console.log('Test log');
  callback(null, 'Hello, World!');
}

const asyncTask = event => {
  return new Promise(resolve => {
    resolve("Hello, Async Task!");
  })
}

module.exports.run = run;
module.exports.asyncTask = asyncTask;

