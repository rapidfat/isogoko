

var cardList = {
    'borderVillage':{
      type:'action',
      name:"Border Village",
      cost:6,
      text:'+1 Card; +2 Actions\n—\nWhen you gain this, gain a card costing less than this.'
    },
    'farmingVillage':{
      type:'action',
      name:'Farming Village',
      cost:4,
      text:'+2 Actions\nReveal cards from the top of your deck until you reveal an Action or Treasure card. Put that card into your hand and discard the other cards.'
    },
    'miningVillage':{
      type:'action',
      name:'Mining Village',
      cost:4,
      text:'+1 Card; +2 Actions\nYou may trash this card immediately. If you do, +$2.'
    },
    'nativeVillage':{
      type:'action',
      name:'Native Village',
      cost:2,
      text:'+2 Actions\nChoose one: Set aside the top card of your deck face down on your Native Village mat; or put all the cards from your mat into your hand. You may look at the cards on your mat at any time; return them to your deck at the end of the game.'
    },
    'walledVillage':{
      type:'action',
      name:'Walled Village',
      cost:4,
      text:'+1 Card; +2 Actions\n—\nAt the start of Clean-up, if you have this and no more than one other Action card in play, you may put this on top of your deck.'
    },
    'workersVillage':{
      type:'action',
      name:"Worker's Village",
      cost:4,
      text:'+1 Card; +2 Actions, +1 Buy'
    },
    'ruinedVillage':{
      type:'ruins',
      name:'Ruined Village',
      cost:0,
      text:'+1 Action'
    },
    'fishingVillage':{
      type:'duration',
      name:'Fishing Village',
      cost:3,
      text:'+2 Actions, +$1\nAt the start of your next turn: +1 Action; +$1.'
    },
    'village':{
      type:'action',
      name:'Village',
      cost:3,
      text:'+1 Card; +2 Actions.'
    },
    'ruinedLibrary':{
      type:'ruins',
      name:'Ruined Library',
      cost:0,
      text:'+1 Card'
    },
    'library':{
      type:'action',
      name:'Library',
      cost:5,
      text:'Draw until you have 7 cards in hand. You may set aside any Action cards drawn this way, as you draw them; discard the set aside cards after you finish drawing.'
    },
    'abandonedMine':{
      type:'ruins',
      name:'Abandoned Mine',
      cost:0,
      text:'+$1'
    },
    'mine':{
      type:'action',
      name:'Mine',
      cost:5,
      text:'Trash a Treasure card from your hand. Gain a Treasure card costing up to $3 more; put it into your hand.'
    },
    'bagOfGold':{
      type:'action',
      name:'Bag Of Gold',
      cost:0,
      text:'+1 Action\nGain a Gold, putting it on top of your deck.'
    },
    'foolsGold':{
      type:'treasure-reaction',
      name:"Fool's Gold",
      cost:2,
      text:'If this is the first time you played a Fool’s Gold this turn, this is worth $1, otherwise it’s worth $4.\n—\nWhen another player gains a Province, you may trash this from your hand. If you do, gain a Gold, putting it on your deck.'
    },
    'gold':{
      type:'treasure',
      name:'Gold',
      cost:6,
      text:'Worth $3'
    },
    'overgrownEstate':{
      type:'shelter-victory',
      name:'Overgrown Estate',
      cost:1,
      text:'0 VP\n___\nWhen you trash this, +1 Card.'
    },
    'estate':{
      type:'victory',
      name:'Estate',
      cost:2,
      text:'Worth 1 VP'
    },
    'countingHouse':{
      type:'action',
      name:'Counting House',
      cost:5,
      text:'Look through your discard pile, reveal any number of Copper cards from it, and put them into your hand.'
    },
    'count':{
      type:'action',
      name:'Count',
      cost:5,
      text:'Choose one: Discard 2 cards; put a card from your hand on top of your deck; or gain a Copper.\nChoose one: +$3; trash your hand; or gain a Duchy.'
    },
    'coppersmith':{
      type:'action',
      name:'Coppersmith',
      cost:4,
      text:'Copper produces an extra $1 this turn.'
    },
    'copper':{
      type:'treasure',
      name:'Copper',
      cost:0,
      text:'Worth $1'
    },
    'ruinedMarket':{
      type:'ruins',
      name:'Ruined Market',
      cost:0,
      text:'+1 Buy'
    },
    'grandMarket':{
      type:'action',
      name:'Grand Market',
      cost:6,
      text:'+1 Card; +1 Action; +1 Buy; +$2\nYou can’t buy this if you have any Copper in play.'
    },
    'blackMarket':{
      type:'action',
      name:'Black Market',
      cost:3,
      text:'+$2\nReveal the top 3 cards of the Black Market deck. You may buy one of them immediately. Put the unbought cards on the bottom of the Black Market deck in any order.Before the game, make a Black Market deck out of one copy of each Kingdom card not in the supply.'
    },
    'marketSquare':{
      type:'reaction',
      name:'Market Square',
      cost:3,
      text:'+1 Card; +1 Action; +1 Buy\n___\nWhen one of your cards is trashed, you may discard this from your hand. If you do, gain a Gold.'
    },
    'market':{
      type:'action',
      name:'Market',
      cost:5,
      text:'+1 Card; +1 Action; +1 Buy; +$1.'
    },
    'adventurer':{
      type:'action',
      name:'Adventurer',
      cost:6,
      text:'Reveal cards from your deck until you reveal 2 Treasure cards. Put those Treasure cards in your hand and discard the other revealed cards.'
    },
    'alchemist':{
      type:'action',
      name:'Alchemist',
      cost:3,
      potion:true,
      text:'+2 Cards; +1 Action\nWhen you discard this from play, you may put this on top of your deck if you have a Potion in play.'
    },
    'altar':{
      type:'action',
      name:'Altar',
      cost:6,
      text:'Trash a card from your hand. Gain a card costing up to $5.'
    },
    'ambassador':{
      type:'action',
      name:'Ambassador',
      cost:3,
      text:'Reveal a card from your hand. Return up to 2 copies of it from your hand to the Supply. Then each other player gains a copy of it.'
    },
    'apothecary':{
      type:'action',
      name:'Apothecary',
      cost:2,
      potion:true,
      text:'+1 Card; +1 Action\nReveal the top 4 cards of your deck. Put the revealed Coppers and Potions into your hand. Put the other cards back on top in any order.'
    },
    'apprentice':{
      type:'action',
      name:'Apprentice',
      cost:5,
      text:'+1 Action\nTrash a card from your hand. +1 Card per Coin it costs. +2 Cards if it has ◉ in its cost.'
    },
    'armory':{
      type:'action',
      name:'Armory',
      cost:4,
      text:'Gain a card costing up to $4. Put it on top of your deck.'
    },
    'bandOfMisfits':{
      type:'action',
      name:'Band of Misfits',
      cost:5,
      text:'Play this as if it were an Action card in the Supply costing less than it that you choose. This is that card until it leaves play.'
    },
    'banditCamp':{
      type:'action',
      name:'Bandit Camp',
      cost:5,
      text:'+1 Card; +2 Actions\nGain a Spoils.'
    },
    'baron':{
      type:'action',
      name:'Baron',
      cost:4,
      text:'+1 Buy\nYou may discard an Estate card. If you do, +$4. Otherwise, gain an Estate card.'
    },
    'bazaar':{
      type:'action',
      name:'Bazaar',
      cost:5,
      text:'+1 Card; +2 Actions, +$1.'
    },
    'bishop':{
      type:'action',
      name:'Bishop',
      cost:4,
      text:'+$1; +1 VP token\nTrash a card from your hand. +VP tokens equal to half its cost in coins, rounded down. Each other player may trash a card from his hand.'
    },
    'bridge':{
      type:'action',
      name:'Bridge',
      cost:4,
      text:'+1 Buy; +$1\nAll cards (including cards in players’ hands) cost $1 less this turn, but not less than $0.'
    },
    'bureaucrat':{
      type:'action',
      name:'Bureaucrat',
      cost:4,
      text:'Gain a silver card; put it on top of your deck. Each other player reveals a Victory card from his hand and puts it on his deck (or reveals a hand with no Victory cards).'
    },
    'cartographer':{
      type:'action',
      name:'Cartographer',
      cost:5,
      text:'+1 Card; +1 Action\nLook at the top 4 cards of your deck. Discard any number of them. Put the rest back on top in any order.'
    },
    'catacombs':{
      type:'action',
      name:'Catacombs',
      cost:5,
      text:'Look at the top 3 cards of your deck. Choose one: Put them into your hand; or discard them and +3 Cards.\n___\nWhen you trash this, gain a cheaper card.'
    },
    'cellar':{
      type:'action',
      name:'Cellar',
      cost:2,
      text:'+1 Action\nDiscard any number of cards.\n+1 Card per card discarded.'
    },
    'chancellor':{
      type:'action',
      name:'Chancellor',
      cost:3,
      text:'+$2\nYou may immediately put your deck into your discard pile.'
    },
    'chapel':{
      type:'action',
      name:'Chapel',
      cost:2,
      text:'Trash up to 4 cards from your hand.'
    },
    'city':{
      type:'action',
      name:'City',
      cost:5,
      text:'+1 Card; +2 Actions\nIf there are one or more empty Supply piles, +1 Card. If there are two or more, +$1 and +1 Buy.'
    },
    'conspirator':{
      type:'action',
      name:'Conspirator',
      cost:4,
      text:'+$2\nIf you’ve played 3 or more Actions this turn (counting this): +1 Card; +1 Action.'
    },
    'councilRoom':{
      type:'action',
      name:'CouncilRoom',
      cost:5,
      text:'+4 Cards; +1 Buy\nEach other player draws a card.'
    },
    'courtyard':{
      type:'action',
      name:'Courtyard',
      cost:3,
      text:'+3 Cards\nPut a card from your hand on top of your deck.'
    },
    'crossroads':{
      type:'action',
      name:'Crossroads',
      cost:2,
      text:'Reveal your hand.\n+1 Card per Victory card revealed. If this is the first time you played a Crossroads this turn, +3 Actions.'
    },
    'cultist':{
      type:'action',
      name:'Cultist',
      cost:5,
      text:'+2 Cards\nEach other player gains a Ruins. You may play a Cultist from your hand.\n___\nWhen you trash this, +3 Cards.'
    },
    'cutpurse':{
      type:'action',
      name:'Cutpurse',
      cost:4,
      text:'+$2\nEach other player discards a Copper card (or reveals a hand with no Copper).'
    },
    'dameAnna':{
      type:'action',
      name:'Dame Anna',
      cost:5,
      text:'You may trash up to 2 cards from your hand.\nEach other player reveals the top 2 cards of his deck, trashes one of them costing from $3 to $6, and discards the rest. If a Knight is trashed by this, trash this card.'
    },
    'dameMolly':{
      type:'action',
      name:'Dame Molly',
      cost:5,
      text:'+2 Actions.\nEach other player discards the top 2 cards of his deck, and trashes one of them costing from $3 to $6. If a Knight is trashed by this, trash this card.'
    },
    'dameNatalie':{
      type:'action',
      name:'Dame Natalie',
      cost:5,
      text:'You may gain a card costing up to $3.\nEach other player reveals the top 2 cards of his deck, trashes one of them costing from $3 to $6, and discards the rest. If a Knight is trashed by this, trash this card.'
    },
    'dameSylvia':{
      type:'action',
      name:'Dame Sylvia',
      cost:5,
      text:'+$2\nEach other player reveals the top 2 cards of his deck, trashes one of them costing from $3 to $6, and discards the rest. If a Knight is trashed by this, trash this card.'
    },
    'deathCart':{
      type:'action',
      name:'Death Cart',
      cost:4,
      text:'+$5\nYou may trash an Action card from your hand. If you don’t, trash this.\n___\nWhen you gain this, gain two Ruins.'
    },
    'develop':{
      type:'action',
      name:'Develop',
      cost:3,
      text:'Trash a card from your hand. Gain a card costing exactly $1 more than it and a card costing exactly $1 less than it, in either order, putting them on top of your deck.'
    },
    'duchess':{
      type:'action',
      name:'Duchess',
      cost:2,
      text:'+$2\nEach player (including you) looks at the top card of his deck, and discards it or puts it back.\n—\nIn games using this, when you gain a Duchy, you may gain a Duchess.'
    },
    'embargo':{
      type:'action',
      name:'Embargo',
      cost:2,
      text:'+$2\nTrash this card. Put an Embargo token on top of a Supply pile.\nWhen a player buys a card, he gains a Curse card per Embargo token on that pile.'
    },
    'embassy':{
      type:'action',
      name:'Embassy',
      cost:5,
      text:'+5 Cards\nDiscard 3 cards.\n—\nWhen you gain this, each other player gains a Silver.'
    },
    'envoy':{
      type:'action',
      name:'Envoy',
      cost:5,
      text:'Reveal the top 5 cards of your deck. The player to your left chooses one for you to discard. Draw the rest.'
    },
    'expand':{
      type:'action',
      name:'Expand',
      cost:7,
      text:'Trash a card from your hand. Gain a card costing up to $3 more than the trashed card.'
    },
    'explorer':{
      type:'action',
      name:'Explorer',
      cost:5,
      text:'You may reveal a Province card from your hand. If you do, gain a Gold card, putting it into your hand. Otherwise, gain a Silver card, putting it into your hand.'
    },
    'familiar':{
      type:'action',
      name:'Familiar',
      cost:3,
      potion:true,
      text:'+1 Card; +1 Action\nEach other player gains a curse.'
    },
    'feast':{
      type:'action',
      name:'Feat',
      cost:4,
      text:'Trash this card. Gain a card costing up to $5.'
    },
    'festival':{
      type:'action',
      name:'Festival',
      cost:5,
      text:'+2 Actions, +1 Buy; +$2.'
    },
    'followers':{
      type:'action',
      name:'Followers',
      cost:0,
      text:'+2 Cards\nGain an Estate. Each other player gains a Curse and discards down to 3 cards in hand.'
    },
    'forager':{
      type:'action',
      name:'Forager',
      cost:3,
      text:'+1 Action; +1 Buy\nTrash a card from your hand. +$1 per differently named Treasure in the trash.'
    },
    'forge':{
      type:'action',
      name:'Forge',
      cost:7,
      text:'Trash any number of cards from your hand. Gain a card with cost exactly equal to the total cost in coins of the trashed cards.'
    },
    'fortress':{
      type:'action',
      name:'Fortress',
      cost:4,
      text:'+1 Card; +2 Actions\n___\nWhen you trash this, put it into your hand.'
    },
    'fortuneTeller':{
      type:'action',
      name:'Fortune Teller',
      cost:3,
      text:'+$2\nEach other player reveals cards from the top of his deck until he reveals a Victory or Curse card. He puts it on top and discards the other revealed cards.'
    },
    'ghostShip':{
      type:'action',
      name:'Ghost Ship',
      cost:5,
      text:'+2 Cards\nEach other player with 4 or more cards in hand puts cards from his hand on top of his deck until he has 3 cards in his hand.'
    },
    'golem':{
      type:'action',
      name:'Golem',
      cost:4,
      potion:true,
      text:'Reveal cards from your deck until you reveal 2 Action cards other than Golem Cards. Discard the other cards, then play the Action cards in either order.'
    },
    'goons':{
      type:'action',
      name:'Goons',
      cost:6,
      text:'+1 Buy; +$2\nEach other player discards down to 3 cards in hand.\nWhile this is in play, when you buy a card, +1 VP token.'
    },
    'governor':{
      type:'action',
      name:'Governor',
      cost:5,
      text:'+1 Action\nChoose one; you get the version in parentheses: +1 (+3) Cards; or each player gains a Silver (Gold); or each player may trash a card from his hand and gain a card costing exactly $1 ($2) more.'
    },
    'graverobber':{
      type:'action',
      name:'Graverobber',
      cost:5,
      text:'Choose one: Gain a card from the trash costing from $3 to $6, putting it on top of your deck; or trash an Action card from your hand and gain a card costing up to $3 more than it.'
    },
    'haggler':{
      type:'action',
      name:'Haggler',
      cost:5,
      text:'+$2\n—\nWhile this is in play, when you buy a card, gain a card costing less than it that is not a Victory card.'
    },
    'hamlet':{
      type:'action',
      name:'Hamlet',
      cost:2,
      text:'+1 Card; +1 Action\nYou may discard a card; if you do, +1 Action.\nYou may discard a card; if you do, +1 Buy.'
    },
    'harvest':{
      type:'action',
      name:'Harvest',
      cost:5,
      text:'Reveal the top 4 cards of your deck, then discard them. +$1 per differently named card revealed.'
    },
    'herbalist':{
      type:'action',
      name:'Herbalist',
      cost:2,
      text:'+1 Buy; +$1\nWhen you discard this from play, you may put one of your Treasures from play on top of your deck.'
    },
    'hermit':{
      type:'action',
      name:'Hermit',
      cost:3,
      text:'Look through your discard pile. You may trash a card that is not a Treasure, from your discard pile or your hand. Gain a card costing up to $3.\n___\nWhen you discard this from play, if you didn’t buy any cards this turn, trash this and gain a Madman (from the Madman pile).'
    },
    'highway':{
      type:'action',
      name:'Highway',
      cost:5,
      text:'+1 Card; +1 Action\n—\nWhile this is in play, cards cost $1 less, but not less than $0.'
    },
    'huntingGrounds':{
      type:'action',
      name:'Hunting Grounds',
      cost:6,
      text:'+4 Cards\n___\nWhen this is trashed, gain a Duchy or 3 Estates'
    },
    'huntingParty':{
      type:'action',
      name:'Hunting Party',
      cost:5,
      text:'+1 Card; +1 Action.\nReveal your hand. Reveal cards from your deck until you reveal a card that isn’t a duplicate of one in your hand. Put it into your hand and discard the rest.'
    },
    'inn':{
      type:'action',
      name:'Inn',
      cost:5,
      text:'+2 Cards; +2 Actions\nDiscard 2 cards.\n—\nWhen you gain this, look through your discard pile (including this), reveal any number of Action cards from it, and shuffle them into your deck.'
    },
    'ironmonger':{
      type:'action',
      name:'Ironmonger',
      cost:4,
      text:'+1 Card; +1 Action\nReveal the top card of your deck; you may discard it. If it is an Action card, +1 Action; a Treasure card, +$1; a Victory card, +1 Card.'
    },
    'ironworks':{
      type:'action',
      cost:4,
      name:'Ironworks',
      text:'Gain a card costing up to $4. If it is an… Action card, +1 Action. Treasure card, +$1. Victory card, +1 Card.'
    },
    'jackOfAllTrades':{
      type:'action',
      name:'Jack of All Trades',
      cost:4,
      text:'Gain a Silver.\nLook at the top card of your deck; discard it or put it back.\nDraw until you have 5 cards in hand.\nYou may trash a card from your hand that is not a Treasure.'
    },
    'jester':{
      type:'action',
      name:'Jester',
      cost:5,
      text:'+$2\nEach other player discards the top card of his deck. If it’s a Victory card he gains a Curse. Otherwise either he gains a copy of the discarded card or you do, your choice.'
    },
    'junkDealer':{
      type:'action',
      name:'Junk Dealer',
      cost:5,
      text:'+1 Card; +1 Action; +$1\nTrash a card from your hand.'
    },
    'kingsCourt':{
      type:'action',
      name:"King's Court",
      cost:7,
      text:'You may choose an Action card in your hand. Play it three times.'
    },
    'knights':{
      type:'action',
      name:'Knights',
      cost:5,
      text:'Shuffle the Knight pile before each game with it.  Keep it face down except for the top card, which is the only one that can be bought or gained.'
    },
    'laboratory':{
      type:'action',
      name:'Laboratory',
      cost:5,
      text:'+2 Cards; +1 Action.'
    },
    'lookout':{
      type:'action',
      name:'Lookout',
      cost:3,
      text:'+1 Action\nLook at the top 3 cards of your deck. Trash one of them. Discard one of them. Put the other one on top of your deck.'
    },
    'madman':{
      type:'action',
      name:'Madman',
      cost:0,
      text:'+2 Actions\nReturn this to the Madman pile. If you do, +1 Card per card in your hand.\n(This is not in the Supply.)'
    },
    'mandarin':{
      type:'action',
      name:'Mandarin',
      cost:5,
      text:'+$3\nPut a card from your hand on top of your deck.\n—\nWhen you gain this, put all Treasures you have in play on top of your deck in any order.'
    },
    'marauder':{
      type:'action',
      name:'Marauder',
      cost:4,
      text:'Gain a Spoils. Each other player gains a Ruins.'
    },
    'margrave':{
      type:'action',
      name:'Margrave',
      cost:5,
      text:'+3 Cards; +1 Buy\nEach other player draws a card, then discards down to 3 cards in hand.'
    },
    'masquerade':{
      type:'action',
      name:'Masquerade',
      cost:3,
      text:'+2 Cards\nEach player passes a card in their hand to the player on their left. You may trash a card from your hand.'
    },
    'menagerie':{
      type:'action',
      name:'Menagerie',
      cost:3,
      text:'+1 Action\nReveal your hand. If there are no duplicate cards in it, +3 Cards. Otherwise, +1 Card.'
    },
    'mercenary':{
      type:'action',
      name:'Mercenary',
      cost:0,
      text:'You may trash 2 cards from your hand. If you do, +2 Cards, + $2, and each other player discards down to 3 cards in hand.\n(This is not in the Supply.)'
    },
    'militia':{
      type:'action',
      name:'Militia',
      cost:4,
      text:'+$2\nEach other player discards down to 3 cards in his hand.'
    },
    'minion':{
      type:'action',
      name:'Minion',
      cost:5,
      text:'+1 Action\nChoose one: +$2; or discard your hand, +4 Cards; and each other player with at least 5 cards in hand discards his hand and draws 4 cards.'
    },
    'mint':{
      type:'action',
      name:'Mint',
      cost:5,
      text:'You may reveal a Treasure card from your hand. Gain a copy of it.\nWhen you buy this, trash all Treasures you have in play.'
    },
    'moneylender':{
      type:'action',
      name:'Moneylender',
      cost:4,
      text:'Trash a Copper from your hand. If you do, +$3.'
    },
    'monument':{
      type:'action',
      name:'Monument',
      cost:4,
      text:'+$2; +1 VP token.'
    },
    'mountebank':{
      type:'action',
      name:'Mountebank',
      cost:5,
      text:'+$2\nEach other player may discard a Curse. If he doesn’t, he gains a Curse and a Copper.'
    },
    'mystic':{
      type:'action',
      name:'Mystic',
      cost:5,
      text:'+1 Action\n+$2\nName a card. Reveal the top card of your deck. If it’s the named card, put it into your hand.'
    },
    'navigator':{
      type:'action',
      name:'Navigator',
      cost:4,
      text:'+$2\nLook at the top 5 cards of your deck. Either discard all of them, or put them back on top of your deck in any order.'
    },
    'nobleBrigand':{
      type:'action',
      name:'Noble Brigand',
      cost:4,
      text:'+$1\nWhen you buy this or play it, each other player reveals the top 2 cards of his deck, trashes a revealed Silver or Gold you choose, and discards the rest. If he didn’t reveal a Treasure, he gains a Copper. You gain the trashed cards.'
    },
    'nomadCamp':{
      type:'action',
      name:'Nomad Camp',
      cost:4,
      text:'+1 Buy; +$2\n—\nWhen you gain this, put it on top of your deck.'
    },
    'oasis':{
      type:'action',
      name:'Oasis',
      cost:3,
      text:'+1 Card; +1 Action; +$1\nDiscard a card.'
    },
    'oracle':{
      type:'action',
      name:'Oracle',
      cost:3,
      text:'Each player (including you) reveals the top 2 cards of his deck, and you choose one: either he discards them, or he puts them back on top in an order he chooses.\n+2 Cards'
    },
    'pawn':{
      type:'action',
      name:'Pawn',
      cost:2,
      text:'Choose two: +1 Card; +1 Action; +1 Buy; +$1.\n(The choices must be different.)'
    },
    'pearlDiver':{
      type:'action',
      name:'Pearl Diver',
      cost:2,
      text:'+1 Card; +1 Action\nLook at the bottom card of your deck. You may put it on top.'
    },
    'peddler':{
      type:'action',
      name:'Peddler',
      cost:8,
      text:'+1 Card; +1 Action; +$1\nDuring your Buy phase, this costs $2 less per Action card you have in play, but not less than $0.'
    },
    'pillage':{
      type:'action',
      name:'Pillage',
      cost:5,
      text:'Trash this. Each other player with 5 or more cards in hand reveals his hand and discards a card that you choose. Gain 2 Spoils.'
    },
    'pirateShip':{
      type:'action',
      name:'Pirate Ship',
      cost:4,
      text:'Choose one: Each other player reveals the top 2 cards of his deck, trashes a revealed Treasure that you choose, discards the rest, and if anyone trashed a Treasure you take a Coin token; or, +$1 per Coin token you’ve taken with Pirate Ships this game.'
    },
    'poorHouse':{
      type:'action',
      name:'Poor House',
      cost:1,
      text:'+$4\nReveal your hand. -$1 per Treasure card in your hand, to a minimum of $0.'
    },
    'possession':{
      type:'action',
      name:'Possession',
      cost:6,
      potion:true,
      text:'The player to your left takes an extra turn after this one, in which you can see all cards he can and make all decisions for him. Any cards he would gain on that turn, you gain instead; any cards of his that are trashed are set aside and returned to his discard pile at end of turn.'
    },
    'princess':{
      type:'action',
      name:'Princess',
      cost:0,
      text:'+1 Buy\nWhile this is in play, cards cost $2 less, but not less than $0.'
    },
    'procession':{
      type:'action',
      name:'Procession',
      cost:4,
      text:'You may play an Action card from your hand twice. Trash it. Gain an Action card costing exactly $1 more than it.'
    },
    'rabble':{
      type:'action',
      name:'Rabble',
      cost:5,
      text:'+3 Cards\nEach other player reveals the top 3 cards of his deck, discards the revealed Actions and Treasures, and puts the rest back on top in any order he chooses.'
    },
    'rats':{
      type:'action',
      name:'Rats',
      cost:4,
      text:'+1 Card; +1 Action\nGain a Rats. Trash a card from your hand other than a Rats (or reveal a hand of all Rats).\n___\nWhen this is trashed, +1 Card.'
    },
    'rebuild':{
      type:'action',
      name:'Rebuild',
      cost:5,
      text:'+1 Action\nName a card. Reveal cards from the top of your deck until you reveal a Victory card that is not the named card. Discard the other cards. Trash the Victory card and gain a Victory card costing up to $3 more than it.'
    },
    'remake':{
      type:'action',
      name:'Remake',
      cost:4,
      text:'Do this twice: Trash a card from your hand; gain a card costing exactly $1 more than the trashed card.'
    },
    'remodel':{
      type:'action',
      name:'Remodel',
      cost:4,
      text:'Trash a card from your hand. Gain a card costing up to $2 more than the trashed card.'
    },
    'rogue':{
      type:'action',
      name:'Rogue',
      cost:5,
      text:'+$2\nIf there are any cards in the trash costing from $3 to $6, gain one of them. Otherwise, each other player reveals the top 2 cards of his deck, trashes one of them costing from $3 to $6, and discards the rest.'
    },
    'saboteur':{
      type:'action',
      name:'Saboteur',
      cost:5,
      text:'Each other player reveals cards from the top of his deck until revealing one costing $3 or more. He trashes that card and may gain a card costing at most $2 less than it. He discards the other revealed cards.'
    },
    'sage':{
      type:'action',
      name:'Sage',
      cost:3,
      text:'+1 Action\nReveal cards from the top of your deck until you reveal one costing $3 or more. Put that card into your hand and discard the rest.'
    },
    'salvager':{
      type:'action',
      name:'Salvager',
      cost:4,
      text:'+1 Buy\nTrash a card from your hand. +$ equal to its cost.'
    },
    'scavenger':{
      type:'action',
      name:'Scavenger',
      cost:4,
      text:'+$2\nYou may put your deck into your discard pile. Look through your discard pile and put one card from it on top of your deck.'
    },
    'scheme':{
      type:'action',
      name:'Scheme',
      cost:3,
      text:'+1 Card; +1 Action\nAt the start of Clean-up this turn, you may choose an Action card you have in play. If you discard it from play this turn, put it on your deck.'
    },
    'scout':{
      type:'action',
      name:'Scout',
      cost:4,
      text:'+1 Action\nReveal the top 4 cards of your deck. Put the revealed Victory cards into your hand. Put the other cards on top of your deck in any order.'
    },
    'scryingPool':{
      type:'action',
      name:'Scrying Pool',
      cost:2,
      potion:true,
      text:'+1 Action\nEach player (including you) reveals the top card of his deck and either discards it or puts it back, your choice. Then reveal cards from the top of your deck until revealing one that isn’t an Action. Put all of your revealed cards into your hand.'
    },
    'seaHag':{
      type:'action',
      name:'Sea Hag',
      cost:4,
      text:'Each other player discards the top card of his deck, then gains a Curse card, putting it on top of his deck.'
    },
    'shantyTown':{
      type:'action',
      name:'Shanty Town',
      cost:3,
      text:'+2 Actions\nReveal your hand. If you have no Action cards in hand, +2 Cards.'
    },
    'sirBailey':{
      type:'action',
      name:'Sir Bailey',
      cost:5,
      text:'+1 Card; +1 Action\nEach other player reveals the top 2 cards of his deck, trashes one of them costing from $3 to $6, and discards the rest. If a Knight is trashed by this, trash this card.'
    },
    'sirDestry':{
      type:'action',
      name:'Sir Destry',
      cost:5,
      text:'+2 Cards\nEach other player reveals the top 2 cards of his deck, trashes one of them costing from $3 to $6, and discards the rest. If a Knight is trashed by this, trash this card.'
    },
    'sirMartin':{
      type:'action',
      name:'Sir Martin',
      cost:5,
      text:'+2 Buys\nEach other player reveals the top 2 cards of his deck, trashes one of them costing from $3 to $6, and discards the rest. If a Knight is trashed by this, trash this card.'
    },
    'sirMichael':{
      type:'action',
      name:'Sir Michael',
      cost:5,
      text:'Each other player discards down to 3 cards in hand.\nEach other player reveals the top 2 cards of his deck, trashes one of them costing from $3 to $6, and discards the rest. If a Knight is trashed by this, trash this card.'
    },
    'sirVander':{
      type:'action',
      name:'Sir Vander',
      cost:5,
      text:'Each other player reveals the top 2 cards of his deck, trashes one of them costing from $3 to $6, and discards the rest. If a Knight is trashed by this, trash this card.\n___\nWhen this is trashed, gain a Gold.'
    },
    'smithy':{
      type:'action',
      name:'Smithy',
      cost:4,
      text:'+3 Cards.'
    },
    'smugglers':{
      type:'action',
      name:'Smugglers',
      cost:3,
      text:'Gain a copy of a card costing up to $6 that the player to your right gained on his last turn.'
    },
    'spiceMerchant':{
      type:'action',
      name:'Spice Merchant',
      cost:4,
      text:'You may trash a Treasure from your hand. If you do, choose one:\n+2 Cards and +1 Action;\nor +$2 and +1 Buy.'
    },
    'spy':{
      type:'action',
      name:'Spy',
      cost:4,
      text:'+1 Card; +1 Action\nEach player (including you) reveals the top card of his deck and either discards it or puts it back, your choice.'
    },
    'squire':{
      type:'action',
      name:'Squire',
      cost:2,
      text:'+$1\nChoose one: +2 Actions; or +2 Buys; or gain a Silver.\n___\nWhen you trash this, gain an Attack card.'
    },
    'stables':{
      type:'action',
      name:'Stables',
      cost:5,
      text:'You may discard a Treasure. If you do, +3 Cards and +1 Action.'
    },
    'steward':{
      type:'action',
      name:'Steward',
      cost:3,
      text:'Choose one: +2 Cards; or +$2; or trash 2 cards from your hand.'
    },
    'storeroom':{
      type:'action',
      name:'Storeroom',
      cost:3,
      text:'+1 Buy\nDiscard any number of cards. +1 Card per card discarded. Discard any number of cards. +$1 per card discarded the second time.'
    },
    'swindler':{
      type:'action',
      name:'Swindler',
      cost:3,
      text:'+$2\nEach other player trashes the top card of his deck and gains a card with the same cost that you choose.'
    },
    'thief':{
      type:'action',
      name:'Thief',
      cost:4,
      text:'Each other player reveals the top 2 cards of his deck. If they revealed any Treasure cards, they trash one of them that you choose. You may gain any or all of these trashed cards. They discard the other revealed cards.'
    },
    'throneRoom':{
      type:'action',
      name:'Throne Room',
      cost:4,
      text:'Choose an Action card in your hand. Play it twice.'
    },
    'torturer':{
      type:'action',
      name:'Torturer',
      cost:5,
      text:'+3 Cards\nEach other player chooses one: he discards 2 cards; or he gains a Curse card, putting it in his hand.'
    },
    'tournament':{
      type:'action',
      name:'Tournament',
      cost:4,
      text:'+1 Action\nEach player may reveal a Province from his hand.\nIf you do, discard it and gain a Prize (from the Prize pile) or a Duchy, putting it on top of your deck.\nIf no-one else does, +1 Card, +$1.'
    },
    'tradeRoute':{
      type:'action',
      name:'Trade Route',
      cost:3,
      text:'+1 Buy; +$1 per token on the Trade Route mat.\nTrash a card from your hand.Setup: Put a token on each Victory card Supply pile. When a card is gained from that pile, move the token to the Trade Route mat.'
    },
    'tradingPost':{
      type:'action',
      name:'Trading Post',
      cost:5,
      text:'Trash 2 cards from your hand. If you do, gain a silver card; put it into your hand.'
    },
    'transmute':{
      type:'action',
      name:'Transmute',
      cost:0,
      potion:true,
      text:'Trash a card from your hand. If it is an… Action card, gain a Duchy; Treasure card, gain a Transmute; Victory card, gain a Gold.'
    },
    'treasureMap':{
      type:'action',
      name:'Treasure Map',
      cost:4,
      text:'Trash this and another copy of Treasure Map from your hand. If you do trash two Treasure Maps, gain 4 Gold cards, putting them on top of your deck.'
    },
    'treasury':{
      type:'action',
      name:'Treasury',
      cost:5,
      text:'+1 Card; +1 Action; +$1\nWhen you discard this from play, if you didn’t buy a Victory card this turn, you may put this on top of your deck.'
    },
    'tribute':{
      type:'action',
      name:'Tribute',
      cost:5,
      text:'The player to your left reveals then discards the top 2 cards of his deck. For each differently named card revealed, if it is an… Action Card; +2 Actions; Treasure Card; +$2; Victory Card; +2 Cards.'
    },
    'trustySteed':{
      type:'action',
      name:'Trusty Steed',
      cost:0,
      text:'Choose two: +2 Cards; or +2 Actions; or +$2; or gain 4 Silvers and put your deck into your discard pile.'
    },
    'university':{
      type:'action',
      name:'University',
      cost:2,
      potion:true,
      text:'+2 Actions\nYou may gain an Action card costing up to $5.'
    },
    'upgrade':{
      type:'action',
      name:'Upgrade',
      cost:5,
      text:'+1 Card; +1 Action\nTrash a card from your hand. Gain a card costing exactly $1 more than it.'
    },
    'urchin':{
      type:'action',
      name:'Urchin',
      cost:3,
      text:'+1 Card; +1 Action\nEach other player discards down to 4 cards in hand.\n___\nWhen you play another Attack card with this in play, you may trash this. If you do, gain a Mercenary from the Mercenary pile.'
    },
    'vagrant':{
      type:'action',
      name:'Vagrant',
      cost:2,
      text:'+1 Card; +1 Action\nReveal the top card of your deck. If it’s a Victory card, Curse, Ruins, or Shelter, put it into your hand.'
    },
    'vault':{
      type:'action',
      name:'Vault',
      cost:5,
      text:'+2 Cards\nDiscard any number of cards. +$1 per card discarded. Each other player may discard 2 cards. If he does, he draws a card.'
    },
    'wanderingMinstrel':{
      type:'action',
      name:'Wandering Minstrel',
      cost:4,
      text:'+1 Card; +2 Actions\nReveal the top 3 cards of your deck. Put the Actions back on top in any order and discard the rest.'
    },
    'warehouse':{
      type:'action',
      name:'Warehouse',
      cost:3,
      text:'+3 Cards; +1 Action\nDiscard 3 cards.'
    },
    'wishingWell':{
      type:'action',
      name:'Wishing Well',
      cost:3,
      text:'+1 Card; +1 Action\nName a card, then reveal the top card of your deck. If it is the named card, put it in your hand.'
    },
    'witch':{
      type:'action',
      name:'Witch',
      cost:5,
      text:'+2 Cards\nEach other player gains a Curse card.'
    },
    'youngWitch':{
      type:'action',
      name:'Young Witch',
      cost:4,
      text:'+2 Cards\nDiscard 2 cards. Each other player may reveal a Bane card from his hand. If he doesn’t, he gains a Curse.Setup: Add an extra Kingdom card pile costing $2 or $3 to the Supply. Cards from that pile are Bane cards.'
    },
    'woodcutter':{
      type:'action',
      name:'Woodcutter',
      cost:3,
      text:'+1 Buy; +$2.'
    },
    'workshop':{
      type:'action',
      name:'Workshop',
      cost:3,
      text:'+1 Buy; +$2.'
    },
    'beggar':{
      type:'reaction',
      name:'Beggar',
      cost:2,
      text:'Gain 3 Coppers, putting them into your hand.\n___\nWhen another player plays an Attack card, you may discard this. If you do, gain two Silvers, putting one on top of your deck.'
    },
    'watchtower':{
      type:'reaction',
      name:'Watchtower',
      cost:3,
      text:'Draw until you have 6 cards in hand.\nWhen you gain a card, you may reveal this from your hand. If you do, either trash that card, or put it on top of your deck.'
    },
    'horseTraders':{
      type:'reaction',
      name:'Horse Traders',
      cost:4,
      text:'+1 Buy; +$3; Discard 2 cards.\nWhen another player plays an Attack card, you may set this aside from your hand. If you do, then at the start of your next turn, +1 Card and return this to your hand.'
    },
    'moat':{
      type:'reaction',
      name:'Moat',
      cost:2,
      text:'+2 Cards\nWhen another player plays an Attack card, you may reveal this from your hand. If you do, you are unaffected by that Attack.'
    },
    'secretChamber':{
      type:'reaction',
      name:'Secret Chamber',
      cost:2,
      text:'Discard any number of cards. +$1 per card discarded.\nWhen another player plays an Attack card, you may reveal this from your hand. If you do, +2 cards, then put 2 cards from your hand on top of your deck.'
    },
    'trader':{
      type:'reaction',
      name:'Trader',
      cost:4,
      text:'Trash a card from your hand. Gain a number of Silvers equal to its cost in coins.\n—\nWhen you would gain a card, you may reveal this from your hand. If you do, instead, gain a silver.'
    },
    'bank':{
      type:'treasure',
      name:'Bank',
      cost:7,
      text:'Worth $?\nWhen you play this, it’s worth $1 per Treasure card you have in play (counting this).'
    },
    'cache':{
      type:'treasure',
      name:'Cache',
      cost:5,
      text:'Worth $3\n—\nWhen you gain this, gain two Coppers.'
    },
    'contraband':{
      type:'treasure',
      name:'Contraband',
      cost:5,
      text:'Worth $3\n+1 Buy\nWhen you play this, the player to your left names a card. You can’t buy that card this turn.'
    },
    'counterfeit':{
      type:'treasure',
      name:'Counterfeit',
      cost:5,
      text:'$1; +1 Buy\nWhen you play this, you may play a treasure from your hand twice. If you do, trash that treasure.'
    },
    'diadem':{
      type:'treasure',
      name:'Diadem',
      cost:0,
      text:'Worth $2.\nWhen you play this, +$1 per unused Action you have (Action, not Action card).'
    },
    'hoard':{
      type:'treasure',
      name:'Hoard',
      cost:6,
      text:'Worth $2.\nWhile this is in play, when you buy a Victory card, gain a Gold.'
    },
    'hornOfPlenty':{
      type:'treasure',
      name:'Horn Of Plenty',
      cost:5,
      text:'Worth $0.\nWhen you play this, gain a card costing up to $1 per differently named card you have in play, counting this. If it’s a Victory card, trash this.'
    },
    'illGottenGains':{
      type:'treasure',
      name:'Ill-Gotten Gains',
      cost:5,
      text:'Worth $1\nWhen you play this, you may gain a Copper, putting it into your hand.\n—\nWhen you gain this, each other player gains a Curse.'
    },
    'loan':{
      type:'treasure',
      name:'Loan',
      cost:3,
      text:'Worth $1\nWhen you play this, reveal cards from your deck until you reveal a Treasure. Discard it or trash it. Discard the other cards.'
    },
    'philosophersStone':{
      type:'treasure',
      name:"Philosopher's Stone",
      cost:3,
      potion:true,
      text:'When you play this, count your deck and discard pile. Worth $1 per 5 cards total between them (rounded down).'
    },
    'platinum':{
      type:'treasure',
      name:'Platinum',
      cost:9,
      text:'Worth $5'
    },
    'potion':{
      type:'treasure',
      name:'Potion',
      cost:4,
      text:'Worth 1◉.'
    },
    'quarry':{
      type:'treasure',
      name:'Quarry',
      cost:4,
      text:'Worth $1.\nWhile this is in play, Action cards cost $2 less, but not less than $0.'
    },
    'royalSeal':{
      type:'treasure',
      name:'Royal Seal',
      cost:5,
      text:'Worth $2\nWhile this is in play, when you gain a card, you may put that card on top of your deck.'
    },
    'silver':{
      type:'treasure',
      name:'Silver',
      cost:3,
      text:'Worth $2'
    },
    'spoils':{
      type:'treasure',
      name:'Spoils',
      cost:0,
      text:'$3\nWhen you play this, return it to the pile.'
    },
    'stash':{
      type:'treasure',
      name:'Stash',
      cost:5,
      text:'Worth $2\nWhen you shuffle, you may put this anywhere in your deck.'
    },
    'talisman':{
      type:'treasure',
      name:'Talisman',
      cost:4,
      text:'Worth $1.\nWhile this is in play, when you buy a card costing $4 or less that is not a Victory card, gain a copy of it.'
    },
    'venture':{
      type:'treasure',
      name:'Venture',
      cost:5,
      text:'Worth $1\nWhen you play this, reveal cards from your deck until you reveal a Treasure. Discard the other cards. Play that Treasure.'
    },
    'colony':{
      type:'victory',
      name:'Colony',
      cost:11,
      text:'10 Victory Points'
    },
    'duchy':{
      type:'victory',
      name:'Duchy',
      cost:5,
      text:'Worth 3 VP'
    },
    'duke':{
      type:'victory',
      name:'Duke',
      cost:5,
      text:'Worth 1 Victory Point per Duchy you have.'
    },
    'fairgrounds':{
      type:'victory',
      name:'Fairgrounds',
      cost:6,
      text:'Worth 2VP for every 5 differently named cards in your deck (round down).'
    },
    'farmland':{
      type:'victory',
      name:'Farmland',
      cost:6,
      text:'2 VP\n—\nWhen you buy this, trash a card from your hand. Gain a card costing exactly $2 more than the trashed card.'
    },
    'feodum':{
      type:'victory',
      name:'Feodum',
      cost:4,
      text:'Worth 1 VP for every 3 Silvers in your deck.\n___\nWhen you trash this, gain 3 Silvers.'
    },
    'gardens':{
      type:'victory',
      name:'Gardens',
      cost:4,
      text:'Worth 1 Victory for every 10 cards in your deck (rounded down).'
    },
    'province':{
      type:'victory',
      name:'Province',
      cost:8,
      text:'Worth 6 VP'
    },
    'silkRoad':{
      type:'victory',
      name:'Silk Road',
      cost:4,
      text:'Worth 1 Victory Point for every 4 Victory cards in your deck (round down).'
    },
    'vineyard':{
      type:'victory',
      name:'Vineyard',
      cost:0,
      potion:true,
      text:'Worth 1 Victory Point for every 3 Action cards in your deck (rounded down).'
    },
    'caravan':{
      type:'duration',
      name:'Caravan',
      cost:4,
      text:'+1 Card; +1 Action\nAt the start of your next turn, +1 Card.'
    },
    'haven':{
      type:'duration',
      name:'Haven',
      cost:2,
      text:'+1 Card; +1 Action\nSet aside a card from your hand face down. At the start of your next turn, put it into your hand.'
    },
    'lighthouse':{
      type:'duration',
      name:'Lighthouse',
      cost:2,
      text:'+1 Action\nNow and at the start of your next turn: +$1.\nWhile this is in play, when another player plays an Attack card, it doesn’t affect you.'
    },
    'merchantShip':{
      type:'duration',
      name:'Merchant Ship',
      cost:5,
      text:'Now and at the start of your next turn: +$2.'
    },
    'outpost':{
      type:'duration',
      name:'Outpost',
      cost:5,
      text:'You only draw 3 cards (instead of 5) in this turn’s Clean-up phase. Take an extra turn after this one. This can’t cause you to take more than two consecutive turns.'
    },
    'tactician':{
      type:'duration',
      name:'Tactician',
      cost:5,
      text:'Discard your hand. If you discarded any cards this way, then at the start of your next turn, +5 Cards; +1 Buy; and +1 Action.'
    },
    'wharf':{
      type:'duration',
      name:'Wharf',
      cost:5,
      text:'Now and at the start of your next turn: +2 Cards; +1 Buy.'
    },
    'survivors':{
      type:'ruins',
      name:'Survivors',
      cost:0,
      text:'Look at the top 2 cards of your deck. Discard them or put them back in any order.'
    },
    'dameJosephine':{
      type:'action-victory',
      name:'Dame Josephine',
      cost:5,
      text:'Worth 2 VP.\nEach other player reveals the top 2 cards of his deck, trashes one of them costing from $3 to $6, and discards the rest. If a Knight is trashed by this, trash this card.'
    },
    'greatHall':{
      type:'action-victory',
      name:'Great Hall',
      cost:3,
      text:'1 Victory Point\n+1 Card; +1 Action.'
    },
    'nobles':{
      type:'action-victory',
      name:'Nobles',
      cost:6,
      text:'2 Victory Points\nChoose one: +3 Cards; or +2 Actions.'
    },
    'island':{
      type:'action-victory',
      name:'Island',
      cost:4,
      text:'Set aside this and another card from your hand. Return them to your deck at the end of the game.\nWorth 2 Victory Points'
    },
    'harem':{
      type:'treasure-victory',
      name:'Harem',
      cost:6,
      text:'Worth $2\n2 Victory Points'
    },
    'hovel':{
      type:'shelter-reaction',
      name:'Hovel',
      cost:1,
      text:'When you buy a Victory card, you may trash this from your hand.'
    },
    'necropolis':{
      type:'action-shelter',
      name:'Necropolis',
      cost:1,
      text:'+2 Actions'
    },
    'tunnel':{
      type:'victory-reaction',
      name:'Tunnel',
      cost:2,
      text:'2 Victory Points\n—\nWhen you discard this other than during a Clean-up phase, you may reveal it. If you do, gain a Gold.'
    },
    'victoryPointChips':{
      type:'vp-chip'
    },
    'curse':{
      type:'curse',
      name:'Curse',
      cost:0,
      text:'Worth -1 VP'
    }
};


var module = angular.module('cards', [], function(){});

module.factory('$cards', [function(){
  return cardList;
}]);
