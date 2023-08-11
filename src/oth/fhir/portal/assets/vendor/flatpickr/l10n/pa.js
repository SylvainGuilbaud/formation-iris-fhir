(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.pa = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Punjabi = {
      weekdays: {
          shorthand: ["à¨à¨¤", "à¨¸à©à¨®", "à¨®à©°à¨à¨²", "à¨¬à©à©±à¨§", "à¨µà©à¨°", "à¨¸à¨¼à©à©±à¨à¨°", "à¨¸à¨¼à¨¨à¨¿à©±à¨à¨°"],
          longhand: [
              "à¨à¨¤à¨µà¨¾à¨°",
              "à¨¸à©à¨®à¨µà¨¾à¨°",
              "à¨®à©°à¨à¨²à¨µà¨¾à¨°",
              "à¨¬à©à©±à¨§à¨µà¨¾à¨°",
              "à¨µà©à¨°à¨µà¨¾à¨°",
              "à¨¸à¨¼à©à©±à¨à¨°à¨µà¨¾à¨°",
              "à¨¸à¨¼à¨¨à¨¿à©±à¨à¨°à¨µà¨¾à¨°",
          ]
      },
      months: {
          shorthand: [
              "à¨à¨¨",
              "à¨«à¨¼à¨°",
              "à¨®à¨¾à¨°",
              "à¨à¨ªà©à¨°à©",
              "à¨®à¨",
              "à¨à©à¨¨",
              "à¨à©à¨²à¨¾",
              "à¨à¨",
              "à¨¸à¨¤à©°",
              "à¨à¨",
              "à¨¨à¨µà©°",
              "à¨¦à¨¸à©°",
          ],
          longhand: [
              "à¨à¨¨à¨µà¨°à©",
              "à¨«à¨¼à¨°à¨µà¨°à©",
              "à¨®à¨¾à¨°à¨",
              "à¨à¨ªà©à¨°à©à¨²",
              "à¨®à¨",
              "à¨à©à¨¨",
              "à¨à©à¨²à¨¾à¨",
              "à¨à¨à¨¸à¨¤",
              "à¨¸à¨¤à©°à¨¬à¨°",
              "à¨à¨à¨¤à©à¨¬à¨°",
              "à¨¨à¨µà©°à¨¬à¨°",
              "à¨¦à¨¸à©°à¨¬à¨°",
          ]
      },
      time_24hr: true
  };
  fp.l10ns.pa = Punjabi;
  var pa = fp.l10ns;

  exports.Punjabi = Punjabi;
  exports.default = pa;

  Object.defineProperty(exports, '__esModule', { value: true });

}));