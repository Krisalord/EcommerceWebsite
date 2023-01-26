const fs = require('fs');
let data = { name: "John", age: 30 };
fs.writeFile('data.json', JSON.stringify(data), (err) => {
    if (err) console.log(err);
    console.log('Data written to file');
  });