(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.bn = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Bangla = {
      weekdays: {
          shorthand: ["à¦°à¦¬à¦¿", "à¦¸à§à¦®", "à¦®à¦à§à¦à¦²", "à¦¬à§à¦§", "à¦¬à§à¦¹à¦¸à§à¦ªà¦¤à¦¿", "à¦¶à§à¦à§à¦°", "à¦¶à¦¨à¦¿"],
          longhand: [
              "à¦°à¦¬à¦¿à¦¬à¦¾à¦°",
              "à¦¸à§à¦®à¦¬à¦¾à¦°",
              "à¦®à¦à§à¦à¦²à¦¬à¦¾à¦°",
              "à¦¬à§à¦§à¦¬à¦¾à¦°",
              "à¦¬à§à¦¹à¦¸à§à¦ªà¦¤à¦¿à¦¬à¦¾à¦°",
              "à¦¶à§à¦à§à¦°à¦¬à¦¾à¦°",
              "à¦¶à¦¨à¦¿à¦¬à¦¾à¦°",
          ]
      },
      months: {
          shorthand: [
              "à¦à¦¾à¦¨à§",
              "à¦«à§à¦¬à§à¦°à§",
              "à¦®à¦¾à¦°à§à¦",
              "à¦à¦ªà§à¦°à¦¿à¦²",
              "à¦®à§",
              "à¦à§à¦¨",
              "à¦à§à¦²à¦¾à¦",
              "à¦à¦",
              "à¦¸à§à¦ªà§à¦à§",
              "à¦à¦à§à¦à§",
              "à¦¨à¦­à§",
              "à¦¡à¦¿à¦¸à§",
          ],
          longhand: [
              "à¦à¦¾à¦¨à§à¦¯à¦¼à¦¾à¦°à§",
              "à¦«à§à¦¬à§à¦°à§à¦¯à¦¼à¦¾à¦°à§",
              "à¦®à¦¾à¦°à§à¦",
              "à¦à¦ªà§à¦°à¦¿à¦²",
              "à¦®à§",
              "à¦à§à¦¨",
              "à¦à§à¦²à¦¾à¦",
              "à¦à¦à¦¸à§à¦",
              "à¦¸à§à¦ªà§à¦à§à¦®à§à¦¬à¦°",
              "à¦à¦à§à¦à§à¦¬à¦°",
              "à¦¨à¦­à§à¦®à§à¦¬à¦°",
              "à¦¡à¦¿à¦¸à§à¦®à§à¦¬à¦°",
          ]
      }
  };
  fp.l10ns.bn = Bangla;
  var bn = fp.l10ns;

  exports.Bangla = Bangla;
  exports.default = bn;

  Object.defineProperty(exports, '__esModule', { value: true });

}));