// Project:   SCUI Samples - mixinsPage
// Copyright: ©2009-2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples */

Samples.mapsPage = SC.Page.design({
  
  mainView: SC.View.design({
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'master detail'.w(),
    
    master: SC.ListView.design({
      layout: { left: 10, top: 10, width: 150, bottom: 10 },
      rowHeight: 35,
      selectionBinding: 'Samples.mapsSourceController.selection',
      contentBinding: 'Samples.mapsSourceController',
      contentValueKey: 'name',
      actOnSelect: YES,
      target: 'Samples.mapsSourceController',
      action: 'mapSelected'
    }),
    
    detail: SC.SceneView.design({
      layout: {top: 10, left: 160, right: 10, bottom: 10},
      scenes: ['Samples.baseMapsPage.mainView',
               'Samples.hsbMapsPage.mainView'],
      nowShowing: 'Samples.baseMapsPage.mainView'
    })
  })  
});
