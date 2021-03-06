// ==========================================================================
// Project:   Samples
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Samples */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Samples.main = function main() {

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  Samples.getPath('mainPage.mainPane').append() ;

  // Step 2. Fill the types of basic shapes
  Samples.basicSourceController.refresh();
  Samples.graphsSourceController.refresh();
  Samples.chartsSourceController.refresh();
  Samples.mapsSourceController.refresh();

} ;

function main() { Samples.main(); }
