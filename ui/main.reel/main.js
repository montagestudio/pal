/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component,
    Promise = require("montage/core/promise").Promise;

/**
 * @class Main
 * @extends Component
 */

exports.Main = Component.specialize(/** @lends Main# */ {


    enterDocument: {
        value: function (firstTime) {
            if (firstTime){
                skinit("native");
            }
        }
    }







});
