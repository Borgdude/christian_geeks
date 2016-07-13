(function(){
  angular
    .module("christianGeeks")
    .filter("modFilter", modFilter)
    .filter("filterMods", filterMods)
    .controller('memberCtrl', memberCtrl);

    //200139653771296769 === moderator
    //200139670720479232 === member
    //200139859069763584 === noob
    //200140513314078730 === pro
  memberCtrl.$inject = ['$http'];

  function memberCtrl ($http){
    var vm = this;
    var req = {
      method: 'GET',
      url: "/api/members"
    };
    $http(req).then(function(response){
      vm.data = { members: response.data }
    }, function(error){
      console.log(error);
    })
  }

  function modFilter () {
    return function (input){
      var output = [];

      angular.forEach(input, function(member){
        if(member.roles.indexOf("200139653771296769") >= 0){
          output.push(member);
        }
      })

      return output;
    }
  }
  function filterMods () {
    return function (input){
      var output = [];

      angular.forEach(input, function(member){
        if(member.roles.indexOf("200139653771296769") === -1){
          output.push(member);
        }
      })

      return output;
    }
  }
})();
