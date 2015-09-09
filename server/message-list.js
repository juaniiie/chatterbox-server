var fs = require('fs');

var getRecentMessages = function (callback) {
  fs.readFile('data.txt', function(err, data) {
    if(err){
      throw err;
    }
    dataString = data.toString()
    dataString = "["+dataString+"]"
    dataString = JSON.parse(dataString)
    callback(dataString);

  })
}

var addMessage = function (data) {
  //***For app.js***
  var extendedData = data;
  //***For basic-server.js***
  // var extendedData = JSON.parse(data);
  var id = Math.floor(Math.random()*1000000000);
  extendedData['objectId'] = id;
  extendedData['createdAt'] = new Date();

  fs.appendFile('data.txt', ', ' + JSON.stringify(extendedData), function(err) {
    if(err) {
      throw err;
    }
    console.log("Message has been saved");
  })

}

module.exports.getRecentMessages = getRecentMessages;
module.exports.addMessage = addMessage;