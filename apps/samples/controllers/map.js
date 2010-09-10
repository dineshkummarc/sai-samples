// ==========================================================================
// Samples.mapController
// ==========================================================================
/*globals Samples */
/** @static

  This ObjectController that serves up the data that is bindable
  
  @extends SC.ObjectController
  @author Jeff Pittman

*/

Samples.mapController = SC.ObjectController.create(
/** @scope Samples.mapController.prototype */ {
  content: '[[5, 10], [8, 9], [20, 3]]',
  dataArray: function(){
    var c = this.get('content'),
        dArray = [];
  
    if (SC.typeOf(c) === SC.T_STRING && c.length > 0){
      try {
        dArray = eval(c);
        dArray = SC.typeOf(dArray) === SC.T_ARRAY ? dArray : [];
      }
      catch(e){
        dArray = [];
      }
    }
    console.log('Content: %@ and Array: %@'.fmt(c, dArray));
    return dArray;
  }.property('content').cacheable()
});
