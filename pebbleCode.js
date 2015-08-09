Dots = new Mongo.Collection("dots");


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
