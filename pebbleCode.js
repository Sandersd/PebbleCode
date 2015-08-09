//Dots = new Mongo.Collection("dots");


simply.title('Hello World!');
simply.vibe('short');

//var count = parseInt(localStorage.getItem('count')) || 0;

simply.on('singleClick', function(e) {
  if (e.button === 'up') {

    /*Dots.insert({
      type: 'dot',
      at: count
    });*/
    simply.subtitle('.');
  } else if (e.button === 'down') {
    /*Dots.insert({
      type: 'dash',
      at: count
    });*/
    simply.subtitle('_');
  } else if (e.button === 'select') {
    /*Dots.insert({
      type: ' ',
      at: count
    });*/
    simply.subtitle(' ');
  }
  //localStorage.setItem('count', count);
});

simply.text({ title: 'Counter', subtitle: '' });

simply.on('accelTap', function(e) {
  simply.subtitle('You tapped across ' + (e.direction > 0 ? '+' : '-') + e.axis + '!');
});
