/*Dots = new Mongo.Collection("dots");


simply.title('Hello World!');
simply.vibe('short');

var count = parseInt(localStorage.getItem('count')) || 0;

simply.on('singleClick', function(e) {
  if (e.button === 'up') {

    Dots.insert({
      type: 'dot',
      at: count
    });
    simply.subtitle(++count);
  } else if (e.button === 'down') {
    Dots.insert({
      type: 'dash',
      at: count
    });
    simply.subtitle(++count);
  } else if (e.button === 'center') {
    Dots.insert({
      type: ' ',
      at: count
    });
    simply.subtitle(++count);
  }
  localStorage.setItem('count', count);
});

simply.text({ title: 'Counter', subtitle: count });

simply.on('accelTap', function(e) {
  simply.subtitle('You tapped across ' + (e.direction > 0 ? '+' : '-') + e.axis + '!');
});
*/


var config = require('config');

var meteor = require('meteor')({ url: config.ddpUrl || config.siteUrl });
var Meteor = meteor.Meteor;
var Deps = meteor.Deps;

var Player = new Meteor.Collection('players');

var App = {};

App.init = function() {
  App.players = [];
  App.playerItems = [];

  simply.text({ title: 'Leaderboard'});




  Deps.autorun(function() {
    App.getPlayers();
  });
};

App.getPlayers = function() {
  var cursor = Player.find({}, { sort: { score: -1, name: 1 } });

  App.playerItems.length = cursor.count();

  App.players = cursor.fetch();
  App.players.forEach(function(player, i) {
    var item = App.playerItems[i] || (App.playerItems[i] = {});
    item.title = player.score + ' ' + player.name;
  });

  App.homeMenu.selection(function() {
    App.homeMenu.items(0, App.playerItems);
  });
};



App.init();

App.homeMenu.on('select', function(e) {
  var player = App.players[e.itemIndex];
  if (player) {
    Player.update(player._id, { $inc: { score: 5 } });
  }
});
