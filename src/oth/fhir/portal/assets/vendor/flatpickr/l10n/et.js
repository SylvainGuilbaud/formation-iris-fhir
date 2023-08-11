(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.et = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Estonian = {
      weekdays: {
          shorthand: ["P", "E", "T", "K", "N", "R", "L"],
          longhand: [
              "PÃ¼hapÃ¤ev",
              "EsmaspÃ¤ev",
              "TeisipÃ¤ev",
              "KolmapÃ¤ev",
              "NeljapÃ¤ev",
              "Reede",
              "LaupÃ¤ev",
          ]
      },
      months: {
          shorthand: [
              "Jaan",
              "Veebr",
              "MÃ¤rts",
              "Apr",
              "Mai",
              "Juuni",
              "Juuli",
              "Aug",
              "Sept",
              "Okt",
              "Nov",
              "Dets",
          ],
          longhand: [
              "Jaanuar",
              "Veebruar",
              "MÃ¤rts",
              "Aprill",
              "Mai",
              "Juuni",
              "Juuli",
              "August",
              "September",
              "Oktoober",
              "November",
              "Detsember",
          ]
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return ".";
      },
      weekAbbreviation: "NÃ¤d",
      rangeSeparator: " kuni ",
      scrollTitle: "Keri, et suurendada",
      toggleTitle: "KlÃµpsa, et vahetada",
      time_24hr: true
  };
  fp.l10ns.et = Estonian;
  var et = fp.l10ns;

  exports.Estonian = Estonian;
  exports.default = et;

  Object.defineProperty(exports, '__esModule', { value: true });

}));