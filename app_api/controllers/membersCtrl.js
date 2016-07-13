var request = require('request');
var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.getMembers = function(req, res){
  sendJsonResponse(res, 201, {"message": "testing"});
  // var req = {
  //   method: 'GET',
  //   url: "https://discordapp.com/api/guilds/199461387175460864/members?limit=1000",
  //   headers : {
  //     "Authorization" : process.env.BOT_TOKEN
  //   }
  // };
  // request(req, function(err, response, body){
  //   if(err) {throw err;}
  //   sendJsonResponse(res, 201, body);
  // });
};
