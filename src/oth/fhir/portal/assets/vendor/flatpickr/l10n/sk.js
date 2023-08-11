(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.sk = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Slovak = {
      weekdays: {
          shorthand: ["Ned", "Pon", "Ut", "Str", "Å tv", "Pia", "Sob"],
          longhand: [
              "NedeÄ¾a",
              "Pondelok",
              "Utorok",
              "Streda",
              "Å tvrtok",
              "Piatok",
              "Sobota",
          ]
      },
      months: {
          shorthand: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "MÃ¡j",
              "JÃºn",
              "JÃºl",
              "Aug",
              "Sep",
              "Okt",
              "Nov",
              "Dec",
          ],
          longhand: [
              "JanuÃ¡r",
              "FebruÃ¡r",
              "Marec",
              "AprÃ­l",
              "MÃ¡j",
              "JÃºn",
              "JÃºl",
              "August",
              "September",
              "OktÃ³ber",
              "November",
              "December",
          ]
      },
      firstDayOfWeek: 1,
      rangeSeparator: " do ",
      time_24hr: true,
      ordinal: function () {
          return ".";
      }
  };
  fp.l10ns.sk = Slovak;
  var sk = fp.l10ns;

  exports.Slovak = Slovak;
  exports.default = sk;

  Object.defineProperty(exports, '__esModule', { value: true });

}));