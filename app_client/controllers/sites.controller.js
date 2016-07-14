(function(){
  angular
    .module('christianGeeks')
    .controller('sitesCtrl', sitesCtrl);

  function sitesCtrl(){
    var vm = this;
    vm.sites = {
      "steam" : {
        "img" : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/200px-Steam_icon_logo.svg.png",
        "url" : "http://steamcommunity.com/groups/christian-geeks"
      },
      "facebook" : {
        "img" : "imgs/facebook.png",
        "url" :"http://www.facebook.com"
      },
      "discord" : {
        "img" : "imgs/discord.png",
        "url" : "https://discord.gg/2FJbUhg"
      }
    }
  }
})();
