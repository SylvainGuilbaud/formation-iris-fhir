(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.ko = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Korean = {
      weekdays: {
          shorthand: ["ì¼", "ì", "í", "ì", "ëª©", "ê¸", "í "],
          longhand: [
              "ì¼ìì¼",
              "ììì¼",
              "íìì¼",
              "ììì¼",
              "ëª©ìì¼",
              "ê¸ìì¼",
              "í ìì¼",
          ]
      },
      months: {
          shorthand: [
              "1ì",
              "2ì",
              "3ì",
              "4ì",
              "5ì",
              "6ì",
              "7ì",
              "8ì",
              "9ì",
              "10ì",
              "11ì",
              "12ì",
          ],
          longhand: [
              "1ì",
              "2ì",
              "3ì",
              "4ì",
              "5ì",
              "6ì",
              "7ì",
              "8ì",
              "9ì",
              "10ì",
              "11ì",
              "12ì",
          ]
      },
      ordinal: function () {
          return "ì¼";
      },
      rangeSeparator: ' ~ '
  };
  fp.l10ns.ko = Korean;
  var ko = fp.l10ns;

  exports.Korean = Korean;
  exports.default = ko;

  Object.defineProperty(exports, '__esModule', { value: true });

}));