// ==========================================================================
// Samples.chartSourceController
// ==========================================================================
/*globals Samples */
/** @static

  This ArrayController that serves up the SourceList to the Chart Library
  
  @extends SC.ArrayController
  @author Jeff Pittman

*/

Samples.chartsSourceController = SC.ArrayController.create(
/** @scope Samples.chartsSourceController.prototype */ {

  /**
    Expecting a tree structure
  */
  content: null,
  selection: null,
    
  refresh: function(){
    var root = [
      SC.Object.create({ name: "Base Charts", view: 'Samples.baseChartsPage.mainView'}),
      SC.Object.create({ name: "HSB Charts", view: 'Samples.hsbChartsPage.mainView'})
    ];
    
    this.set('content', root);
    this.set('selection', SC.SelectionSet.create().addObject(root[0]) );
  },
  
  chartSelected: function(){
    var sel = this.getPath('selection.firstObject');
    if (sel) {
      var scene = Samples.chartsPage.getPath('mainView.detail');
      var view = sel.get('view');
      scene.set('nowShowing', view);
    } 
    else {
      console.log('There is no selection...');
    }
    
  }
  
});
