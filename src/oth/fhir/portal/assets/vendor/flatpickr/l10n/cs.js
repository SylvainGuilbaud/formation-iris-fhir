(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.cs = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Czech = {
      weekdays: {
          shorthand: ["Ne", "Po", "Ãt", "St", "Ät", "PÃ¡", "So"],
          longhand: [
              "NedÄle",
              "PondÄlÃ­",
              "ÃterÃ½",
              "StÅeda",
              "Ätvrtek",
              "PÃ¡tek",
              "Sobota",
          ]
      },
      months: {
          shorthand: [
              "Led",
              "Ãn",
              "BÅe",
              "Dub",
              "KvÄ",
              "Äer",
              "Ävc",
              "Srp",
              "ZÃ¡Å",
              "ÅÃ­j",
              "Lis",
              "Pro",
          ],
          longhand: [
              "Leden",
              "Ãnor",
              "BÅezen",
              "Duben",
              "KvÄten",
              "Äerven",
              "Äervenec",
              "Srpen",
              "ZÃ¡ÅÃ­",
              "ÅÃ­jen",
              "Listopad",
              "Prosinec",
          ]
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return ".";
      },
      rangeSeparator: " do ",
      weekAbbreviation: "TÃ½d.",
      scrollTitle: "Rolujte pro zmÄnu",
      toggleTitle: "PÅepnout dopoledne/odpoledne",
      amPM: ["dop.", "odp."],
      yearAriaLabel: "Rok",
      time_24hr: true
  };
  fp.l10ns.cs = Czech;
  var cs = fp.l10ns;

  exports.Czech = Czech;
  exports.default = cs;

  Object.defineProperty(exports, '__esModule', { value: true });

}));