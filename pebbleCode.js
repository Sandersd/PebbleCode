//Dots = new Mongo.Collection("dots");

var string = localStorage.getItem('string');

simply.on('singleClick', function(e) {
  if (e.button === 'up') {

    /*Dots.insert({
      type: 'dot',
      at: count
    });*/
    string += ''+'.';
    simply.subtitle(string);
  } else if (e.button === 'down') {
    /*Dots.insert({
      type: 'dash',
      at: count
    });*/
    string += ''+'_';
    simply.subtitle(string);
  } else if (e.button === 'select') {
    /*Dots.insert({
      type: ' ',
      at: count
    });*/
    string += ''+' ';
    simply.subtitle(string);
  }
  localStorage.setItem('string', string);
});

simply.text({ title: 'String', subtitle: '' });

simply.on('accelTap', function(e) {
  simply.subtitle('You tapped across ' + (e.direction > 0 ? '+' : '-') + e.axis + '!');
});
