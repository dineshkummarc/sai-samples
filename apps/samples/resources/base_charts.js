// ==========================================================================
// Project:   Sai Samples - baseChartsPage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/

Samples.baseChartsPage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['basechart-sample'],
    layout: { top: 0, left: 0, right: 0, bottom: 0 },
    childViews: 'nodePoints nodePlusses'.w(),
    
    nodePoints: Sai.BaseChartView.design({
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

    nodePlusses: Sai.BaseChartView.design({
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
    })
  })
});

//  _getLetterString: function(index) {
//    // Cells in a cell chart have integer coordinates, x and y. Usually these are
//    // shown on the chart, but there can be alternate labelings.
//    //
//    // Each coordinate can be treated as a number/letter_string pair. Numbers
//    // are integer numbers for the x-axis. Letter strings on such charts are usually
//    // placed on the y-axix. Letter strings are represented by
//    // an integer index into the 26-letter alphabet, or multiples thereof.
//    // So, we have: 
//    //
//    //   A  ...   Z    AA  ...  ZA   AB ...  ZB
//    //   1  ...  26    27  ...  52   53 ...  78 etc.
//    //
//    // If my memory serves, a chart cell is referred to by a letter_string/number
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

