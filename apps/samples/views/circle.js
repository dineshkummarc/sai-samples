/*globals Samples Sai */

Samples.CircleView = Sai.CanvasView.extend({
  
  renderCanvas: function(canvas, firstTime) {
    if (firstTime) {
      var c = canvas.circle(80, 80, 50);
      c.set('fill', '#ff0000');
      c.set('id', 'blah');
      //canvas.ellipse(100, 100, 50, 10);
      //canvas.rectangle(10, 150, 50, 80);
    }
  },
  
  mouseDown: function(evt) {
    console.log(evt.target);
  }
  
});