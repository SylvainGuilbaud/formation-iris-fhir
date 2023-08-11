(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.lt = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Lithuanian = {
      weekdays: {
          shorthand: ["S", "Pr", "A", "T", "K", "Pn", "Å "],
          longhand: [
              "Sekmadienis",
              "Pirmadienis",
              "Antradienis",
              "TreÄiadienis",
              "Ketvirtadienis",
              "Penktadienis",
              "Å eÅ¡tadienis",
          ]
      },
      months: {
          shorthand: [
              "Sau",
              "Vas",
              "Kov",
              "Bal",
              "Geg",
              "Bir",
              "Lie",
              "Rgp",
              "Rgs",
              "Spl",
              "Lap",
              "Grd",
          ],
          longhand: [
              "Sausis",
              "Vasaris",
              "Kovas",
              "Balandis",
              "GeguÅ¾Ä",
              "BirÅ¾elis",
              "Liepa",
              "RugpjuÌtis",
              "RugseÌjis",
              "Spalis",
              "Lapkritis",
              "Gruodis",
          ]
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return "-a";
      },
      weekAbbreviation: "Sav",
      scrollTitle: "Keisti laikÄ pelÄs rateliu",
      toggleTitle: "Perjungti laiko formatÄ",
      time_24hr: true
  };
  fp.l10ns.lt = Lithuanian;
  var lt = fp.l10ns;

  exports.Lithuanian = Lithuanian;
  exports.default = lt;

  Object.defineProperty(exports, '__esModule', { value: true });

}));