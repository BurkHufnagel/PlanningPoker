angular.module('starter.services', [])

.factory('Decks', function() {

  var selectedDeck = 3 // Default to Pragmetic.

  // Description of different Planning Poker decks
  var decks = [{
    id: 0,
    checked: 'on',
    name: 'Pragmatic Fibonacci',
    description: 'Break up tasks that takes more than a week.',
    cards: [ 
      { 'name': '?',   'description': 'Need more info' },
      { 'name': '0',   'description': 'Already done' },
      { 'name': '1/2', 'description': 'Half a day' },
      { 'name': '1',   'description': 'One day' },
      { 'name': '2',   'description': 'Two days' },
      { 'name': '3',   'description': 'Three days' },
      { 'name': '5',   'description': 'Five days' },
      { 'name': 'Too big',   'description': 'Break this into smaller tasks' },
      { 'name': 'Infinity', 'description': 'Out of scope/cannot be done' },
      { 'name': 'Break', 'description': 'Take a break' }
    ],
  },
  {
    id: 1,
    checked: '',
    name: 'Fibonacci',
    description: 'Based on the Fibbonacci sequencs',
    cards: [ 
      { 'name': '?',   'description': 'Need more info' },
      { 'name': '0',   'description': 'Already done' },
      { 'name': '1/2', 'description': 'Half a day' },
      { 'name': '1',   'description': 'One day' },
      { 'name': '2',   'description': 'Two days' },
      { 'name': '3',   'description': 'Three days' },
      { 'name': '5',   'description': 'Five days' },
      { 'name': '8',   'description': 'Eight days' },
      { 'name': '13',  'description': 'Thirteen days' },
      { 'name': '21',  'description': 'Twenty-one days' },
      { 'name': '34',  'description': 'Thirty-four days' },
      { 'name': '55',  'description': 'Fifty-five days' },
      { 'name': 'Infinity', 'description': 'Out of scope/cannot be done' },
      { 'name': 'Break', 'description': 'Take a break' }
    ],
  },{
    id: 2,
    checked: '',
    name: 'Modified Fibonacci',
    description: 'A common mutation on the Fibbonacci sequencs',
    cards: [ 
      { 'name': '?',   'description': 'Need more info' },
      { 'name': '0',   'description': 'Already done' },
      { 'name': '1/2', 'description': 'Half a day' },
      { 'name': '1',   'description': 'One day' },
      { 'name': '2',   'description': 'Two days' },
      { 'name': '3',   'description': 'Three days' },
      { 'name': '5',   'description': 'Five days' },
      { 'name': '8',   'description': 'Eight days' },
      { 'name': '13',  'description': 'Thirteen days' },
      { 'name': '20',  'description': 'Twenty days' },
      { 'name': '40',  'description': 'Forty days' },
      { 'name': '100',  'description': 'One Hundred days' },
      { 'name': 'Infinity', 'description': 'Out of scope/cannot be done' },
      { 'name': 'Break', 'description': 'Take a break' }
    ],
  },
  {
    id: 3,
    checked: '',
    name: 'T-Shirt sizing',
    description: 'Based on t-shirt sizes.',
    cards: [ 
      { 'name': '?',   'description': 'Need more info' },
      { 'name': '0',   'description': 'Already done' },
      { 'name': 'XS',  'description': 'Extra Small' },
      { 'name': 'S',   'description': 'Small' },
      { 'name': 'M',   'description': 'Medium' },
      { 'name': 'L',   'description': 'Large' },
      { 'name': 'XL',  'description': 'Extra Large' },
      { 'name': 'XXL', 'description': 'Extra Extra Large' },
      { 'name': 'Infinity', 'description': 'Out of scope/cannot be done' },
      { 'name': 'Break', 'description': 'Take a break' }
    ],  }];

  return {
    all: function() {
      return decks;
    },
    selected: function() {
      return selectedDeck;
    },
    setSelected: function(index) {
      selectedDeck - index;
    }
  };
});
