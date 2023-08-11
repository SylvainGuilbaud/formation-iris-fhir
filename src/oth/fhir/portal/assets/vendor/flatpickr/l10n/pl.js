(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.pl = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Polish = {
      weekdays: {
          shorthand: ["Nd", "Pn", "Wt", "År", "Cz", "Pt", "So"],
          longhand: [
              "Niedziela",
              "PoniedziaÅek",
              "Wtorek",
              "Åroda",
              "Czwartek",
              "PiÄtek",
              "Sobota",
          ]
      },
      months: {
          shorthand: [
              "Sty",
              "Lut",
              "Mar",
              "Kwi",
              "Maj",
              "Cze",
              "Lip",
              "Sie",
              "Wrz",
              "PaÅº",
              "Lis",
              "Gru",
          ],
          longhand: [
              "StyczeÅ",
              "Luty",
              "Marzec",
              "KwiecieÅ",
              "Maj",
              "Czerwiec",
              "Lipiec",
              "SierpieÅ",
              "WrzesieÅ",
              "PaÅºdziernik",
              "Listopad",
              "GrudzieÅ",
          ]
      },
      rangeSeparator: " do ",
      weekAbbreviation: "tydz.",
      scrollTitle: "PrzewiÅ, aby zwiÄkszyÄ",
      toggleTitle: "Kliknij, aby przeÅÄczyÄ",
      firstDayOfWeek: 1,
      time_24hr: true,
      ordinal: function () {
          return ".";
      }
  };
  fp.l10ns.pl = Polish;
  var pl = fp.l10ns;

  exports.Polish = Polish;
  exports.default = pl;

  Object.defineProperty(exports, '__esModule', { value: true });

}));