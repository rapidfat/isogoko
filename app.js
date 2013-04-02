
angular.element(document).ready(function(){
  var $app = $('<div id="isogoko-app" ng-app="isogoko"></div>');
  $app.append('<board></board>');

  $('body').append($app);

  angular.bootstrap($app[0], ['isogoko']);
});

angular.module('isogoko', ['cards'], function(){
})

.directive('board', [function(){

  var dir = {
    templateUrl: window.chrome && window.chrome.extension && window.chrome.extension.getURL('board.html') || 'board.html',
    replace:true,
    restrict:'E',
    controller:'BoardCtrl'
  };

  dir.link = function boardLink(scope, element, attrs){
    console.log('linking isogoko directive');
  };

  return dir;

}])

.controller('BoardCtrl', ['$scope', '$cards', function($scope, $cards){

  $scope.cards = {
    kingdomCards : [],
    defaultCards: []
  };

  window.kingdom = $scope.cards;
  window.$cards = $cards;

  function initialize(data){
    _(data.pileInfos).each(function(pile){
      var stack = _($cards[pile.name]).clone();
      stack.name = pile.displayName;

      //default card
      if(pile.inSupply && _.isUndefined(pile.kingdomIndex)){
        $scope.cards.defaultCards.push(stack);
      }
      //kingdom card
      else if(pile.inSupply){
        $scope.cards.kingdomCards.push(stack);
      }
    });
  }

  initialize(SETUP_MESSAGE.data);

}]);

var SETUP_MESSAGE = {
    "data": {
      "playerName": "danstreet",
      "playerInfos": [
        {
          "playerId": "514fd3dae4b00e514a725599",
          "name": "danstreet",
          "playerIndex": 0
        },
        {
          "playerId": "50d63e4de4b0b3425550488e",
          "name": "Ralston Clarke",
          "playerIndex": 1
        }
      ],
      "previewCards": [
        "secretChamber",
        "fishingVillage",
        "fortuneTeller",
        "baron",
        "nomadCamp",
        "procession",
        "rats",
        "spiceMerchant",
        "mandarin",
        "expand"
      ],
      "tutorial": false,
      "pileInfos": [
        {
          "cardNames": [
            "secretChamber"
          ],
          "topCardOnlyFaceUp": false,
          "visible": true,
          "name": "secretChamber",
          "kingdomIndex": 0,
          "embargoTokenCount": 0,
          "defaultCard": "secretChamber",
          "treasureVictory": false,
          "displayName": "Secret Chamber",
          "inSupply": true
        },
        {
          "cardNames": [
            "fishingVillage"
          ],
          "topCardOnlyFaceUp": false,
          "visible": true,
          "name": "fishingVillage",
          "kingdomIndex": 1,
          "embargoTokenCount": 0,
          "defaultCard": "fishingVillage",
          "treasureVictory": false,
          "displayName": "Fishing Village",
          "inSupply": true
        },
        {
          "cardNames": [
            "fortuneTeller"
          ],
          "topCardOnlyFaceUp": false,
          "visible": true,
          "name": "fortuneTeller",
          "kingdomIndex": 2,
          "embargoTokenCount": 0,
          "defaultCard": "fortuneTeller",
          "treasureVictory": false,
          "displayName": "Fortune Teller",
          "inSupply": true
        },
        {
          "cardNames": [
            "baron"
          ],
          "topCardOnlyFaceUp": false,
          "visible": true,
          "name": "baron",
          "kingdomIndex": 3,
          "embargoTokenCount": 0,
          "defaultCard": "baron",
          "treasureVictory": false,
          "displayName": "Baron",
          "inSupply": true
        },
        {
          "cardNames": [
            "nomadCamp"
          ],
          "topCardOnlyFaceUp": false,
          "visible": true,
          "name": "nomadCamp",
          "kingdomIndex": 4,
          "embargoTokenCount": 0,
          "defaultCard": "nomadCamp",
          "treasureVictory": false,
          "displayName": "Nomad Camp",
          "inSupply": true
        },
        {
          "cardNames": [
            "procession"
          ],
          "topCardOnlyFaceUp": false,
          "visible": true,
          "name": "procession",
          "kingdomIndex": 5,
          "embargoTokenCount": 0,
          "defaultCard": "procession",
          "treasureVictory": false,
          "displayName": "Procession",
          "inSupply": true
        },
        {
          "cardNames": [
            "rats"
          ],
          "topCardOnlyFaceUp": false,
          "visible": true,
          "name": "rats",
          "kingdomIndex": 6,
          "embargoTokenCount": 0,
          "defaultCard": "rats",
          "treasureVictory": false,
          "displayName": "Rats",
          "inSupply": true
        },
        {
          "cardNames": [
            "spiceMerchant"
          ],
          "topCardOnlyFaceUp": false,
          "visible": true,
          "name": "spiceMerchant",
          "kingdomIndex": 7,
          "embargoTokenCount": 0,
          "defaultCard": "spiceMerchant",
          "treasureVictory": false,
          "displayName": "Spice Merchant",
          "inSupply": true
        },
        {
          "cardNames": [
            "mandarin"
          ],
          "topCardOnlyFaceUp": false,
          "visible": true,
          "name": "mandarin",
          "kingdomIndex": 8,
          "embargoTokenCount": 0,
          "defaultCard": "mandarin",
          "treasureVictory": false,
          "displayName": "Mandarin",
          "inSupply": true
        },
        {
          "cardNames": [
            "expand"
          ],
          "topCardOnlyFaceUp": false,
          "visible": true,
          "name": "expand",
          "kingdomIndex": 9,
          "embargoTokenCount": 0,
          "defaultCard": "expand",
          "treasureVictory": false,
          "displayName": "Expand",
          "inSupply": true
        },
        {
          "cardNames": [
            "copper"
          ],
          "topCardOnlyFaceUp": false,
          "visible": true,
          "name": "copper",
          "embargoTokenCount": 0,
          "defaultCard": "copper",
          "treasureVictory": true,
          "displayName": "Copper",
          "inSupply": true
        },
        {
          "cardNames": [
            "silver"
          ],
          "topCardOnlyFaceUp": false,
          "visible": true,
          "name": "silver",
          "embargoTokenCount": 0,
          "defaultCard": "silver",
          "treasureVictory": true,
          "displayName": "Silver",
          "inSupply": true
        },
        {
          "cardNames": [
            "gold"
          ],
          "topCardOnlyFaceUp": false,
          "visible": true,
          "name": "gold",
          "embargoTokenCount": 0,
          "defaultCard": "gold",
          "treasureVictory": true,
          "displayName": "Gold",
          "inSupply": true
        },
        {
          "cardNames": [
            "estate"
          ],
          "topCardOnlyFaceUp": false,
          "visible": true,
          "name": "estate",
          "embargoTokenCount": 0,
          "defaultCard": "estate",
          "treasureVictory": true,
          "displayName": "Estate",
          "inSupply": true
        },
        {
          "cardNames": [
            "duchy"
          ],
          "topCardOnlyFaceUp": false,
          "visible": true,
          "name": "duchy",
          "embargoTokenCount": 0,
          "defaultCard": "duchy",
          "treasureVictory": true,
          "displayName": "Duchy",
          "inSupply": true
        },
        {
          "cardNames": [
            "province"
          ],
          "topCardOnlyFaceUp": false,
          "visible": true,
          "name": "province",
          "embargoTokenCount": 0,
          "defaultCard": "province",
          "treasureVictory": true,
          "displayName": "Province",
          "inSupply": true
        },
        {
          "cardNames": [
            "curse"
          ],
          "topCardOnlyFaceUp": false,
          "visible": true,
          "name": "curse",
          "embargoTokenCount": 0,
          "defaultCard": "curse",
          "treasureVictory": true,
          "displayName": "Curse",
          "inSupply": true
        }
      ],
      "sequenceNumber": 0,
      "counterNames": [

      ],
      "numPlayers": 2,
      "playerIndex": 0,
      "matNames": [
        "durationMat"
      ],
      "watcher": false,
      "playerToMove": 1,
      "cards": [
        "secretChamber",
        "fishingVillage",
        "fortuneTeller",
        "baron",
        "nomadCamp",
        "procession",
        "rats",
        "spiceMerchant",
        "mandarin",
        "expand",
        "copper",
        "silver",
        "gold",
        "estate",
        "duchy",
        "province",
        "curse"
      ],
      "startingDecks": [
        [
          "estate",
          "estate",
          "estate",
          "copper",
          "copper",
          "copper",
          "copper",
          "copper",
          "copper",
          "copper"
        ],
        [
          "estate",
          "estate",
          "estate",
          "copper",
          "copper",
          "copper",
          "copper",
          "copper",
          "copper",
          "copper"
        ]
      ]
    },
    "messageName": "gameSetup"
  }
;
