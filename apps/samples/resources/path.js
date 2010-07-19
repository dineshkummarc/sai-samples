// ==========================================================================
// Project:   Sai Samples - pathPage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/
sc_require('views/circle');
// This page describes the main user interface for your application.  
Samples.pathPage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['circle-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'basic custom'.w(),
    
    basic: Sai.CanvasView.design({
      layout: { centerX: 210, top: 40, height: 200, width: 400 },
      childElements: 'circle1 circle2'.w(),
      backgroundColor: 'green',
      circle1: Sai.Circle.create({
        x: 10, 
        y: 10, 
        radius: 5
      }),
      
      circle2: Sai.Circle.create({
        x: 100,
        y: 100,
        radius: 15,
        fill: 'blue',
        stroke: 'yellow',
        strokeWidth: 5
      })
    }),
    
    custom: Samples.CircleView.design({
      layerId: 'test-view',
      layout: { centerX: -210, top: 40, height: 200, width: 400 },
      backgroundColor: 'green'
    })
    
  })
});

