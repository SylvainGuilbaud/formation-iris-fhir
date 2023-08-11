(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.fo = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Faroese = {
      weekdays: {
          shorthand: ["Sun", "MÃ¡n", "TÃ½s", "Mik", "HÃ³s", "FrÃ­", "Ley"],
          longhand: [
              "Sunnudagur",
              "MÃ¡nadagur",
              "TÃ½sdagur",
              "Mikudagur",
              "HÃ³sdagur",
              "FrÃ­ggjadagur",
              "Leygardagur",
          ]
      },
      months: {
          shorthand: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "Mai",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Okt",
              "Nov",
              "Des",
          ],
          longhand: [
              "Januar",
              "Februar",
              "Mars",
              "AprÃ­l",
              "Mai",
              "Juni",
              "Juli",
              "August",
              "Septembur",
              "Oktobur",
              "Novembur",
              "Desembur",
          ]
      },
      ordinal: function () {
          return ".";
      },
      firstDayOfWeek: 1,
      rangeSeparator: " til ",
      weekAbbreviation: "vika",
      scrollTitle: "Rulla fyri at broyta",
      toggleTitle: "TrÃ½st fyri at skifta",
      yearAriaLabel: "Ãr",
      time_24hr: true
  };
  fp.l10ns.fo = Faroese;
  var fo = fp.l10ns;

  exports.Faroese = Faroese;
  exports.default = fo;

  Object.defineProperty(exports, '__esModule', { value: true });

}));