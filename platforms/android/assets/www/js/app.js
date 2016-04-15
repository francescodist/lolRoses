// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller("randomCtrl", function($scope){
  $scope.champions = ["Aatrox","Ahri","Akali","Alistar","Amumu","Annie","Ashe","AurelionSol","Azir",
  "Bard","Blitzcrank","Brand","Braum","Caitlyn","Cassiopeia","ChoGath","Corki","Darius",
  "Diana","Draven","DrMundo","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks","Fiora",
  "Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Hecarim","Heimerdinger",
  "Illaoi","Irelia","Janna","JarvanIV","Jax","Jayce","Jhin","Jinx","Kalista","Karma","Karthus",
  "Kassadin","Katarina","Kayle","Kennen","KhaZix","Kindred","KogMaw","LeBlanc","LeeSin",
  "Leona","Lissandra","Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","MasterYi",
  "MissFortune","Mordekaiser","Morgana","Nami","Nasus","Nautilus","Nidalee","Nocturne",
  "Nunu","Olaf","Orianna","Pantheon","Poppy","Quinn","Rammus","RekSai","Renekton","Rengar",
  "Riven","Rumble","Ryze","Sejuani","Shaco","Shen","Shyvana","Singed","Sion","Sivir",
  "Skarner","Sona","Soraka","Swain","Syndra","TahmKench","Talon","Taric","Teemo","Thresh",
  "Tristana","Trundle","Tryndamere","TwistedFate","Twitch","Udyr","Urgot","Varus","Vayne",
  "Veigar","VelKoz","Viktor","Vi","Vladimir","Volibear","Warwick","Wukong","Xerath","XinZhao",
  "Yasuo","Yorick","Zac","Zed","Ziggs","Zilean","Zyra"];
  $scope.troll = function() {
    var lettere = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
    "X","Y","Z"];
    $scope.lettera = lettere[Math.floor(Math.random() * lettere.length)];

    $scope.championstroll = $scope.champions.filter(function(el) {
      return el.substring(0,1) === $scope.lettera;
    })
  }

})
;
