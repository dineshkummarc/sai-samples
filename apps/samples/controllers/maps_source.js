// ==========================================================================
// Samples.mapSourceController
// ==========================================================================
/*globals Samples */
/** @static

  This ArrayController that serves up the SourceList to the Map Library
  
  @extends SC.ArrayController
  @author Jeff Pittman

*/

Samples.mapsSourceController = SC.ArrayController.create(
/** @scope Samples.mapsSourceController.prototype */ {

  /**
    Expecting a tree structure
  */
  content: null,
  selection: null,
    
  refresh: function(){
    var root = [
      SC.Object.create({ name: "Base Maps", view: 'Samples.baseMapsPage.mainView'})
    ];
    
    this.set('content', root);
    this.set('selection', SC.SelectionSet.create().addObject(root[0]) );
  },
  
  mapSelected: function(){
    var sel = this.getPath('selection.firstObject');
    if (sel) {
      var scene = Samples.mapsPage.getPath('mainView.detail');
      var view = sel.get('view');
      scene.set('nowShowing', view);
    } 
    else {
      console.log('There is no selection...');
    }
    
  }
  
});
