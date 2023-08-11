(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.is = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Icelandic = {
      weekdays: {
          shorthand: ["Sun", "MÃ¡n", "Ãri", "MiÃ°", "Fim", "FÃ¶s", "Lau"],
          longhand: [
              "Sunnudagur",
              "MÃ¡nudagur",
              "ÃriÃ°judagur",
              "MiÃ°vikudagur",
              "Fimmtudagur",
              "FÃ¶studagur",
              "Laugardagur",
          ]
      },
      months: {
          shorthand: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "MaÃ­",
              "JÃºn",
              "JÃºl",
              "ÃgÃº",
              "Sep",
              "Okt",
              "NÃ³v",
              "Des",
          ],
          longhand: [
              "JanÃºar",
              "FebrÃºar",
              "Mars",
              "AprÃ­l",
              "MaÃ­",
              "JÃºnÃ­",
              "JÃºlÃ­",
              "ÃgÃºst",
              "September",
              "OktÃ³ber",
              "NÃ³vember",
              "Desember",
          ]
      },
      ordinal: function () {
          return ".";
      },
      firstDayOfWeek: 1,
      rangeSeparator: " til ",
      weekAbbreviation: "vika",
      yearAriaLabel: "Ãr",
      time_24hr: true
  };
  fp.l10ns.is = Icelandic;
  var is = fp.l10ns;

  exports.Icelandic = Icelandic;
  exports.default = is;

  Object.defineProperty(exports, '__esModule', { value: true });

}));