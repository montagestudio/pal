/**
 * @module ui/paletteButton.reel
 */
var Component = require("montage/ui/component").Component;
var d3Shape = require("d3-shape");

/**
 * @class WidgetButton
 * @extends Component
 */
exports.PaletteButton = Component.specialize(/** @lends PaletteButton# */ {


    enterDocument: {
        value: function () {
        }
    },
    draw: {
        value: function () {

			var width = 200, height = 200, radius = 100;

			function getPathData(top) {
				// adjust the radius a little so our text's baseline isn't sitting directly on the circle
				var r = radius * (top ? .70 : 0.84);
				var startX = width/2 - r;
				return 'm' + startX + ',' + (height/2) + ' ' +
				  'a' + r + ',' + r + ' 0 0 ' + (top ? 1 : 0) +  ' ' + (2*r) + ',0';
			}


			   //this.csymbol.setAttribute("d",this.getSymbol());

			  // this.path1.setAttribute("d",getPathData(0));
			   //this.path2.setAttribute("d",getPathData(1));
        }
    }


});
