var request = require('request');
var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.getMembers = function(req, res){
  // sendJsonResponse(res, 201, {"message": "testing"});
  var stuff = {
    method: 'GET',
    url: "https://discordapp.com/api/guilds/199461387175460864/members?limit=1000",
    headers : {
      "Authorization" : process.env.BOT_TOKEN,
      "Content-Type": "application/json"
    }
  };
  request(stuff, function(err, response, body){
    if(err) {throw err;}
    // function sortMembers (){
    //   var input = JSON.parse(body);
    //   console.log(input);
    //   return input;
    // }
    res.send(JSON.parse(body));
  });
};
