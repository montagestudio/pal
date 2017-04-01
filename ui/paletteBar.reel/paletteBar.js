/**
 * @module ui/paletteBar.reel
 */
var Component = require("montage/ui/component").Component;
var d3Shape = require("d3-shape");

/**
 * @class WidgetButton
 * @extends Component
 */
exports.PaletteBar = Component.specialize(/** @lends paletteBar# */ {


    enterDocument: {
        value: function () {
        }
    },
    data: {
        value: [
            {"region": "r1", "size": 10, "flag": true},
            {"region": "r2", "size": 10, "flag": true},
            {"region": "r3", "size": 10, "flag": true},
            {"region": "r4", "size": 70, "flag": true}
        ]
    },
    draw: {
        value: function () {

        }
    }


});
