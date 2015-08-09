//Dots = new Mongo.Collection("dots");


simply.title('Hello World!');
simply.vibe('short');

var string = localStorage.getItem('string');

simply.on('singleClick', function(e) {
  if (e.button === 'up') {

    /*Dots.insert({
      type: 'dot',
      at: count
    });*/
    simply.subtitle(string+'.');
  } else if (e.button === 'down') {
    /*Dots.insert({
      type: 'dash',
      at: count
    });*/
    simply.subtitle(string+'_');
  } else if (e.button === 'select') {
    /*Dots.insert({
      type: ' ',
      at: count
    });*/
    simply.subtitle(string+' ');
  }
  localStorage.setItem('string', string);
});

simply.text({ title: 'String', subtitle: '' });

simply.on('accelTap', function(e) {
  simply.subtitle('You tapped across ' + (e.direction > 0 ? '+' : '-') + e.axis + '!');
});
