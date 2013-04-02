
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
    kingdomCards : {},
    defaultCards: {}
  };

  window.kingdom = $scope.cards;
  window.$cards = $cards;

  function initialize(data){
    _(data.pileInfos).each(function(pile){
      var stack = _($cards[pile.name]).clone();
      stack.name = pile.displayName;

      //default card
      if(pile.inSupply && _.isUndefined(pile.kingdomIndex)){
        $scope.cards.defaultCards[pile.name] = stack;
      }
      //kingdom card
      else if(pile.inSupply){
        $scope.cards.kingdomCards[pile.name] = stack;
      }
    });

    //sort piles
    $scope.cards.kingdomCardsDisplay = _($scope.cards.kingdomCards).chain().values().sortBy('name').groupBy('cost').value();
    $scope.cards.defaultCardsDisplay = _($scope.cards.defaultCards).chain().values().sortBy('cost').groupBy('type').value();
  }

  function putCards(data){
    var pile = $scope.cards.kingdomCards[data.target.supplyDeck] || $scope.cards.defaultCards[data.target.supplyDeck];

    if(pile){
      pile.count = pile.count || 0;
      pile.count += data.cards.length;
    }

  }


  //run on dummy data
  initialize(SETUP_MESSAGE.data);

  _(putCardsMessages).each(function(msg){
    putCards(msg.data);
  });

}]);

var putCardsMessages = [
{
    "data": {
      "target": {
        "name": "supply",
        "supplyDeck": "secretChamber"
      },
      "cards": [
        "secretChamber.0",
        "secretChamber.1",
        "secretChamber.2",
        "secretChamber.3",
        "secretChamber.4",
        "secretChamber.5",
        "secretChamber.6",
        "secretChamber.7",
        "secretChamber.8",
        "secretChamber.9"
      ],
      "sequenceNumber": 1
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "supply",
        "supplyDeck": "fishingVillage"
      },
      "cards": [
        "fishingVillage.0",
        "fishingVillage.1",
        "fishingVillage.2",
        "fishingVillage.3",
        "fishingVillage.4",
        "fishingVillage.5",
        "fishingVillage.6",
        "fishingVillage.7",
        "fishingVillage.8",
        "fishingVillage.9"
      ],
      "sequenceNumber": 2
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "supply",
        "supplyDeck": "fortuneTeller"
      },
      "cards": [
        "fortuneTeller.0",
        "fortuneTeller.1",
        "fortuneTeller.2",
        "fortuneTeller.3",
        "fortuneTeller.4",
        "fortuneTeller.5",
        "fortuneTeller.6",
        "fortuneTeller.7",
        "fortuneTeller.8",
        "fortuneTeller.9"
      ],
      "sequenceNumber": 3
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "supply",
        "supplyDeck": "baron"
      },
      "cards": [
        "baron.0",
        "baron.1",
        "baron.2",
        "baron.3",
        "baron.4",
        "baron.5",
        "baron.6",
        "baron.7",
        "baron.8",
        "baron.9"
      ],
      "sequenceNumber": 4
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "supply",
        "supplyDeck": "nomadCamp"
      },
      "cards": [
        "nomadCamp.0",
        "nomadCamp.1",
        "nomadCamp.2",
        "nomadCamp.3",
        "nomadCamp.4",
        "nomadCamp.5",
        "nomadCamp.6",
        "nomadCamp.7",
        "nomadCamp.8",
        "nomadCamp.9"
      ],
      "sequenceNumber": 5
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "supply",
        "supplyDeck": "procession"
      },
      "cards": [
        "procession.0",
        "procession.1",
        "procession.2",
        "procession.3",
        "procession.4",
        "procession.5",
        "procession.6",
        "procession.7",
        "procession.8",
        "procession.9"
      ],
      "sequenceNumber": 6
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "supply",
        "supplyDeck": "rats"
      },
      "cards": [
        "rats.0",
        "rats.1",
        "rats.2",
        "rats.3",
        "rats.4",
        "rats.5",
        "rats.6",
        "rats.7",
        "rats.8",
        "rats.9",
        "rats.10",
        "rats.11",
        "rats.12",
        "rats.13",
        "rats.14",
        "rats.15",
        "rats.16",
        "rats.17",
        "rats.18",
        "rats.19"
      ],
      "sequenceNumber": 7
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "supply",
        "supplyDeck": "spiceMerchant"
      },
      "cards": [
        "spiceMerchant.0",
        "spiceMerchant.1",
        "spiceMerchant.2",
        "spiceMerchant.3",
        "spiceMerchant.4",
        "spiceMerchant.5",
        "spiceMerchant.6",
        "spiceMerchant.7",
        "spiceMerchant.8",
        "spiceMerchant.9"
      ],
      "sequenceNumber": 8
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "supply",
        "supplyDeck": "mandarin"
      },
      "cards": [
        "mandarin.0",
        "mandarin.1",
        "mandarin.2",
        "mandarin.3",
        "mandarin.4",
        "mandarin.5",
        "mandarin.6",
        "mandarin.7",
        "mandarin.8",
        "mandarin.9"
      ],
      "sequenceNumber": 9
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "supply",
        "supplyDeck": "expand"
      },
      "cards": [
        "expand.0",
        "expand.1",
        "expand.2",
        "expand.3",
        "expand.4",
        "expand.5",
        "expand.6",
        "expand.7",
        "expand.8",
        "expand.9"
      ],
      "sequenceNumber": 10
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "supply",
        "supplyDeck": "copper"
      },
      "cards": [
        "copper.14",
        "copper.15",
        "copper.16",
        "copper.17",
        "copper.18",
        "copper.19",
        "copper.20",
        "copper.21",
        "copper.22",
        "copper.23",
        "copper.24",
        "copper.25",
        "copper.26",
        "copper.27",
        "copper.28",
        "copper.29",
        "copper.30",
        "copper.31",
        "copper.32",
        "copper.33",
        "copper.34",
        "copper.35",
        "copper.36",
        "copper.37",
        "copper.38",
        "copper.39",
        "copper.40",
        "copper.41",
        "copper.42",
        "copper.43",
        "copper.44",
        "copper.45",
        "copper.46",
        "copper.47",
        "copper.48",
        "copper.49",
        "copper.50",
        "copper.51",
        "copper.52",
        "copper.53",
        "copper.54",
        "copper.55",
        "copper.56",
        "copper.57",
        "copper.58",
        "copper.59"
      ],
      "sequenceNumber": 11
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "supply",
        "supplyDeck": "silver"
      },
      "cards": [
        "silver.0",
        "silver.1",
        "silver.2",
        "silver.3",
        "silver.4",
        "silver.5",
        "silver.6",
        "silver.7",
        "silver.8",
        "silver.9",
        "silver.10",
        "silver.11",
        "silver.12",
        "silver.13",
        "silver.14",
        "silver.15",
        "silver.16",
        "silver.17",
        "silver.18",
        "silver.19",
        "silver.20",
        "silver.21",
        "silver.22",
        "silver.23",
        "silver.24",
        "silver.25",
        "silver.26",
        "silver.27",
        "silver.28",
        "silver.29",
        "silver.30",
        "silver.31",
        "silver.32",
        "silver.33",
        "silver.34",
        "silver.35",
        "silver.36",
        "silver.37",
        "silver.38",
        "silver.39"
      ],
      "sequenceNumber": 12
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "supply",
        "supplyDeck": "gold"
      },
      "cards": [
        "gold.0",
        "gold.1",
        "gold.2",
        "gold.3",
        "gold.4",
        "gold.5",
        "gold.6",
        "gold.7",
        "gold.8",
        "gold.9",
        "gold.10",
        "gold.11",
        "gold.12",
        "gold.13",
        "gold.14",
        "gold.15",
        "gold.16",
        "gold.17",
        "gold.18",
        "gold.19",
        "gold.20",
        "gold.21",
        "gold.22",
        "gold.23",
        "gold.24",
        "gold.25",
        "gold.26",
        "gold.27",
        "gold.28",
        "gold.29"
      ],
      "sequenceNumber": 13
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "supply",
        "supplyDeck": "estate"
      },
      "cards": [
        "estate.6",
        "estate.7",
        "estate.8",
        "estate.9",
        "estate.10",
        "estate.11",
        "estate.12",
        "estate.13"
      ],
      "sequenceNumber": 14
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "supply",
        "supplyDeck": "duchy"
      },
      "cards": [
        "duchy.0",
        "duchy.1",
        "duchy.2",
        "duchy.3",
        "duchy.4",
        "duchy.5",
        "duchy.6",
        "duchy.7"
      ],
      "sequenceNumber": 15
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "supply",
        "supplyDeck": "province"
      },
      "cards": [
        "province.0",
        "province.1",
        "province.2",
        "province.3",
        "province.4",
        "province.5",
        "province.6",
        "province.7"
      ],
      "sequenceNumber": 16
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "supply",
        "supplyDeck": "curse"
      },
      "cards": [
        "curse.0",
        "curse.1",
        "curse.2",
        "curse.3",
        "curse.4",
        "curse.5",
        "curse.6",
        "curse.7",
        "curse.8",
        "curse.9"
      ],
      "sequenceNumber": 17
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "playerIndex": 0,
        "name": "hand"
      },
      "cards": [

      ],
      "sequenceNumber": 18
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "playerIndex": 0,
        "name": "discard"
      },
      "cards": [

      ],
      "sequenceNumber": 19
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "playerIndex": 0,
        "name": "deck"
      },
      "cards": [
        "back",
        "back",
        "back",
        "back",
        "back",
        "back",
        "back",
        "back",
        "back",
        "back"
      ],
      "sequenceNumber": 20
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "playerIndex": 0,
        "name": "durationMat"
      },
      "cards": [

      ],
      "sequenceNumber": 21
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "playerIndex": 1,
        "name": "hand"
      },
      "cards": [

      ],
      "sequenceNumber": 22
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "playerIndex": 1,
        "name": "discard"
      },
      "cards": [

      ],
      "sequenceNumber": 23
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "playerIndex": 1,
        "name": "deck"
      },
      "cards": [
        "back",
        "back",
        "back",
        "back",
        "back",
        "back",
        "back",
        "back",
        "back",
        "back"
      ],
      "sequenceNumber": 24
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "playerIndex": 1,
        "name": "durationMat"
      },
      "cards": [

      ],
      "sequenceNumber": 25
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "trash"
      },
      "cards": [

      ],
      "sequenceNumber": 26
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "play"
      },
      "cards": [

      ],
      "sequenceNumber": 27
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "globalReveal"
      },
      "cards": [

      ],
      "sequenceNumber": 28
    },
    "messageName": "putCards"
  },
  {
    "data": {
      "target": {
        "name": "globalRevealTwo"
      },
      "cards": [

      ],
      "sequenceNumber": 29
    },
    "messageName": "putCards"
  }
]

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
