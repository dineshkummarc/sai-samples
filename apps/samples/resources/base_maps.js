// ==========================================================================
// Project:   Sai Samples - baseMapsPage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/

Samples.baseMapsPage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['basemap-sample'],
    layout: { top: 0, left: 0, right: 0, bottom: 0 },
    childViews: 'nodePoints nodePlusses hsb'.w(),
    
    nodePoints: Sai.BaseMapView.design({
      layout: { left: 25, top: 0, height: 300, width: 300 },
      backgroundColor: 'lightgray',
      margins: {left: 50, top: 50, right: 50, bottom: 50},

      grid: { cols: 5, rows: 5, 
              showCellRects: NO, 
              showCellValues: NO, 
              showCellNodesAsPlusses: NO, 
              showCellNodesAsPoints: YES, 
              showCellRectCornersAsPlusses: NO,
              cells: [{ color: { fill: 'hsb(360, 1, .5)', stroke: 'white'}, value: 360, col: 1, row: 5 },
                      { color: { fill: 'hsb(300, 1, .5)', stroke: 'white'}, value: 300, col: 2, row: 5 },
                      { color: { fill: 'hsb(240, 1, .5)', stroke: 'white'}, value: 240, col: 3, row: 5 },
                      { color: { fill: 'hsb(180, 1, .5)', stroke: 'white'}, value: 180, col: 4, row: 5 },
                      { color: { fill: 'hsb(120, 1, .5)', stroke: 'white'}, value: 120, col: 5, row: 5 },
      
                      { color: { fill: 'hsb(360, 1, .5)', stroke: 'white'}, value: 360, col: 1, row: 4 },
                      { color: { fill: 'hsb(300, 1, .5)', stroke: 'white'}, value: 300, col: 2, row: 4 },
                      { color: { fill: 'hsb(240, 1, .5)', stroke: 'white'}, value: 240, col: 3, row: 4 },
                      { color: { fill: 'hsb(180, 1, .5)', stroke: 'white'}, value: 180, col: 4, row: 4 },
                      { color: { fill: 'hsb(120, 1, .5)', stroke: 'white'}, value: 120, col: 5, row: 4 },
      
                      { color: { fill: 'hsb(360, 1, .5)', stroke: 'white'}, value: 360, col: 1, row: 3 },
                      { color: { fill: 'hsb(300, 1, .5)', stroke: 'white'}, value: 300, col: 2, row: 3 },
                      { color: { fill: 'hsb(240, 1, .5)', stroke: 'white'}, value: 240, col: 3, row: 3 },
                      { color: { fill: 'hsb(180, 1, .5)', stroke: 'white'}, value: 180, col: 4, row: 3 },
                      { color: { fill: 'hsb(120, 1, .5)', stroke: 'white'}, value: 120, col: 5, row: 3 },
      
                      { color: { fill: 'hsb(360, 1, .5)', stroke: 'white'}, value: 360, col: 1, row: 2 },
                      { color: { fill: 'hsb(300, 1, .5)', stroke: 'white'}, value: 300, col: 2, row: 2 },
                      { color: { fill: 'hsb(240, 1, .5)', stroke: 'white'}, value: 240, col: 3, row: 2 },
                      { color: { fill: 'hsb(180, 1, .5)', stroke: 'white'}, value: 180, col: 4, row: 2 },
                      { color: { fill: 'hsb(120, 1, .5)', stroke: 'white'}, value: 120, col: 5, row: 2 },
      
                      { color: { fill: 'hsb(360, 1, .5)', stroke: 'white'}, value: 360, col: 1, row: 1 },
                      { color: { fill: 'hsb(300, 1, .5)', stroke: 'white'}, value: 300, col: 2, row: 1 },
                      { color: { fill: 'hsb(240, 1, .5)', stroke: 'white'}, value: 240, col: 3, row: 1 },
                      { color: { fill: 'hsb(180, 1, .5)', stroke: 'white'}, value: 180, col: 4, row: 1 },
                      { color: { fill: 'hsb(120, 1, .5)', stroke: 'white'}, value: 120, col: 5, row: 1 }]
      },

      canvasAnchoredLabels: [{label: 'Points (circles) at Grid Nodes', anchor: 'top-left', xOffset: 25, yOffset: 15, width: 120, height: 15, 
                             labelAttrs: {anchor: 'left', textAnchor: 'left', fontSize: '12', fill: 'black', stroke: 'black'}}]
    }),

    nodePlusses: Sai.BaseMapView.design({
      layout: { left: 350, top: 0, height: 300, width: 300 },
      backgroundColor: 'lightgray',
      margins: {left: 50, top: 50, right: 50, bottom: 50},

      grid: { cols: 5, rows: 5, 
              showCellRects: NO, 
              showCellValues: NO, 
              showCellNodesAsPlusses: YES, 
              showCellNodesAsPoints: NO, 
              showCellRectCornersAsPlusses: NO,
              cells: [{ color: { fill: 'hsb(360, 1, .5)', stroke: 'white'}, value: 360, col: 1, row: 5 },
                      { color: { fill: 'hsb(300, 1, .5)', stroke: 'white'}, value: 300, col: 2, row: 5 },
                      { color: { fill: 'hsb(240, 1, .5)', stroke: 'white'}, value: 240, col: 3, row: 5 },
                      { color: { fill: 'hsb(180, 1, .5)', stroke: 'white'}, value: 180, col: 4, row: 5 },
                      { color: { fill: 'hsb(120, 1, .5)', stroke: 'white'}, value: 120, col: 5, row: 5 },
      
                      { color: { fill: 'hsb(360, 1, .5)', stroke: 'white'}, value: 360, col: 1, row: 4 },
                      { color: { fill: 'hsb(300, 1, .5)', stroke: 'white'}, value: 300, col: 2, row: 4 },
                      { color: { fill: 'hsb(240, 1, .5)', stroke: 'white'}, value: 240, col: 3, row: 4 },
                      { color: { fill: 'hsb(180, 1, .5)', stroke: 'white'}, value: 180, col: 4, row: 4 },
                      { color: { fill: 'hsb(120, 1, .5)', stroke: 'white'}, value: 120, col: 5, row: 4 },
      
                      { color: { fill: 'hsb(360, 1, .5)', stroke: 'white'}, value: 360, col: 1, row: 3 },
                      { color: { fill: 'hsb(300, 1, .5)', stroke: 'white'}, value: 300, col: 2, row: 3 },
                      { color: { fill: 'hsb(240, 1, .5)', stroke: 'white'}, value: 240, col: 3, row: 3 },
                      { color: { fill: 'hsb(180, 1, .5)', stroke: 'white'}, value: 180, col: 4, row: 3 },
                      { color: { fill: 'hsb(120, 1, .5)', stroke: 'white'}, value: 120, col: 5, row: 3 },
      
                      { color: { fill: 'hsb(360, 1, .5)', stroke: 'white'}, value: 360, col: 1, row: 2 },
                      { color: { fill: 'hsb(300, 1, .5)', stroke: 'white'}, value: 300, col: 2, row: 2 },
                      { color: { fill: 'hsb(240, 1, .5)', stroke: 'white'}, value: 240, col: 3, row: 2 },
                      { color: { fill: 'hsb(180, 1, .5)', stroke: 'white'}, value: 180, col: 4, row: 2 },
                      { color: { fill: 'hsb(120, 1, .5)', stroke: 'white'}, value: 120, col: 5, row: 2 },
      
                      { color: { fill: 'hsb(360, 1, .5)', stroke: 'white'}, value: 360, col: 1, row: 1 },
                      { color: { fill: 'hsb(300, 1, .5)', stroke: 'white'}, value: 300, col: 2, row: 1 },
                      { color: { fill: 'hsb(240, 1, .5)', stroke: 'white'}, value: 240, col: 3, row: 1 },
                      { color: { fill: 'hsb(180, 1, .5)', stroke: 'white'}, value: 180, col: 4, row: 1 },
                      { color: { fill: 'hsb(120, 1, .5)', stroke: 'white'}, value: 120, col: 5, row: 1 }]
      },

      canvasAnchoredLabels: [{label: 'Plusses at Grid Nodes', anchor: 'top-left', xOffset: 25, yOffset: 15, width: 120, height: 15, 
                             labelAttrs: {anchor: 'left', textAnchor: 'left', fontSize: '12', fill: 'black', stroke: 'black'}}]
    }),

    hsb: Sai.BaseMapView.design({
      layout: { left: 25, top: 325, height: 300, width: 450 },
      backgroundColor: 'lightgray',
      margins: {left: 100, top: 50, right: 40, bottom: 50},
      grid: { cols: 6, rows: 9, 
              showCellRects: YES, 
              showCellValues: NO, 
              showCellNodesAsPlusses: NO, 
              showCellNodesAsPoints: NO, 
              showCellRectCornersAsPlusses: NO,
              cells: [{ color: { fill: 'hsb(360,   1, .75)',  stroke: 'white'}, value: 360, col: 1, row: 9 },
                      { color: { fill: 'hsb(300,   1, .5)',   stroke: 'white'}, value: 300, col: 2, row: 9 },
                      { color: { fill: 'hsb(240,   1, .25)',  stroke: 'white'}, value: 240, col: 3, row: 9 },
                      { color: { fill: 'hsb(180,   1, 0)',    stroke: 'white'}, value: 180, col: 4, row: 9 },
                      { color: { fill: 'hsb(120,   1, .25)',  stroke: 'white'}, value: 120, col: 5, row: 9 },
                      { color: { fill: 'hsb( 60,   1, .5)',   stroke: 'white'}, value:  60, col: 6, row: 9 },

                      { color: { fill: 'hsb(360, .875, .75)', stroke: 'white'}, value: 360, col: 1, row: 8 },
                      { color: { fill: 'hsb(300, .875, .5)',  stroke: 'white'}, value: 300, col: 2, row: 8 },
                      { color: { fill: 'hsb(240, .875, .25)', stroke: 'white'}, value: 240, col: 3, row: 8 },
                      { color: { fill: 'hsb(180, .875, 0)',   stroke: 'white'}, value: 180, col: 4, row: 8 },
                      { color: { fill: 'hsb(120, .875, .25)', stroke: 'white'}, value: 120, col: 5, row: 8 },
                      { color: { fill: 'hsb( 60, .875, .5)',  stroke: 'white'}, value:  60, col: 6, row: 8 },

                      { color: { fill: 'hsb(360, .75, .75)',  stroke: 'white'}, value: 360, col: 1, row: 7 },
                      { color: { fill: 'hsb(300, .75, .5)',   stroke: 'white'}, value: 300, col: 2, row: 7 },
                      { color: { fill: 'hsb(240, .75, .25)',  stroke: 'white'}, value: 240, col: 3, row: 7 },
                      { color: { fill: 'hsb(180, .75, 0)',    stroke: 'white'}, value: 180, col: 4, row: 7 },
                      { color: { fill: 'hsb(120, .75, .25)',  stroke: 'white'}, value: 120, col: 5, row: 7 },
                      { color: { fill: 'hsb( 60, .75, .5)',   stroke: 'white'}, value:  60, col: 6, row: 7 },

                      { color: { fill: 'hsb(360, .625, .75)', stroke: 'white'}, value: 360, col: 1, row: 6 },
                      { color: { fill: 'hsb(300, .625, .5)',  stroke: 'white'}, value: 300, col: 2, row: 6 },
                      { color: { fill: 'hsb(240, .625, .25)', stroke: 'white'}, value: 240, col: 3, row: 6 },
                      { color: { fill: 'hsb(180, .625, 0)',   stroke: 'white'}, value: 180, col: 4, row: 6 },
                      { color: { fill: 'hsb(120, .625, .25)', stroke: 'white'}, value: 120, col: 5, row: 6 },
                      { color: { fill: 'hsb( 60, .625, .5)',  stroke: 'white'}, value:  60, col: 6, row: 6 },

                      { color: { fill: 'hsb(360, .5, .75)',   stroke: 'white'}, value: 360, col: 1, row: 5 },
                      { color: { fill: 'hsb(300, .5, .5)',    stroke: 'white'}, value: 300, col: 2, row: 5 },
                      { color: { fill: 'hsb(240, .5, .25)',   stroke: 'white'}, value: 240, col: 3, row: 5 },
                      { color: { fill: 'hsb(180, .5, 0)',     stroke: 'white'}, value: 180, col: 4, row: 5 },
                      { color: { fill: 'hsb(120, .5, .25)',   stroke: 'white'}, value: 120, col: 5, row: 5 },
                      { color: { fill: 'hsb( 60, .5, .5)',    stroke: 'white'}, value:  60, col: 6, row: 5 },

                      { color: { fill: 'hsb(360, .375, .75)', stroke: 'white'}, value: 360, col: 1, row: 4 },
                      { color: { fill: 'hsb(300, .375, .5)',  stroke: 'white'}, value: 300, col: 2, row: 4 },
                      { color: { fill: 'hsb(240, .375, .25)', stroke: 'white'}, value: 240, col: 3, row: 4 },
                      { color: { fill: 'hsb(180, .375, 0)',   stroke: 'white'}, value: 180, col: 4, row: 4 },
                      { color: { fill: 'hsb(120, .375, .25)', stroke: 'white'}, value: 120, col: 5, row: 4 },
                      { color: { fill: 'hsb( 60, .375, .5)',  stroke: 'white'}, value:  60, col: 6, row: 4 },

                      { color: { fill: 'hsb(360, .25, .75)',  stroke: 'white'}, value: 360, col: 1, row: 3 },
                      { color: { fill: 'hsb(300, .25, .5)',   stroke: 'white'}, value: 300, col: 2, row: 3 },
                      { color: { fill: 'hsb(240, .25, .25)',  stroke: 'white'}, value: 240, col: 3, row: 3 },
                      { color: { fill: 'hsb(180, .25, 0)',    stroke: 'white'}, value: 180, col: 4, row: 3 },
                      { color: { fill: 'hsb(120, .25, .25)',  stroke: 'white'}, value: 120, col: 5, row: 3 },
                      { color: { fill: 'hsb( 60, .25, .5)',   stroke: 'white'}, value:  60, col: 6, row: 3 },

                      { color: { fill: 'hsb(360, .125, .75)', stroke: 'white'}, value: 360, col: 1, row: 2 },
                      { color: { fill: 'hsb(300, .125, .5)',  stroke: 'white'}, value: 300, col: 2, row: 2 },
                      { color: { fill: 'hsb(240, .125, .25)', stroke: 'white'}, value: 240, col: 3, row: 2 },
                      { color: { fill: 'hsb(180, .125, 0)',   stroke: 'white'}, value: 180, col: 4, row: 2 },
                      { color: { fill: 'hsb(120, .125, .25)', stroke: 'white'}, value: 120, col: 5, row: 2 },
                      { color: { fill: 'hsb( 60, .125, .5)',  stroke: 'white'}, value:  60, col: 6, row: 2 },

                      { color: { fill: 'hsb(360, 0, .75)',    stroke: 'white'}, value: 360, col: 1, row: 1 },
                      { color: { fill: 'hsb(300, 0, .5)',     stroke: 'white'}, value: 300, col: 2, row: 1 },
                      { color: { fill: 'hsb(240, 0, .25)',    stroke: 'white'}, value: 240, col: 3, row: 1 },
                      { color: { fill: 'hsb(180, 0, 0)',      stroke: 'white'}, value: 180, col: 4, row: 1 },
                      { color: { fill: 'hsb(120, 0, .25)',    stroke: 'white'}, value: 120, col: 5, row: 1 },
                      { color: { fill: 'hsb( 60, 0, .5)',     stroke: 'white'}, value:  60, col: 6, row: 1 }]
      },

      leftAxis: {color: 'black', labelAttrs: {fontSize: '9'}, labels: ['0', '.125', '.25', '.375', '.5', '.625', '.75', '.875', '1']},
      topAxis: {color: 'black', labelAttrs: {fontSize: '9'}, labels: ['.75', '.5', '.25', '0', '.25', '.5']},
      bottomAxis: {color: 'black', labelAttrs: {fontSize: '9'}, labels: ['360', '300', '240', '180', '120', '60']},

      axisAnchoredLabels:  [{label: 'HSB', anchor: 'top-left', xOffset: -50, yOffset: -30, width: 40, height: 15, 
                             labelAttrs: {anchor: 'center', textAnchor: 'center', fontSize: '12', fill: 'black', stroke: 'black'}},
                            {label: 'Saturation', anchor: 'left-middle', xOffset: -75, yOffset: 0, width: 30, height: 15, 
                             labelAttrs: {anchor: 'center', textAnchor: 'center', rotate: {rotation: -90, x: 0, y: 0}, fontSize: '12', fill: 'black', stroke: 'black'}},
                            {label: 'Hue', anchor: 'bottom-middle', xOffset: 0, yOffset: 25, width: 30, height: 15, 
                             labelAttrs: {anchor: 'center', textAnchor: 'center', fontSize: '12', fill: 'black', stroke: 'black'}},
                            {label: 'Brightness', anchor: 'top-middle', xOffset: 0, yOffset: -40, width: 30, height: 15, 
                             labelAttrs: {anchor: 'center', textAnchor: 'center', fontSize: '12', fill: 'black', stroke: 'black'}}]
    })
  })
});

//  _getLetterString: function(index) {
//    // Cells in a cell map have integer coordinates, x and y. Usually these are
//    // shown on the map, but there can be alternate labelings.
//    //
//    // Each coordinate can be treated as a number/letter_string pair. Numbers
//    // are integer numbers for the x-axis. Letter strings on such maps are usually
//    // placed on the y-axix. Letter strings are represented by
//    // an integer index into the 26-letter alphabet, or multiples thereof.
//    // So, we have: 
//    //
//    //   A  ...   Z    AA  ...  ZA   AB ...  ZB
//    //   1  ...  26    27  ...  52   53 ...  78 etc.
//    //
//    // If my memory serves, a map cell is referred to by a letter_string/number
//    // pair (y/x), which is switched from normal x/y order. For example,
//    // cells would be referred to as A13, J24, CB42, where A, J, and CB are y
//    // coordinates..
//    //
//    // We only handle one- or two-letter letter_strings.
//    //
//    if (index < 26) {
//      return this.alphabet.charAt(index);
//    }
//    else if (index < this.twoLetterLimit) {
//      var multiple = index / 26;
//      var secondLetterIndex = alphabet.indexOf(multiple);
//      var secondLetter = this.alphabet.charAt(secondLetterIndex);
//      return this.alphabet.charAt(index % 26) + secondLetter;
//    }
//    else {
//      return 'ZZZ';
//    }
//  },

