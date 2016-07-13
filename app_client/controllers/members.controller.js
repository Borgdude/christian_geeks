(function(){
  angular
    .module("christianGeeks")
    .controller('memberCtrl', memberCtrl);

  memberCtrl.$inject = ['$http'];
  function memberCtrl ($http){
    var vm = this;
    var req = {
      method: 'GET',
      url: "https://discordapp.com/api/guilds/199461387175460864/members?limit=1000",
      headers : {
        "Authorization" : "Bot MjAyNTQyNjY2Njk5NzY3ODA4.Cmb6OQ.yxVz-aaH47Zk9k7e9tPg3HWAkWM"
      }
    };
    $http(req).then(function(data){
      vm.data = { members: data }
    }, function(error){
      console.log(error);
    })
  }
})();