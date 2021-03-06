// Project:   SCUI Samples - mixinsPage
// Copyright: ©2009-2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples */
sc_require('core');

// This page describes the main user interface for your application.  
Samples.shapesPage = SC.Page.design({
  
  mainView: SC.View.design({
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'master detail'.w(),
    
    master: SC.ListView.design({
      layout: { left: 10, top: 10, width: 250, bottom: 10 },
      rowHeight: 35,
      selectionBinding: 'Samples.basicSourceController.selection',
      contentBinding: 'Samples.basicSourceController',
      contentValueKey: 'name',
      actOnSelect: YES,
      target: 'Samples.basicSourceController',
      action: 'shapeSelected'
    }),
    
    detail: SC.SceneView.design({
      layout: {top: 10, left: 260, right: 10, bottom: 10},
      scenes: ['Samples.circlesPage.mainView', 'Samples.ellipsesPage.mainView', 'Samples.rectanglesPage.mainView', 'Samples.textPage.mainView', 'Samples.polygonsPage.mainView', 'Samples.pathsPage.mainView', 'Samples.imagesPage.mainView'],
      nowShowing: 'Samples.circlesPage.mainView'
    })
  })  
});
