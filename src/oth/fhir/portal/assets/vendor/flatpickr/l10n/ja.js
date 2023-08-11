(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.ja = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Japanese = {
      weekdays: {
          shorthand: ["æ¥", "æ", "ç«", "æ°´", "æ¨", "é", "å"],
          longhand: [
              "æ¥ææ¥",
              "æææ¥",
              "ç«ææ¥",
              "æ°´ææ¥",
              "æ¨ææ¥",
              "éææ¥",
              "åææ¥",
          ]
      },
      months: {
          shorthand: [
              "1æ",
              "2æ",
              "3æ",
              "4æ",
              "5æ",
              "6æ",
              "7æ",
              "8æ",
              "9æ",
              "10æ",
              "11æ",
              "12æ",
          ],
          longhand: [
              "1æ",
              "2æ",
              "3æ",
              "4æ",
              "5æ",
              "6æ",
              "7æ",
              "8æ",
              "9æ",
              "10æ",
              "11æ",
              "12æ",
          ]
      },
      time_24hr: true,
      rangeSeparator: ' ãã '
  };
  fp.l10ns.ja = Japanese;
  var ja = fp.l10ns;

  exports.Japanese = Japanese;
  exports.default = ja;

  Object.defineProperty(exports, '__esModule', { value: true });

}));