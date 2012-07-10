
var shape = new bonsai.Shape.rect(10,10,100,100).attr({fillColor: 'red'});
var group = new bonsai.Group();

group.addChild(shape);

// Clicking the shape should turn it blue
// The event is bound to the shape's parent:
group.on('click', function() {
  shape.attr('fillColor', 'blue');
});

stage.addChild(group);