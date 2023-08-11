(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.sq = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Albanian = {
      weekdays: {
          shorthand: ["Di", "HÃ«", "Ma", "MÃ«", "En", "Pr", "Sh"],
          longhand: [
              "E Diel",
              "E HÃ«nÃ«",
              "E MartÃ«",
              "E MÃ«rkurÃ«",
              "E Enjte",
              "E Premte",
              "E ShtunÃ«",
          ]
      },
      months: {
          shorthand: [
              "Jan",
              "Shk",
              "Mar",
              "Pri",
              "Maj",
              "Qer",
              "Kor",
              "Gus",
              "Sht",
              "Tet",
              "NÃ«n",
              "Dhj",
          ],
          longhand: [
              "Janar",
              "Shkurt",
              "Mars",
              "Prill",
              "Maj",
              "Qershor",
              "Korrik",
              "Gusht",
              "Shtator",
              "Tetor",
              "NÃ«ntor",
              "Dhjetor",
          ]
      },
      time_24hr: true
  };
  fp.l10ns.sq = Albanian;
  var sq = fp.l10ns;

  exports.Albanian = Albanian;
  exports.default = sq;

  Object.defineProperty(exports, '__esModule', { value: true });

}));